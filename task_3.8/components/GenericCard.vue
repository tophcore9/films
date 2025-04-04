<template>
    <!-- MOVIES -->
    <div
        @click="navigateTo(`/movies/movie-${movie.id}`)"
        class="card"
        v-if="movie !== undefined && movie.poster_path !== null"
    >
        <img class="card-image" :src="getImageUrl()" alt="no">
        <div class="card-body">
            <h4 class="_title-4">{{movie.title}}</h4>
            <p class="card-text">{{formatDate(movie.release_date)}}</p>
            <Button @click.stop="favoritesStore.toggleMovieInFavorites(movie)" class="is-favorite" rounded width="3rem" height="3rem">
                <Icon
                    width="1.5rem"
                    height="1.5rem"
                    :url="favoritesStore.isMovieInFavorites(movie.id)
                    ? './icons/card-favorite-active.svg'
                    : './icons/card-favorite.svg'"
                />
            </Button>
        </div>
    </div>

    <!-- PEOPLE -->
    <div
        @click="navigateTo(`/people/person-${person.id}`)"
        class="card"
        v-if="person !== undefined"
    >
        <img class="card-image" :src="getImageUrl()" alt="no">
        <div class="card-body">
            <h4 class="_title-4">{{person.name}}</h4>
            <p class="card-text">{{person.known_for_department}}</p>
        </div>
        <Button @click.stop="favoritesStore.togglePersonInFavorites(person)" class="is-favorite" rounded width="3rem" height="3rem">
            <Icon
                width="1.5rem"
                height="1.5rem"
                :url="favoritesStore.isPersonInFavorites(person.id)
                    ? './icons/card-favorite-active.svg'
                    : './icons/card-favorite.svg'"
            />
        </Button>
    </div>

    <!-- CAST MEMBER -->
    <div @click="navigateTo(`/people/person-${castMember.id}`)" class="card" v-if="castMember !== undefined && castMember.profile_path !== null">
        <img class="card-image" :src="getImageUrl()" alt="no">
        <div class="card-body">
            <h4 class="_title-4">{{castMember.name}}</h4>
            <p class="card-text">{{castMember.character}}</p>
        </div>
    </div>

    <!-- CREW MEMBER -->
    <div @click="navigateTo(`/people/person-${crewMember.id}`)" class="card" v-if="crewMember !== undefined && crewMember.profile_path !== null">
        <img class="card-image" :src="getImageUrl()" alt="no">
        <div class="card-body">
            <h4 class="_title-4">{{crewMember.name}}</h4>
            <p class="card-text">{{crewMember.job}}</p>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Button from '~/components/Button.vue';
import Icon from '~/components/Icon.vue';
import {useFavoritesStore} from "~/stores/favoritesStore";

export default defineComponent({
    name: "GenericCard",
    components: {
        Button,
        Icon
    },
    data() {
        return {
            imageWidth: 200,
            favoritesStore: useFavoritesStore(),
            isFavorite: false
        }
    },
    props: {
        movie: {
            type: Object as PropType<IMovie>,
            default: undefined
        },
        person: {
            type: Object as PropType<IPerson>,
            default: undefined
        },
        castMember: {
            type: Object as PropType<ICastMember>,
            default: undefined
        },
        crewMember: {
            type: Object as PropType<ICrewMember>,
            default: undefined
        },
    },
    methods: {
        getImageUrl(): string { // Getting the url of the image by movie's id
            const config = useRuntimeConfig();

            let path: string = '';

            if (this.person !== undefined && this.person.profile_path !== null) path = this.person.profile_path;
            else if (this.movie !== undefined && this.movie.poster_path !== null) path = this.movie.poster_path;
            else if (this.castMember !== undefined && this.castMember.profile_path !== null) path = this.castMember.profile_path;
            else if (this.crewMember !== undefined && this.crewMember.profile_path !== null) path = this.crewMember.profile_path;
            else return '../icons/no_picture.png';

            return `${config.public.imagesUrl}w${this.imageWidth}/${path}`;
        },
        formatDate(apiDate: string): string {
            if (apiDate === '') return 'No data';

            const date = new Date(apiDate);

            return new Intl.DateTimeFormat('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
            }).format(date);
        }
    },
})
</script>

<style scoped lang="scss">
.card {
    padding: 10px;

    position: relative;

    width: 220px;
    min-height: fit-content;

    background-color: var(--secondary-color);
    border-radius: var(--card-border-radius);

    &:hover {
        cursor: pointer;
    }
}
.card-image {
    width: 100%;
    display: block;
    object-fit: contain;
    border-radius: var(--card-border-radius);
}
.card-body {
    padding: 1rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.card-text {
    font-size: 15px;
}
.is-favorite {
    position: absolute;
    top: 20px;
    right: 20px;
}
</style>