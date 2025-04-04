<template>
    <div class="_wrapper">
        <div class="movies-container">
            <div class="movies-filters">
                <DropDown :is-opened="true" title="Sort">
                    <Select :options="sorts" v-model="moviesStore.sortQuery"/>
                </DropDown>

                <DropDown :is-opened="true" title="Filters">
                    Keywords
                    <input class="_input" type="text" placeholder="Filter by keywords...">
                    <div class="horizontal-separator"></div>
                    Genres
                    <div class="genres">
                        <div v-for="genre in genres">{{genre.name}}</div>
                    </div>
                </DropDown>

                <Button width="100%">Search</Button>
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
import Select from '~/components/Select.vue';

export default defineComponent({
    name: "index",
    components: {
        Button,
        GenericCardList,
        DropDown,
        Select
    },
    data() {
        return {
            moviesStore: useMoviesStore(),
            peopleStore: usePeopleStore(),
            genres: [] as IGenre[],
            sorts: [
                {label: "desc", value: "desc"},
                {label: "desc", value: "desc"},
                {label: "desc", value: "desc"},
                {label: "desc", value: "desc"},
                {label: "desc", value: "desc"},
            ]
        }
    },
    async mounted() {
        await this.moviesStore.fetchMovies();
        await this.peopleStore.fetchPeople();
        this.genres = await this.moviesStore.getGenres();
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
.horizontal-separator {
    width: 100%;
    height: 1px;
    background-color: var(--border-color);
}
</style>