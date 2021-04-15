import VueLazyContainer from "./index.js";

VueLazyContainer.install = function(Vue) {
    Vue.component(VueLazyContainer.name, VueLazyContainer);
};

export default VueLazyContainer;
