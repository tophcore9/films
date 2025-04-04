<!-- MVP
minors:
  - Date format (yyyy/mm/dd)
  - Value format ($1,000,000,00)
  - User score
-->

<template>
    <div class="_wrapper">
        <div class="movie-container">
            <div class="movie-banner">
                <div class="movie-banner__image" :style="{backgroundImage: `url(${getImageUrl(movie.backdrop_path)}`}"></div>
                <img class="movie-banner__poster" width="275" :src="getImageUrl(movie.poster_path, 'w300')" alt="NO">
                <div class="banner-content">
                    <h1 class="_title-1">
                        {{movie.title}} <span class="movie-year">({{movieReleaseDate.getFullYear()}})</span>
                    </h1>
                    <div class="movie-keys">
                        <div class="movie-key">
                            <Icon height="1rem" width="1rem" url="../icons/film-publishing-date.svg"/>
                            <div v-if="movie.origin_country !== undefined">
                                {{movie.release_date}} ({{movie.origin_country[0]}})
                            </div>
                        </div>
                        <div class="separator"></div>
                        <div class="movie-key">
                            <Icon height="1rem" width="1rem" url="../icons/film-timeline.svg"/>
                            <div>{{formatRuntime(movie.runtime)}}</div>
                        </div>
                        <div class="separator"></div>
                        <div class="movie-key">
                            <Icon height="1rem" width="1rem" url="../icons/film-genres.svg"/>
                            <div v-for="genre in movie.genres">
                                {{genre.name}}
                            </div>
                        </div>
                    </div>
                    <div class="movie-quote">
                        {{movie.tagline}}
                    </div>
                    <div>
                        <h3 class="_title-3">Overview</h3>
                        <div class="movie-overview">
                            {{movie.overview}}
                        </div>
                    </div>
                    <div class="movie-statistics">
                        <div class="clue-person__block" v-if="moviePeople.crew !== undefined">
                            <div class="_title-3">{{findPersonByJob('Director')?.name}}</div>
                            <div class="clue-person__job">{{findPersonByJob('Director')?.job}}</div>
                        </div>
                        <div class="separator"></div>
                        <div class="clue-person__block" v-if="moviePeople.crew !== undefined">
                            <div class="_title-3">{{findPersonByJob('Producer')?.name}}</div>
                            <div class="clue-person__job">{{findPersonByJob('Producer')?.job}}</div>
                        </div>
                        <div class="separator"></div>
                        <div>
                            User Score
                        </div>
                    </div>
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
                    <Button
                        @click="handleFavoriteToggling"
                    >
                        {{isInFavorites ? 'Remove from favorites' : 'Add to favorites'}}
                    </Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useMoviesStore} from "~/stores/moviesStore";
import {usePeopleStore} from "~/stores/peopleStore";
import {useFavoritesStore} from "~/stores/favoritesStore";
import GenericCardList from "~/components/GenericCardList.vue";
import Button from '~/components/Button.vue';
import Icon from '~/components/Icon.vue';

export default defineComponent({
    name: "movie-[movie_id]",
    components: {
        GenericCardList,
        Button,
        Icon
    },
    data() {
        return {
            moviesStore: useMoviesStore(),
            peopleStore: usePeopleStore(),
            favoritesStore: useFavoritesStore(),
            movie: {} as IMovieDetails,
            moviePeople: {} as IMoviePeople,
            movieKeywords: [] as IKeyword[],
            isInFavorites: false,
            movieReleaseDate: new Date()
        }
    },
    methods: {
        getImageUrl(path: string, resolution: string = 'original'): string { // Getting the url of the image by movie's id
            const config = useRuntimeConfig();

            return `${config.public.imagesUrl}${resolution}/${path}`;
        },
        handleFavoriteToggling() {
            this.favoritesStore.toggleMovieInFavorites(this.movie);
            this.isInFavorites = !this.isInFavorites;
        },
        findPersonByJob(job: string): ICrewMember | undefined {
            const foundPerson = this.moviePeople.crew.find(person => person.job === job);

            if (foundPerson) {
                return foundPerson;
            }

            return undefined;
        },
        formatRuntime(minutes: number) {
            const hours = Math.floor(minutes / 60);
            const mins = minutes % 60;
            return `${hours}h ${mins}m`;
        }
    },
    async mounted() {
        const route = useRoute();
        const movieId = Number(route.params.movie_id);

        this.movie = await this.moviesStore.getMovieDetails(movieId);
        this.moviePeople = await this.peopleStore.getMoviePeople(movieId);
        this.movieKeywords = await this.moviesStore.getMovieKeywords(movieId);
        this.isInFavorites = this.favoritesStore.isMovieInFavorites(movieId);
        this.movieReleaseDate = new Date(this.movie.release_date);
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

    color: white;
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
.movie-year {
    font-weight: 400;
}
.banner-content {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}
.separator {
    height: 100%;
    width: 1px;
    background-color: white;
}
.movie-overview {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
}
.movie-statistics {
    height: 4rem;

    display: flex;
    align-items: center;
    gap: 4rem;
}
.clue-person__block {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}
.clue-person__job {
    font-size: 14px;
}
.movie-quote {
    font-size: 18px;
    font-weight: 500;
    font-style: italic;
    color: rgba(255, 255, 255, 0.8);
}
.movie-keys {
    height: 27px;
    display: flex;
    align-items: center;
    gap: 1rem;
}
.movie-key {
    display: flex;
    gap: 0.5rem;
}
</style>