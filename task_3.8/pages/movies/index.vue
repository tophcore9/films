<template>
    <div class="_wrapper">
        <div class="movies-container">
            <div class="movies-filters">
                <DropDown :is-opened="false" title="Filters">
                    asdlkfj
                </DropDown>
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
import DropDown from '~/components/DropDown.vue';

export default defineComponent({
    name: "index",
    components: {
        Button,
        GenericCardList,
        DropDown,
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
    gap: 1rem;
}
.movies-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}
.movies-filters {
    min-width: 225px;
}
</style>