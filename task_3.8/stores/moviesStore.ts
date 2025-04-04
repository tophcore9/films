import { defineStore } from 'pinia';

export interface IGenre {
    id: number;
    name: string;
}

export interface IKeyword {
    id: number;
    name: string;
}

export interface ILanguage {
    iso_639_1: string;
    english_name: string;
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

export interface IMoviesByPerson extends IMovie {
    cast: IMovie[];
    crew: IMovie[];
}

interface IMoviesStore {
    movies: IMovie[];
    genresQuery: string;
    sortQuery: string;
    keywordsQuery: string;
    page: number;
}

export const useMoviesStore = defineStore('movies', {
    state: (): IMoviesStore => {
        return {
            movies: [],
            genresQuery: '',
            sortQuery: 'popularity.desc',
            keywordsQuery: '',
            page: 1
        }
    },
    actions: {
        async fetchMovies() { // Fetching movies from TMDB
            const config = useRuntimeConfig();

            const response = await $fetch<{results: IMovie[]}>(
                `${config.public.baseUrl}discover/movie?page=${this.page = 1}&sort_by=${this.sortQuery}&with_keywords=${this.keywordsQuery}&with_genres=${this.genresQuery}`,
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
        async getGenres(): Promise<IGenre[]> { // Fetching all the genres from TMDB
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

            return response.genres;
        },
        async getLanguages(): Promise<ILanguage[]> { // Fetching all the genres from TMDB
            const config = useRuntimeConfig();

            return await $fetch<ILanguage[]>(
                `${config.public.baseUrl}configuration/languages`,
                {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${config.public.apiKey}`
                    }
                }
            );
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
        },
        async getMovieKeywords(movieId: number): Promise<IKeyword[]> {
            const config = useRuntimeConfig();

            const response = await $fetch<{keywords: IKeyword[]}>(
                `${config.public.baseUrl}movie/${movieId}/keywords`,
                {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${config.public.apiKey}`
                    }
                }
            );

            return response.keywords;
        },
        async setKeywordsByQuery(query: string) {
            const config = useRuntimeConfig();

            const response = await $fetch<{results: IKeyword[]}>(
                `${config.public.baseUrl}search/keyword?query=${query}`,
                {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${config.public.apiKey}`
                    }
                }
            );

            if (response.results.length > 0) {
                this.keywordsQuery = response.results[0].id.toString();
            } else {
                this.keywordsQuery = '';
            }
        },
        async getLanguageNameByISO(isoName: string): Promise<string> {
            const languages = await this.getLanguages();

            const found = languages.find(lang => lang.iso_639_1 === isoName);

            if (found) {
                return found.english_name;
            }

            return '';
        },

    },
})
