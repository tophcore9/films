<template>
    <div class="_container">
        <Nav/>
        <div class="_content">
            <slot></slot>
        </div>
        <Footer/>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Nav from '~/components/Nav.vue';
import Footer from '~/components/Footer.vue';
import {useFavoritesStore} from "~/stores/favoritesStore";
import {useMoviesStore} from "~/stores/moviesStore";

export default defineComponent({
    name: "default",
    components: {
        Nav,
        Footer
    },
    data() {
        return {
            favoritesStore: useFavoritesStore(),
            moviesStore: useMoviesStore()
        }
    },
    mounted() {
        this.favoritesStore.loadFavoritesFromSessionStorage();
    }
})
</script>

<style lang="scss">
@use '/assets/styles/pages/default';
</style>