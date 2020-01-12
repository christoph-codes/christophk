<template>
  <div class="home">
    <div class="page-content">
      <div class="vert-align">
        <h2 class="name-line">
          My name is<br />
          Christopher K. Jones
        </h2>
        <p class="home-page-nav" v-for="(item, index) in navigation" :key="index">
          <router-link :to="item.path">{{ item.name }}</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import MainNavRoutes from "../components/Mainnavroutes";

export default {
  name: "Home",
  data() {
    return {
      navigation: MainNavRoutes
    };
  }
};
</script>

<style scoped>
h2.name-line {
    font-size: 18px;
    color: var(--secon);
    margin-bottom: 15vh;
}
.home-page-nav {
    margin: 10px 0;
}
.home-page-nav a {
    color: var(--secon);
    transition: 0.3s;
}
.home-page-nav a:hover {
    color: white;
    text-decoration: none;
}
</style>
