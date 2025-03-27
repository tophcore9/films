<template>
    <div class="_container">
        <div class="_wrapper">
            <Nav/>
            <slot></slot>
            <Footer/>
        </div>
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
@use 'assets/styles/reset.css';

._container {

}
._wrapper {

}
</style>