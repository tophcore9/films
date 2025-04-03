import { defineStore } from 'pinia';

export interface IGenre {
    id: number;
    name: string;
}

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

export interface IMovieDetails extends IMovie {
    belongs_to_collection: string;
    budget: number;
    genres: IGenre[];
    homepage: string;
    imdb_id: string;
    origin_country: string[];
    production_companies: [];
    production_countries: [];
    revenue: number;
    runtime: number;
    spoken_languages: [];
    status: string;
    tagline: string;
}

const movieImageWidth = 200;

export const useMoviesStore = defineStore('movies', {
    state: () => ({
        movies: [] as IMovie[],
        genres: [] as IGenre[],
        page: 1
    }),
    actions: {
        async fetchMovies() { // Fetching top rated movies from TMDB
            const config = useRuntimeConfig();

            const response = await $fetch<{results: IMovie[]}>(
                `${config.public.baseUrl}movie/top_rated?page=${this.page = 1}`,
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
        async fetchNextPage() { // Fetching top rated movies from TMDB
            const config = useRuntimeConfig();

            const response = await $fetch<{results: IMovie[]}>(
                `${config.public.baseUrl}movie/top_rated?page=${++this.page}`,
                {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${config.public.apiKey}`
                    }
                }
            );

            this.movies.push(...response.results);
        },
        async fetchGenres() { // Fetching all the genres from TMDB
            const config = useRuntimeConfig();

            const response = await $fetch<{genres: IGenre[]}>(
                `${config.public.baseUrl}genre/movie/list`,
                {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${config.public.apiKey}`
                    }
                }
            );

            this.genres = response.genres;
        },
        getMovieUrl(movieId: number): string { // Getting the url of the image by movie's id
            const config = useRuntimeConfig();

            const movie: IMovie = this.movies.filter(movie => movie.id === movieId)[0];
            return `${config.public.imagesUrl}w${movieImageWidth}/${movie.poster_path}`;
        },
        async getMovieDetails(movieId: number): Promise<IMovieDetails> {
            const config = useRuntimeConfig();

            return await $fetch<IMovieDetails>(
                `${config.public.baseUrl}movie/${movieId}`,
                {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${config.public.apiKey}`
                    }
                }
            );
        }
    },
})
