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

export const useMoviesStore = defineStore('movies', {
    state: () => ({
        movies: [] as IMovie[],
    }),
    actions: {
        async fetchMovies() {
            const config = useRuntimeConfig();

            const response = await $fetch<{page: number, results: IMovie[]}>(
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
    }
})
