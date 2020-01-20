import Vue from 'vue';
import router from './router';
import App from './App.vue';
import Vuikit from 'vuikit';
import VuikitIcons from '@vuikit/icons';
import VueMeta from 'vue-meta';
import VueGtm from 'vue-gtm';

import '@vuikit/theme'

Vue.use(Vuikit)
Vue.use(VuikitIcons)
Vue.use(VueMeta)
Vue.use(VueGtm, {
  id: "GTM-5TWQ26W", // Your GTM single container ID or array of container ids ['GTM-xxxxxxx', 'GTM-yyyyyyy']
  enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
  debug: true, // Whether or not display console logs debugs (optional)
  vueRouter: router // Pass the router instance to automatically sync with router (optional)
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')