import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "@/store";

import '@/common';        // 公共方法
import '@/components';     // 公共组件


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
