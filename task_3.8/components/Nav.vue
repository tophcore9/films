<template>
    <div class="nav">
        <div class="_wrapper">
            <div class="nav-content">
                <div class="nav-left">
                    <img src="/public/icons/logo.png" alt="">
                    <div class="nav-left-links">
                        <NuxtLink class="nav-link" to="">Movies</NuxtLink>
                        <NuxtLink class="nav-link" to="">TV Shows</NuxtLink>
                        <NuxtLink class="nav-link" to="">People</NuxtLink>
                        <NuxtLink class="nav-link" to="">More</NuxtLink>
                    </div>
                </div>

                <div class="nav-right">
                    <Icon
                        class="nav-favorites"
                        url="../icons/nav-favorites.svg"
                    />
                    <Button>Login</Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Button from '~/components/Button.vue';
import Icon from '~/components/Icon.vue';

export default defineComponent({
    name: "Nav",
    components: {
        Button,
        Icon
    }
})
</script>

<style lang="scss" scoped>
.nav {
    width: 100%;
    height: 90px;
}
.nav-content, .nav-left, .nav-left-links, .nav-right {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.nav-left {
    gap: 100px;
}
.nav-left-links {
    gap: 3rem;
}
.nav-right {
    gap: 2rem;
}
.nav-link {
    color: #1E1E1E;
    opacity: 0.8;
}
.nav-favorites {
    &:hover {
        cursor: pointer;
    }
}
</style>