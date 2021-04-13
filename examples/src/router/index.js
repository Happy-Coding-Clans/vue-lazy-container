import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/home.vue")
  },
  {
    path: "/bad-list",
    name: "bad-list",
    component: () => import("@/views/bad-list/index.vue")
  },
  {
    path: "/good-list",
    name: "good-list",
    component: () => import("@/views/good-list/index.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
