<template>
    <div
        class="icon"
        :style="{
            backgroundImage: `url(${url})`,
            width: width,
            height: height,
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
.icon {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}
</style>