<template>
    <div class="_wrapper">
        <h1>{{person.name}}</h1>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {usePeopleStore} from "~/stores/peopleStore";

export default defineComponent({
    name: "person-[person_id]",
    data() {
        return {
            peopleStore: usePeopleStore(),
            person: {} as IPersonDetails
        }
    },
    async mounted() {
        const route = useRoute();

        const personId = route.params.person_id;
        this.person = await this.peopleStore.getPersonDetails(Number(personId));
    }
})
</script>

<style scoped lang="scss">

</style>