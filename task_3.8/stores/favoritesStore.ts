import { defineStore } from 'pinia';

export interface IFavorite {

}

export const useFavoritesStore = defineStore('favorites', {
    state: () => ({
        favorites: [] as IFavorite[],
    }),
    actions: {
        loadFavorites() {

        }
    }
})