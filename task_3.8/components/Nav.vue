<template>
    <div class="nav" :class="isScrolled ? 'nav-scrolled' : ''">
        <div class="_wrapper">
            <div class="nav-content">
                <div class="nav-left">
                    <Icon :url="isScrolled ? '../icons/logo-white.png' : '../icons/logo-dark.png'" width="156px"/>
                    <div class="nav-left-links">
                        <NuxtLink :class="handleCurrentPageClass('movies')" to="/movies">Movies</NuxtLink>
                        <NuxtLink :class="handleCurrentPageClass('tv_shows')" to="/tv_shows">TV Shows</NuxtLink>
                        <NuxtLink :class="handleCurrentPageClass('people')" to="/people">People</NuxtLink>
                    </div>
                </div>

                <div class="nav-right">
                    <NuxtLink to="/favorites">
                        <Icon
                            class="nav-favorites"
                            :url="handleFavoritesIconUrl"
                        />
                    </NuxtLink>
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
    },
    data() {
        return {
            isScrolled: false
        }
    },
    methods: {
        handleScroll() {
            this.isScrolled = window.scrollY > 0;
        },
        handleCurrentPageClass(pageName: string) {
            if (useRoute().name?.toString().includes(pageName)) {
                return 'nav-link nav-link-active';
            }

            return 'nav-link';
        },
    },
    computed: {
        handleFavoritesIconUrl() {
            const isPageOpened = useRoute().name?.toString().includes('favorites');

            if (isPageOpened) {
                return '../icons/nav-favorites-active.svg';
            }

            if (this.isScrolled) {
                return '../icons/nav-favorites-white.svg';
            } else {
                return '../icons/nav-favorites.svg';
            }
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
})
</script>

<style lang="scss" scoped>
.nav {
    position: fixed;

    width: 100%;
    height: 90px;

    background-color: white;
    transition: background-color 0.2s ease-out;
}
.nav-scrolled {
    background-color: var(--dark-color);

    .nav-link {
        color: white;
    }
}
.nav-content, .nav-left, .nav-left-links, .nav-right {
    height: 100%;

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
    color: var(--text-color);
    opacity: 0.8;

    &:hover {
        cursor: pointer;
        opacity: 0.85;
    }
}
.nav-link-active {
    color: var(--text-color);
    opacity: 1;
    font-weight: 500;
}
.nav-favorites {
    &:hover {
        cursor: pointer;
    }
}
</style>