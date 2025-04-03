<template>
    <!--  MOVIES CARDS  -->
    <div class="card" v-if="movie !== undefined">
        <img :src="getImageUrl()" alt="no">
    </div>

    <!--  PEOPLE CARDS  -->
    <div class="card" v-if="person !== undefined">
        <img :src="getImageUrl()" alt="no">
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
    name: "GenericCard",
    data() {
        return {
            imageWidth: 200
        }
    },
    props: {
        movie: {
            type: Object as PropType<IMovie>,
            default: undefined
        },
        person: {
            type: Object as PropType<IPerson>,
            default: undefined
        }
    },
    methods: {
        getImageUrl(): string { // Getting the url of the image by movie's id
            const config = useRuntimeConfig();

            let path: string = '';

            if (this.person !== undefined) path = this.person.profile_path;
            else if (this.movie !== undefined) path = this.movie.poster_path;

            return `${config.public.imagesUrl}w${this.imageWidth}/${path}`;
        },
    }
})
</script>

<style scoped lang="scss">
.card {
    display: inline-block;
}
</style>