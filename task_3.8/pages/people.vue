<template>
    <div class="_wrapper">
        <div class="people-content">
            <div>
                <img v-for="person in peopleStore.people" :src="peopleStore.getPersonUrl(person.id)" alt="no">
            </div>
            <Button
                @click="peopleStore.fetchNextPage()"
                class="load-more__button"
            >
                Load more
            </Button>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {usePeopleStore} from "~/stores/peopleStore";

export default defineComponent({
    name: "people",
    data() {
        return {
            peopleStore: usePeopleStore()
        }
    },
    async mounted() {
        await this.peopleStore.fetchPeople();
    }
})
</script>

<style scoped lang="scss">
.people-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}
</style>