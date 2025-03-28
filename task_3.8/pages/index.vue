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
            moviesStore: useMoviesStore()
        }
    },
    mounted() {
        this.moviesStore.fetchMovies();
    }
})
</script>

<style scoped lang="scss">

</style>