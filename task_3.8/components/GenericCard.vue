<template>
    <!-- MOVIES -->
    <div class="card" v-if="movie !== undefined">
        <img class="card-image" :src="getImageUrl()" alt="no">
        <div class="card-body">
            <h4 class="_title-4">{{movie.title}}</h4>
            <p class="card-text">{{movie.release_date}}</p>
        </div>
    </div>

    <!-- PEOPLE -->
    <div class="card" v-if="person !== undefined">
        <img class="card-image" :src="getImageUrl()" alt="no">
        <div class="card-body">
            <h4 class="_title-4">{{person.name}}</h4>
            <p class="card-text">{{person.known_for_department}}</p>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
    name: "GenericCard",
    data() {
        return {
            imageWidth: 200
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
        }
    },
    methods: {
        getImageUrl(): string { // Getting the url of the image by movie's id
            const config = useRuntimeConfig();

            let path: string = '';

            if (this.person !== undefined) path = this.person.profile_path;
            else if (this.movie !== undefined) path = this.movie.poster_path;

            return `${config.public.imagesUrl}w${this.imageWidth}/${path}`;
        },
    }
})
</script>

<style scoped lang="scss">
.card {
    padding: 10px;

    width: 220px;
    min-height: fit-content;

    background-color: var(--secondary-color);
    border-radius: var(--card-border-radius);
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
</style>