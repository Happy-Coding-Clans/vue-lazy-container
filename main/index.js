import VueLazyContainer from "./src/index.jsx";

VueLazyContainer.install = function(Vue) {
    Vue.component(VueLazyContainer.name, VueLazyContainer);
};

export default VueLazyContainer;
