<template>
    <li class="navitem">
        <router-link @click="show = false" :to="to">{{ name }}</router-link>
    </li>
</template>

<script>
export default {
    name: "navitem",
    props: ["to", "name"]
}
</script>

<style>
li.navitem {
    display: inline-block;
        padding: 20px 10px;
    font-size: 18px;
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