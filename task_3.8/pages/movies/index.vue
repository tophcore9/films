<template>
    <div class="_wrapper">
        <div class="movies-container">
            <div class="movies-filters">

            </div>
            <div class="movies-content">
                <GenericCardList :movies="moviesStore.movies" :next-page-handler="moviesStore.fetchNextPage"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useMoviesStore} from "~/stores/moviesStore";
import {usePeopleStore} from "~/stores/peopleStore";
import Button from '~/components/Button.vue';
import GenericCardList from '~/components/GenericCardList.vue';

export default defineComponent({
    name: "index",
    components: {
        Button,
        GenericCard: GenericCardList
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
.movies-container {
    height: 100%;
    width: 100%;

    display: flex;
    justify-content: space-between;
}
.movies-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}
.movies-filters {
    min-width: 240px;
}
</style>