import { defineStore } from 'pinia';
import { a as useRuntimeConfig } from './server.mjs';

const usePeopleStore = defineStore("people", {
  state: () => {
    return {
      people: [],
      page: 1
    };
  },
  actions: {
    async fetchPeople() {
      const config = useRuntimeConfig();
      const response = await $fetch(
        `${config.public.baseUrl}person/popular?page=${this.page = 1}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${config.public.apiKey}`
          }
        }
      );
      this.people = response.results;
    },
    async fetchNextPage() {
      const config = useRuntimeConfig();
      const response = await $fetch(
        `${config.public.baseUrl}person/popular?page=${++this.page}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${config.public.apiKey}`
          }
        }
      );
      this.people.push(...response.results);
    },
    async getPersonDetails(personId) {
      const config = useRuntimeConfig();
      return await $fetch(
        `${config.public.baseUrl}person/${personId}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${config.public.apiKey}`
          }
        }
      );
    },
    async getMoviePeople(movieId) {
      const config = useRuntimeConfig();
      return await $fetch(
        `${config.public.baseUrl}movie/${movieId}/credits`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${config.public.apiKey}`
          }
        }
      );
    },
    async getMoviesByPerson(personId) {
      const config = useRuntimeConfig();
      return await $fetch(
        `${config.public.baseUrl}person/${personId}/movie_credits`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${config.public.apiKey}`
          }
        }
      );
    }
  }
});

export { usePeopleStore as u };
//# sourceMappingURL=peopleStore.mjs.map
