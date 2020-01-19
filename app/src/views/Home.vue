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
  },
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'Christopher Kirk Jones The Artist',
    // all titles will be injected into this template
    titleTemplate: '%s | Christoph K',
    meta: [
      {
        name: 'description',
        content: 'Christopher K Jones is a full-time graphic designer, passionate full-stack programmer, and chronic creator of cool projects.'
      }
    ]
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
@media(max-width: 767px) {
  .home .page-content {
    margin-top: 70px;
  }
}
</style>
