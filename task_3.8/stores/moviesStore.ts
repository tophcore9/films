import { defineStore } from 'pinia';

export interface IMovie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface IGenre {
    id: number;
    name: string;
}

const movieImageWidth = 200;

export const useMoviesStore = defineStore('movies', {
    state: () => ({
        movies: [] as IMovie[],
        genres: [] as IGenre[],
    }),
    actions: {
        async fetchMovies() { // Fetching top rated movies from TMDB
            const config = useRuntimeConfig();

            const response = await $fetch<{results: IMovie[]}>(
                `${config.public.baseUrl}movie/top_rated?language=en-US&page=1`,
                {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${config.public.apiKey}`
                    }
                }
            );

            this.movies = response.results;
        },
        async fetchGenres() { // Fetching all the genres from TMDB
            const config = useRuntimeConfig();

            const response = await $fetch<{genres: IGenre[]}>(
                `${config.public.baseUrl}genre/movie/list?language=en`,
                {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${config.public.apiKey}`
                    }
                }
            );

            this.genres = response.genres;
            console.log(this.genres);
        },
        getMovieUrl(id: number): string { // Getting the url of the image by movie's id
            const config = useRuntimeConfig();

            const movie: IMovie = this.movies.filter(movie => movie.id === id)[0];
            return `${config.public.imagesUrl}w${movieImageWidth}/${movie.poster_path}`;
        }
    },
})
