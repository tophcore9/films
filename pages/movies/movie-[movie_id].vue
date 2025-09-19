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
                        <div class="user-score">
                            <div class="user-score-circle">
                                <div class="user-score-value">
                                    {{userScore}}
                                </div>
                            </div>
                            <p>User Score</p>
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
                        <p>{{movieLanguage}}</p>
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
            movieReleaseDate: new Date(),
            movieLanguage: '',
            userScore: '',
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
        this.movieLanguage = await this.moviesStore.getLanguageNameByISO(this.movie.original_language);
        this.userScore = this.movie.vote_average.toFixed(1);
    }
})
</script>

<style scoped lang="scss">
@use '/assets/styles/pages/movie';
</style>