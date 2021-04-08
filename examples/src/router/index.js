import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/bad-list"
  },
  {
    path: "/bad-list",
    name: "bad-list",
    component: () =>
      import(/* webpackChunkName: "list" */ "@/views/bad-list/index.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
