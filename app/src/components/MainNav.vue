<template>
    <div class="main-nav">
        <ul>
            <NavItem v-for="(item, index) in navigation" :key="index" :to="item.path" :name="item.name" />
        </ul>
    </div>
</template>

<script>
import MainNavRoutes from '../components/Mainnavroutes';
import NavItem from './NavItem';

export default {
    name: "main-nav",
    data() {
        return {
            navigation: MainNavRoutes
        }
    },
    components: {
        NavItem
    }
}
</script>

<style scoped>
.main-nav ul {
    margin: 0;
}
</style>