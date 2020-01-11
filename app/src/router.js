import Vue from "vue";
import Router from 'vue-router'

import Home from './views/Home.vue';
import Designer from './views/Designer.vue';
import Programmer from './views/Programmer.vue';
import Creator from './views/Creator.vue';
import Contact from './views/Contact.vue';
import PageNotFound from './views/PageNotFound.vue';

Vue.use(Router);

const router = new Router({
  mode: "history",
  // base: process.env.BASE_URL,
  routes: [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/designer",
        name: "designer",
        component: Designer
    },
    {
        path: "/programmer",
        name: "programmer",
        component: Programmer
      },
    {
        path: "/creator",
        name: "creator",
        component: Creator
      },
      {
        path: "/contact",
        name: "contact",
        component: Contact
      },
    {
      path: "/*",
      name: "page-not-found",
      component: PageNotFound
    }
  ]
});

export default router;