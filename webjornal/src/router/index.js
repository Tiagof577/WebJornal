import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/Register")
  },
  {
    path: "/admin/noticias",
    name: "listNoticias",
    component: () => import("@/views/Noticias/listNoticias")
  },
  {
    path: "/admin/addnoticia",
    name: "addNoticia",
    component: () => import("@/views/Noticias/addNoticias")
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/Admin")
  },
  {
    path: "/noticia/:noticiaId",
    name: "noticia",
    component: () => import("@/views/Noticia.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
