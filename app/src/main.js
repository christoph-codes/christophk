import Vue from 'vue';
import router from './router';
import App from './App.vue';
import Vuikit from 'vuikit';
import VuikitIcons from '@vuikit/icons';
import VueMeta from 'vue-meta';

import '@vuikit/theme'

Vue.use(Vuikit)
Vue.use(VuikitIcons)
Vue.use(VueMeta)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')