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
    path: "/admin/editnoticia",
    name: "editNoticia",
    component: () => import("@/views/Noticias/editNoticias")
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/Admin")
  },
  {
    path: "/admin/funcionarios",
    name: "listFuncionarios",
    component: () => import("@/views/Funcionarios/listFuncionarios")
  },
  {
    path: "/admin/addfuncionario",
    name: "addFuncionario",
    component: () => import("@/views/Funcionarios/addFuncionarios")
  },
  {
    path: "/admin/editfuncionario/:funcionarioId",
    name: "editFuncionario",
    component: () => import("@/views/Funcionarios/editFuncionarios")
  },
  {
    path: "/noticia/:noticiaId",
    name: "noticia",
    component: () => import("@/views/Noticia.vue"),
  },
  {
    path: "/noticias/:tipo",
    name: "noticias",
    props: true,
    component: () => import("@/views/Noticias.vue"),
  },
  {
    path: "/user",
    name: "user",
    props: true,
    component: () => import("@/views/User.vue"),
  },
  {
    path: "/userupdate",
    name: "Updateuser",
    props: true,
    component: () => import("@/views/Updateuser.vue"),
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
