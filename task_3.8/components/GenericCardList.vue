<template>
    <div class="card-list">
        <!-- MOVIES -->
        <Card v-if="movies.length > 0" v-for="movie in movies" :movie="movie" :key="movie.id"/>

        <!-- PEOPLE -->
        <Card v-else v-for="person in people" :person="person" :key="person.id"/>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import GenericCard from '~/components/GenericCard.vue';

export default defineComponent({
    name: "CardList",
    components: {
        Card: GenericCard
    },
    props: {
        movies: {
            type: Array as PropType<IMovie[]>,
            default: []
        },
        people: {
            type: Array as PropType<IPerson[]>,
            default: []
        },
    }
})
</script>

<style scoped lang="scss">
.card-list{
    width: 100%;
    height: 100%;

    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}
</style>