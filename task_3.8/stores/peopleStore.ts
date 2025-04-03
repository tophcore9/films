import {defineStore} from "pinia";
import type {IMovie} from "~/stores/moviesStore";

export interface IPerson {
    gender: number;
    id: number;
    name: string;
    known_for_department: string;
    original_name: string;
    popularity: number;
    profile_path: string,
    known_for: [{
        id: number;
        media_type: string;
    }];
}

export interface IPersonDetails extends IPerson {
    also_known_as: string[];
    biography: string;
    birthday: string;
    deathday: string;
    homepage: null,
    place_of_birth: string;
}

export interface ICastMember extends IPerson {
    character: string;
}

export interface ICrewMember extends IPerson {
    department: string;
    job: string;
}

export interface IMoviePeople {
    cast: ICastMember[];
    crew: ICrewMember[];
}

const personImageWidth = 200;

export const usePeopleStore = defineStore('people', {
    state: () => ({
        people: [] as IPerson[],
        page: 1
    }),
    actions: {
        async fetchPeople() { // Fetching top rated people from TMDB
            const config = useRuntimeConfig();

            const response = await $fetch<{ results: IPerson[] }>(
                `${config.public.baseUrl}person/popular?page=${this.page = 1}`,
                {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${config.public.apiKey}`
                    }
                }
            );

            this.people = response.results;
        },
        async fetchNextPage() { // Fetching top rated people from TMDB
            const config = useRuntimeConfig();

            const response = await $fetch<{ results: IPerson[] }>(
                `${config.public.baseUrl}person/popular?page=${++this.page}`,
                {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${config.public.apiKey}`
                    }
                }
            );

            this.people.push(...response.results);
        },
        async getPersonDetails(personId: number): Promise<IPersonDetails> {
            const config = useRuntimeConfig();

            return await $fetch<IPersonDetails>(
                `${config.public.baseUrl}person/${personId}`,
                {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${config.public.apiKey}`
                    }
                }
            );
        },
        async getMoviePeople(movieId: number): Promise<IMoviePeople> {
            const config = useRuntimeConfig();

            return await $fetch<IMoviePeople>(
                `${config.public.baseUrl}movie/${movieId}/credits`,
                {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${config.public.apiKey}`
                    }
                }
            );
        },
    }
});