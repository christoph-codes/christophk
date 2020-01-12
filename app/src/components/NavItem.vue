<template>
    <li class="navitem">
        <router-link :to="to">{{ name }}</router-link>
    </li>
</template>

<script>
export default {
    name: "navitem",
    props: ["to", "name"]
}
</script>

<style scoped>
li.navitem {
    display: inline-block;
    padding: 0 10px;
    font-size: 14px;
}
li.navitem a {
    color: var(--secon);
    transition: 0.3s;
}
li.navitem .router-link-active, li.navitem a:hover {
    color: white;
    text-decoration: none;
}
li.navitem .router-link-active:hover {
    color: var(--secon);
}
</style>