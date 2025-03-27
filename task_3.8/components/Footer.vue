<template>
    <div class="footer">
        <div class="_wrapper">
            <div class="footer-content">
                <div class="footer-left">
                    <Icon url="../icons/logo-white.png" width="156px"/>
                    <Button>Join the community</Button>
                </div>

                <div class="footer-lists">
                    <ul class="footer-list">
                        <li class="footer-list__title">The basics</li>
                        <li class="footer-list__item">About TMDB</li>
                        <li class="footer-list__item">Contact Us</li>
                        <li class="footer-list__item">Support Forums</li>
                        <li class="footer-list__item">API</li>
                        <li class="footer-list__item">System Status</li>
                    </ul>
                    <ul class="footer-list">
                        <li class="footer-list__title">Get involved</li>
                        <li class="footer-list__item">Contribution Bible</li>
                        <li class="footer-list__item">Add New Movie</li>
                        <li class="footer-list__item">Add New TV Show</li>
                    </ul>
                    <ul class="footer-list">
                        <li class="footer-list__title">Community</li>
                        <li class="footer-list__item">Guideline</li>
                        <li class="footer-list__item">Discussions</li>
                        <li class="footer-list__item">Leaderboard</li>
                    </ul>
                    <ul class="footer-list">
                        <li class="footer-list__title">Legal</li>
                        <li class="footer-list__item">Terms of Use</li>
                        <li class="footer-list__item">API Terms of Use</li>
                        <li class="footer-list__item">Privacy Policy</li>
                        <li class="footer-list__item">DMCA Policy</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Button from '~/components/Button.vue';
import Icon from '~/components/Icon.vue';

export default defineComponent({
    name: "Footer",
    components: {
        Button,
        Icon
    }
})
</script>

<style lang="scss" scoped>
.footer {
    padding: 3rem 0;

    width: 100%;
    min-height: 400px;

    background-color: #303030;
    color: white;
}
.footer-left {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
.footer-content, .footer-lists {
    display: flex;
    justify-content: space-between;
}
.footer-lists {
    gap: 70px;
}

.footer-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}
.footer-list__title {
    text-transform: uppercase;
    font-weight: 700;
}
.footer-list__item {
    opacity: 0.8;
}
</style>