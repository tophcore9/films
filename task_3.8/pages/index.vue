<template>
    <div class="_wrapper">
        Movies
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {useMoviesStore} from "~/stores/moviesStore";

export default defineComponent({
    name: "index",
    data() {
        return {
            movies: useMoviesStore()
        }
    },
    mounted() {
        this.movies.fetchMovies();
    }
})
</script>

<style scoped lang="scss">

</style>