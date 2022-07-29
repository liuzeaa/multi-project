import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: "/home",
    name: "home",
    component: ()=>import("@bb/views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("@bb/views/AboutView.vue"),
  },
  {
    path: "/404",
    name: "error404",
    component: () => import("@/components/error404.vue"),
  },
  {
    path:'*',
    redirect: '/404',
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
