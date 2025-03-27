import { defineStore } from 'pinia';

export const useMoviesStore = defineStore('movies', {
    state: () => ({
        movies: [],
    }),
    actions: {
        async fetchMovies() {
            const config = useRuntimeConfig();

            this.movies = await $fetch('https://api.themoviedb.org/3/movie/changes?page=1', {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${config.public.apiKey}`
                }
            });
        },
        async fetchMovie(id: number) {
            const config = useRuntimeConfig();

            return await $fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${config.public.apiKey}`
                }
            });
        }
    }
})
