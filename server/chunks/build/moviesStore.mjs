import { defineStore } from 'pinia';
import { a as useRuntimeConfig } from './server.mjs';

const useMoviesStore = defineStore("movies", {
  state: () => {
    return {
      movies: [],
      genresQuery: "",
      sortQuery: "popularity.desc",
      keywordsQuery: "",
      page: 1
    };
  },
  actions: {
    async fetchMovies() {
      const config = useRuntimeConfig();
      const response = await $fetch(
        `${config.public.baseUrl}discover/movie?page=${this.page = 1}&sort_by=${this.sortQuery}&with_keywords=${this.keywordsQuery}&with_genres=${this.genresQuery}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${config.public.apiKey}`
          }
        }
      );
      this.movies = response.results;
    },
    async fetchNextPage() {
      const config = useRuntimeConfig();
      const response = await $fetch(
        `${config.public.baseUrl}movie/top_rated?page=${++this.page}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${config.public.apiKey}`
          }
        }
      );
      this.movies.push(...response.results);
    },
    async getGenres() {
      const config = useRuntimeConfig();
      const response = await $fetch(
        `${config.public.baseUrl}genre/movie/list`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${config.public.apiKey}`
          }
        }
      );
      return response.genres;
    },
    async getLanguages() {
      const config = useRuntimeConfig();
      return await $fetch(
        `${config.public.baseUrl}configuration/languages`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${config.public.apiKey}`
          }
        }
      );
    },
    async getMovieDetails(movieId) {
      const config = useRuntimeConfig();
      return await $fetch(
        `${config.public.baseUrl}movie/${movieId}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${config.public.apiKey}`
          }
        }
      );
    },
    async getMovieKeywords(movieId) {
      const config = useRuntimeConfig();
      const response = await $fetch(
        `${config.public.baseUrl}movie/${movieId}/keywords`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${config.public.apiKey}`
          }
        }
      );
      return response.keywords;
    },
    async setKeywordsByQuery(query) {
      const config = useRuntimeConfig();
      const response = await $fetch(
        `${config.public.baseUrl}search/keyword?query=${query}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${config.public.apiKey}`
          }
        }
      );
      if (response.results.length > 0) {
        this.keywordsQuery = response.results[0].id.toString();
      } else {
        this.keywordsQuery = "";
      }
    },
    async getLanguageNameByISO(isoName) {
      const languages = await this.getLanguages();
      const found = languages.find((lang) => lang.iso_639_1 === isoName);
      if (found) {
        return found.english_name;
      }
      return "";
    }
  }
});

export { useMoviesStore as u };
//# sourceMappingURL=moviesStore.mjs.map
