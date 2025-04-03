import { defineStore } from 'pinia';
import {process} from "std-env";

export const useFavoritesStore = defineStore('favorites', {
    state: () => ({
        favoriteMovies: [] as IMovie[],
        favoritePeople: [] as IPerson[]
    }),
    actions: {
        isMovieInFavorites(movieId: number): boolean {
            const index = this.favoriteMovies.findIndex(movie => movie.id === movieId);
            return index >= 0;
        },
        isPersonInFavorites(personId: number): boolean {
            const index = this.favoritePeople.findIndex(person => person.id === personId);
            return index >= 0;
        },
        toggleMovieInFavorites(movie: IMovie){
            if (this.isMovieInFavorites(movie.id)) {
                this.removeMovieFromFavorites(movie.id);
            } else {
                this.addMovieInFavorites(movie);
            }
        },
        togglePersonInFavorites(person: IPerson){
            if (this.isPersonInFavorites(person.id)) {
                this.removePersonFromFavorites(person.id);
            } else {
                this.addPersonInFavorites(person);
            }
        },
        addMovieInFavorites(movie: IMovie) {
            this.favoriteMovies.push(movie);
            this.saveFavoritesToSessionStorage();
        },
        addPersonInFavorites(person: IPerson) {
            this.favoritePeople.push(person);
            this.saveFavoritesToSessionStorage();
        },
        removeMovieFromFavorites(movieId: number) {
            const index = this.favoriteMovies.findIndex(movie => movie.id === movieId);
            this.favoriteMovies.splice(index, 1);
            this.saveFavoritesToSessionStorage();
        },
        removePersonFromFavorites(personId: number) {
            const index = this.favoritePeople.findIndex(person => person.id === personId);
            this.favoritePeople.splice(index, 1);
            this.saveFavoritesToSessionStorage();
        },
        saveFavoritesToSessionStorage() {
            if (process.client) {
                sessionStorage.setItem('favoriteMovies', JSON.stringify(this.favoriteMovies));
                sessionStorage.setItem('favoritePeople', JSON.stringify(this.favoritePeople));
            }
        },
        loadFavoritesFromSessionStorage() {
            if (process.client) {
                const savedFavoriteMovies = sessionStorage.getItem('favoriteMovies');
                const savedFavoritePeople = sessionStorage.getItem('favoritePeople');

                if (savedFavoriteMovies) {
                    this.favoriteMovies = JSON.parse(savedFavoriteMovies);
                }

                if (savedFavoritePeople) {
                    this.favoritePeople = JSON.parse(savedFavoritePeople);
                }
            }
        },
    }
})