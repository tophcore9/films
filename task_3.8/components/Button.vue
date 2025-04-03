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
.button {
    padding: 0 1.5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    border-radius: var(--input-border-radius);

    color: white;

    transition: transform 0.2s ease-out;

    &:hover {
        transform: scale(1.05);
    }
    &:active {
        transform: scale(1.1);
    }
}
.rounded {
    border-radius: 50%;
}
</style>