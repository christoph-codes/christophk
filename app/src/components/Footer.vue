<template>
    <div class="footer">
        <div class="uk-container">
            <vk-grid matched class="uk-child-width-expand@s">
                <div class="footer-nav">
                    <MainNav />
                    <p>Page Content</p>
                </div>
                <div class="footer-copyright">
                    <Copyright class="uk-text-right"/>
                </div>
            </vk-grid>
        </div>
    </div>
</template>

<script>
import MainNav from '../components/MainNav.vue';
import Copyright from '../components/Copyright.vue';

export default {
    name: "footer",
    components: {
        MainNav,
        Copyright
    }
}
</script>