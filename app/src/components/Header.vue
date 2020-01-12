<template>
  <div class="header">
    <div class="uk-container">
      <vk-grid matched class="uk-child-width-expand@s">
        <div class="">
          <h1 class="logo">Christopher K. Jones</h1>
        </div>
        <div class="uk-text-right">
          <MainNav />
        </div>
      </vk-grid>
    </div>
  </div>
</template>

<script>
import MainNav from "../components/MainNav.vue";

export default {
  name: "header",
  components: {
      MainNav
  }
};
</script>

<style scoped>
.header {
  padding: 50px 0;
}
.header .logo {
  text-indent: -9999px;
  background: url("../assets/christoph_logo@2x.png") no-repeat;
  background-size: 25%;
}
</style>
