<template>
    <div class="_wrapper">
        <div class="movie-container">
            <div class="movie-banner">
                <div class="movie-banner__image" :style="{backgroundImage: `url(${getImageUrl(movie.backdrop_path)}`}"></div>
                <img class="movie-banner__poster" width="275" :src="getImageUrl(movie.poster_path, 'w300')" alt="NO">
                <div>
                    <h1 class="_title-1">
                        {{movie.title}}
                    </h1>
                </div>
            </div>

            <div class="movie-info">
                <div class="movie-people__block">
                    <h2 class="_title-2">Top Billed Cast</h2>
                    <div>
                        <GenericCardList :cast-members="moviePeople.cast"/>
                    </div>

                    <h2 class="_title-2">Crew</h2>
                    <div>
                        <GenericCardList :crew-members="moviePeople.crew"/>
                    </div>
                </div>
                <div class="movie-details">
                    <div class="details-block">
                        <h3 class="_title-3">Status</h3>
                        <p>{{movie.status}}</p>
                    </div>
                    <div class="details-block">
                        <h3 class="_title-3">Original Language</h3>
                        <p>{{moviesStore.getLanguageNameByISO(movie.original_language)}}</p>
                    </div>
                    <div class="details-block">
                        <h3 class="_title-3">Budget</h3>
                        <p>${{movie.budget}}</p>
                    </div>
                    <div class="details-block">
                        <h3 class="_title-3">Revenue</h3>
                        <p>${{movie.revenue}}</p>
                    </div>
                    <div class="details-block">
                        <h3 class="_title-3">Keywords</h3>
                        <div class="keywords">
                            <div
                                class="keyword"
                                v-for="keyword in movieKeywords"
                            >{{keyword.name}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useMoviesStore} from "~/stores/moviesStore";
import GenericCardList from "~/components/GenericCardList.vue";
import {usePeopleStore} from "~/stores/peopleStore";

export default defineComponent({
    name: "movie-[movie_id]",
    components: {
        GenericCardList
    },
    data() {
        return {
            moviesStore: useMoviesStore(),
            peopleStore: usePeopleStore(),
            movie: {} as IMovieDetails,
            moviePeople: {} as IMoviePeople,
            movieKeywords: [] as IKeyword[],
        }
    },
    methods: {
        getImageUrl(path: string, resolution: string = 'original'): string { // Getting the url of the image by movie's id
            const config = useRuntimeConfig();

            return `${config.public.imagesUrl}${resolution}/${path}`;
        },
    },
    async mounted() {
        const route = useRoute();

        const movieId = Number(route.params.movie_id);
        this.movie = await this.moviesStore.getMovieDetails(movieId);

        this.moviePeople = await this.peopleStore.getMoviePeople(movieId);

        this.movieKeywords = await this.moviesStore.getMovieKeywords(movieId);
    }
})
</script>

<style scoped lang="scss">
.movie-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
}
.movie-banner {
    padding: 2rem;

    width: 100%;
    height: 475px;

    position: relative;
    background-color: black;
    z-index: -2;

    display: flex;
    gap: 2rem;

    border-radius: var(--card-border-radius);
}
.movie-banner__image {
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;

    opacity: 0.3;
    z-index: -1;

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: var(--card-border-radius);
}
.movie-banner__poster {
    object-fit: cover;
    border-radius: 1.5rem;
}
.movie-info {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: space-between;
    gap: 1rem;
}
.movie-details {
    padding-top: 4rem;

    max-width: 225px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
.details-block {
    min-height: 55px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    font-size: 13px;
}
._title-1 {
    color: white;
}
.movie-people__block {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
.keywords {
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}
.keyword {
    padding: 0 1rem;

    width: fit-content;
    height: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--secondary-color);
    border-radius: var(--card-border-radius);
}
</style>