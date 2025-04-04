<template>
    <div class="_wrapper">
        <div class="movies-container">
            <div class="movies-options">
                <DropDown :is-opened="true" title="Sort">
                    <Select :options="sorts" v-model="selectedSort"/>
                </DropDown>

                <DropDown :is-opened="true" title="Filters">
                    <div class="filters">
                        <div>Keywords</div>
                        <input
                            v-model="selectedKeyword"
                            @change="moviesStore.setKeywordsByQuery(selectedKeyword)"
                            class="_input"
                            type="text"
                            placeholder="Filter by keywords..."
                        >
                        <div class="horizontal-separator"></div>
                        <div>Genres</div>
                        <div class="genres">
                            <div class="genre" v-for="genre in genres">
                                <label class="genre-label" :for="genre.name">{{genre.name}}</label>
                                <input @change="toggleGenre(genre.id)" class="genre-input" type="checkbox" :id="genre.name">
                            </div>
                        </div>
                    </div>
                </DropDown>

                <Button @click="handleFilters" width="100%">Search</Button>
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

            selectedSort: 'popularity.desc',
            selectedGenres: [] as number[],
            selectedKeyword: '',

            genres: [] as IGenre[],
            sorts: [
                {label: "Title Ascending", value: "title.asc"},
                {label: "Title Descending", value: "title.desc"},
                {label: "Popularity Ascending", value: "popularity.asc"},
                {label: "Popularity Descending", value: "popularity.desc"},
                {label: "Revenue Ascending", value: "revenue.asc"},
                {label: "Revenue Descending", value: "revenue.desc"},
                {label: "Rating Ascending", value: "vote_average.asc"},
                {label: "Rating Descending", value: "vote_average.desc"},
            ]
        }
    },
    methods: {
        toggleGenre(genreId: number) {
            const genre = this.genres.find(genre => genre.id === genreId);

            if (genre) {
                if (this.selectedGenres.find(item => item === genreId)) {
                    const index = this.selectedGenres.findIndex(genre => Number(genre) === genreId);

                    if (index >= 0) {
                        this.selectedGenres.splice(index, 1);
                    }
                } else {
                    this.selectedGenres.push(genre.id);
                }
            }
        },
        handleFilters() {
            this.moviesStore.genresQuery = this.selectedGenres.toString();
            this.moviesStore.setKeywordsByQuery(this.selectedKeyword);
            this.moviesStore.sortQuery = this.selectedSort;

            this.moviesStore.fetchMovies();
        }
    },
    async mounted() {
        await this.moviesStore.fetchMovies();
        await this.peopleStore.fetchPeople();
        this.genres = await this.moviesStore.getGenres();
    },
    created() {
        this.moviesStore.sortQuery = 'popularity.desc';
        this.moviesStore.genresQuery = '';
        this.moviesStore.genresQuery = '';
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
.movies-options {
    position: sticky;
    top: 120px;

    height: 100%;
    max-width: 225px;
    min-width: 225px;

    display: flex;
    flex-direction: column;
    gap: 40px;
}
.horizontal-separator {
    width: 100%;
    height: 1px;
    background-color: var(--border-color);
}
.filters {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.genres {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}
.genre {
    padding: 0 1rem;

    height: 42px;
    width: fit-content;

    font-size: 13px;

    background-color: var(--secondary-color);
    border-radius: var(--card-border-radius);

    &:has(> .genre-input:checked) {
        background-color: var(--primary-color);
        color: white;
    }
}
.genre-label {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
}
.genre-input {
    appearance: none;
}
</style>