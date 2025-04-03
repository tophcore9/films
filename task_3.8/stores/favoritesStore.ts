import { defineStore } from 'pinia';

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
        },
        addPersonInFavorites(person: IPerson) {
            this.favoritePeople.push(person);
        },
        removeMovieFromFavorites(movieId: number) {
            const index = this.favoriteMovies.findIndex(movie => movie.id === movieId);
            this.favoriteMovies.splice(index, 1);
        },
        removePersonFromFavorites(personId: number) {
            const index = this.favoritePeople.findIndex(person => person.id === personId);
            this.favoritePeople.splice(index, 1);
        },
    }
})