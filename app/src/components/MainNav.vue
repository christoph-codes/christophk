<template>
  <div class="main-nav">
    <ul>
      <li 
        v-for="(item, index) in navigation"
        :key="index"
        :to="item.path"
        :name="item.name" 
        class="navitem">
        <router-link @click="show = false" :to="to">{{ name }}</router-link>
      </li>
      <li class="navitem">
        <router-link to="/contact">Get In Touch</router-link>
    </li>
    </ul>
  </div>
</template>

<script>
import MainNavRoutes from "../components/Mainnavroutes";

export default {
  name: "main-nav",
  data() {
    return {
      navigation: MainNavRoutes
    };
  }
};
</script>

<style scoped>
.main-nav ul {
  margin: 10px 0;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  padding: 0 40px;
}
@media(max-width: 767px) {
    .main-nav ul {
        padding: 0 30px 0 0;
    }
}
</style>
