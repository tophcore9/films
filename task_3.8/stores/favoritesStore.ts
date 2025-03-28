import { defineStore } from 'pinia';

export interface IFavorite {
    id: number;
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