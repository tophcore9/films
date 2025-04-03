<template>
    <div class="_wrapper">
        <div class="movies-content">
            <div>
                <img v-for="movie in moviesStore.movies" :src="moviesStore.getMovieUrl(movie.id)" alt="no">
            </div>
            <Button
                @click="moviesStore.fetchMovies()"
                class="load-more__button"
            >
                Load more
            </Button>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useMoviesStore} from "~/stores/moviesStore";
import {usePeopleStore} from "~/stores/peopleStore";
import Button from '~/components/Button.vue';

export default defineComponent({
    name: "index",
    components: {
        Button
    },
    data() {
        return {
            moviesStore: useMoviesStore(),
            peopleStore: usePeopleStore()
        }
    },
    async mounted() {
        await this.moviesStore.fetchMovies();
        await this.peopleStore.fetchPeople();
    }
})
</script>

<style scoped lang="scss">
.movies-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}
.load-more__button {
    margin: auto;
}
</style>