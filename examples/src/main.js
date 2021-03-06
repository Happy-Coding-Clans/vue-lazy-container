// polyfills
import "core-js/stable";
import "regenerator-runtime/runtime";

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/css/index.less";

import VueLazyContainer from "../../src/index.js";
Vue.use(VueLazyContainer);

import {
  Popover,
  Checkbox,
  CheckboxGroup,
  Switch,
  Cell,
  Stepper,
  Slider
} from "vant";
Vue.use(Popover);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Switch);
Vue.use(Cell);
Vue.use(Stepper);
Vue.use(Slider);

if (process.env.NODE_ENV === "development") {
  const VConsole = require("vconsole");
  new VConsole();

  Vue.config.devtools = true;
}

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
