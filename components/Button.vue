<template>
    <button
        class="button"
        :class="rounded ? 'rounded' : ''"
        :style="{
            backgroundColor: backgroundColor,
            width: width,
            height: height,
        }"
    >
        <slot></slot>
    </button>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
    name: "Button",
    props: {
        backgroundColor: {
            type: String,
            default: "var(--primary-color)"
        },
        width: {
            type: String,
            default: "auto"
        },
        height: {
            type: String,
            default: "3rem"
        },
        rounded: {
            type: Boolean,
            default: false
        }
    }
})
</script>

<style scoped lang="scss">
@use '/assets/styles/components/button';
</style>