<template>
    <div class="main-nav">
        <ul>
            <li v-for="(item, index) in navigation" :key="index">
                <router-link :to="item.path">{{ item.name }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "main-nav",
    data() {
        return {
            navigation: [
                {
                    name: 'Full-time Designer',
                    path: "/designer"
                },
                {
                    name: 'Passionate.Programmer();',
                    path: "/programmer"
                },
                {
                    name: 'Chronic Creator',
                    path: "/creator"
                }
            ]  
        }
    }
}
</script>

<style scoped>
.main-nav li {
    display: inline-block;
    padding: 0 10px;
    font-size: 14px;
}
.main-nav li a {
    color: var(--secon);
    transition: 0.3s;
}
.main-nav li .router-link-active, .main-nav li a:hover {
    color: white;
    text-decoration: none;
}
.main-nav li .router-link-active:hover {
    color: var(--secon);
}

</style>