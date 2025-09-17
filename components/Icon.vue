<template>
    <div
        class="icon"
        :style="{
            backgroundImage: `url(${url})`,
            minWidth: width,
            minHeight: height,
        }"
    ></div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
    name: "Icon",
    props: {
        url: {
            type: String,
            required: true
        },
        width: {
            type: String,
            default: '2rem'
        },
        height: {
            type: String,
            default: '2rem'
        }
    }
})
</script>

<style scoped lang="scss">
@use '/assets/styles/components/icon';
</style>