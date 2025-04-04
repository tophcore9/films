<template>
    <div class="card-list">
        <!-- MOVIES -->
        <Card v-if="movies.length > 0" v-for="movie in movies" :movie="movie" :key="movie.id"/>

        <!-- PEOPLE -->
        <Card v-else-if="people.length > 0" v-for="person in people" :person="person" :key="person.id"/>

        <!-- CAST MEMBERS -->
        <Card v-else-if="castMembers.length > 0" v-for="castMember in castMembers" :cast-member="castMember" :key="castMember.id"/>

        <!-- CREW MEMBERS -->
        <Card v-else-if="crewMembers.length > 0" v-for="crewMember in crewMembers" :crew-member="crewMember" :key="crewMember.id"/>
    </div>
    <div id="end-of-list"></div>
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
        castMembers: {
            type: Array as PropType<ICastMember[]>,
            default: []
        },
        crewMembers: {
            type: Array as PropType<ICrewMember[]>,
            default: []
        },
        nextPageHandler: {
            type: Function
        }
    },
    mounted() {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                if (this.nextPageHandler) {
                    this.nextPageHandler();
                }
            }
        })

        const endOfList = document.querySelector('#end-of-list');

        if (endOfList) {
            observer.observe(endOfList);
        }
    },
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