/* import "intersection-observer"; */

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/css/index.less";

import VueLazyContainer from "../../main/index";
Vue.use(VueLazyContainer);

const VConsole = require("vconsole");
new VConsole();

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
