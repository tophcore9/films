<template>
    <div class="_wrapper">
        <div class="favorite-content">
            <h2 class="_title-2">Favorite Movies</h2>
            <GenericCardList :movies="favoritesStore.favoriteMovies"/>
            <h2 class="_title-2">Favorite People</h2>
            <GenericCardList :people="favoritesStore.favoritePeople"/>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import GenericCardList from "~/components/GenericCardList.vue";
import {useFavoritesStore} from "~/stores/favoritesStore";

export default defineComponent({
    name: "favorites",
    components: {
        GenericCardList
    },
    data() {
        return {
            favoritesStore: useFavoritesStore()
        }
    }
})
</script>

<style scoped lang="scss">
.favorite-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
</style>