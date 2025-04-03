<template>
    <div class="_wrapper">
        <div class="movies-content">
            <div class="movies">
                <GenericCard v-for="movie in moviesStore.movies" :movie="movie"/>
            </div>
            <Button
                @click="moviesStore.fetchNextPage()"
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
import GenericCard from '~/components/GenericCard.vue';

export default defineComponent({
    name: "index",
    components: {
        Button,
        GenericCard
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
.movies {
    width: 100%;
}
</style>