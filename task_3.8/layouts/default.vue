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

export default defineComponent({
    name: "default",
    components: {
        Nav,
        Footer
    }
})
</script>

<style lang="scss">
@use 'assets/styles/reset';
@use 'assets/styles/fonts';
@use 'assets/styles/variables';

body, html {
    height: 100%;
    width: 100%;
}

._container {
    min-height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    font-size: 18px;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}
._wrapper {
    margin: auto;
    padding: 2rem 1rem;

    max-width: 1440px;
    width: 100%;
    height: 100%;
}
._content {
    padding-top: 90px;
    width: 100%;
    min-height: calc(100vh - 200px);
}
</style>