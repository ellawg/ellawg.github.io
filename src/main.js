import Vue from 'vue'
import App from './App.vue'
import router from './router';
// Webpack CSS import
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

// JS import
import VueOnsen from 'vue-onsenui'; // This imports 'onsenui', so no need to import it separately

Vue.use(VueOnsen); // VueOnsen set here as plugin to VUE. Done automatically if a call to window.Vue exists in the startup code.

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')


