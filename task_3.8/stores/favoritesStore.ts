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
        }
    }
})