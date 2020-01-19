<template>
  <div class="main-header">
    <div class="uk-container">
      <vk-grid matched class="uk-child-width-1-2">
        <div class="">
          <router-link to="/"> 
            <h1 class="logo">
              Christopher K. Jones
            </h1>
          </router-link>
        </div>
        <div class="uk-text-right">
          

          <vk-offcanvas-content>
            <a class="navburger" @click="show = !show"><vk-icon ratio="2" icon="menu"></vk-icon></a>

            <vk-offcanvas id="taco" :show.sync="show">
              <vk-offcanvas-close @click="show = false"></vk-offcanvas-close>
              <ul class="main-nav">
                <li class="navitem" @click="show = false">
                  <router-link exact to="/">Home</router-link>
                </li>
                <li 
                  v-for="(item, index) in navigation"
                  :key="index"
                  @click="show = false"
                  class="navitem">
                  <router-link exact :to="item.path">{{ item.name }}</router-link>
                </li>
                <li @click="show = false" class="navitem">
                  <router-link exact to="/contact">Get In Touch</router-link>
                </li>
              </ul>
            </vk-offcanvas>
          </vk-offcanvas-content>
        </div>
      </vk-grid>
    </div>
  </div>
</template>

<script>
import MainNavRoutes from "./Mainnavroutes";

export default {
  name: "main-header",
  data() {
    return {
      show: false,
      navigation: MainNavRoutes
    }
  }
};
</script>

<style scoped>
.main-header {
  padding: 20px 0;
}
.main-header .logo {
  text-indent: -9999px;
  background: url("../assets/christoph_logo@2x.png") no-repeat;
  background-size: 25%;
      margin: 0;
}
.navburger {
  color: var(--secon);
}
.uk-offcanvas-close {
    color: var(--secon);
}
ul.main-nav {
  margin: 10px 0;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  padding: 0 40px;
}
li.navitem {
    display: block;
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

@media(max-width: 767px) {
  .main-header .logo {
    background-size: 100%;
  }
  ul.main-nav {
        padding: 0 30px 0 0;
    }
    li.navitem {
    display: inline-block;
        padding: 20px 10px;
    font-size: 18px;
}
}
</style>
