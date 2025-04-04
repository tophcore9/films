<template>
    <div class="_wrapper">
        <div class="container">
            <div class="header">
                <img class="image" :src="getImageUrl()" alt="no">

                <div class="info">
                    <div class="header-content">
                        <h1 class="_title-1">
                            {{person.name}} <span v-if="person.original_name !== undefined">({{person.original_name}})</span>
                        </h1>
                        <Button
                            class="favorites-button"
                            @click="handleFavoriteToggling"
                        >
                            {{isInFavorites ? 'Remove from favorites' : 'Add to favorites'}}
                        </Button>
                    </div>

                    <div class="info-block">
                        <p>{{person.known_for_department}}</p>
                    </div>

                    <div class="info-block">
                        <h3 class="_title-3">Birthday</h3>
                        <p>{{person.birthday}}</p>
                    </div>

                    <div class="info-block">
                        <h3 class="_title-3">Place of Birth</h3>
                        <p>{{person.place_of_birth}}</p>
                    </div>

                    <div v-if="person.deathday !== null" class="info-block">
                        <h3 class="_title-3">Date of Death</h3>
                        <p>{{person.deathday}}</p>
                    </div>
                </div>
            </div>

            <div class="info-block">
                <h3 class="_title-3">Biography</h3>
                <p class="biography-text">{{person.biography}}</p>
            </div>

            <div class="films">
                <div class="films-block">
                    <h3 class="_title-2">Acting</h3>
                    <GenericCardList :movies="movies.cast"/>
                </div>
                <div class="films-block">
                    <h3 class="_title-2">Crew</h3>
                    <GenericCardList :movies="movies.crew"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {usePeopleStore} from "~/stores/peopleStore";
import {useFavoritesStore} from "~/stores/favoritesStore";
import GenericCardList from '~/components/GenericCardList.vue';
import Button from '~/components/Button.vue';
import type {IMoviesByPerson} from "~/stores/moviesStore";

export default defineComponent({
    name: "person-[person_id]",
    components: {
        GenericCardList,
        Button
    },
    data() {
        return {
            peopleStore: usePeopleStore(),
            favoritesStore: useFavoritesStore(),
            isInFavorites: false,
            person: {} as IPersonDetails,
            movies: {} as IMoviesByPerson
        }
    },
    methods: {
        getImageUrl(): string { // Getting the url of the image by movie's id
            const config = useRuntimeConfig();

            let path: string = '';

            if (this.person !== undefined && this.person.profile_path !== null) path = this.person.profile_path;
            else return '../icons/no_picture.png';

            return `${config.public.imagesUrl}w500/${path}`;
        },
        handleFavoriteToggling() {
            this.favoritesStore.togglePersonInFavorites(this.person);
            this.isInFavorites = !this.isInFavorites;
        },
    },
    async mounted() {
        const route = useRoute();

        const personId = Number(route.params.person_id);
        this.person = await this.peopleStore.getPersonDetails(personId);
        this.isInFavorites = this.favoritesStore.isPersonInFavorites(personId);
        this.movies = await this.peopleStore.getMoviesByPerson(personId);
    }
})
</script>

<style scoped lang="scss">
@use '/assets/styles/pages/person';
</style>