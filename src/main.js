import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import './common';

import './icons';       // 导入svg图标.

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
