<template>
    <div class="_wrapper">
        Movies

        <div>
            <img v-for="movie in moviesStore.movies" :src="moviesStore.getMovieUrl(movie.id)" alt="no">
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {useMoviesStore} from "~/stores/moviesStore";
import {usePeopleStore} from "~/stores/peopleStore";

export default defineComponent({
    name: "index",
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

</style>