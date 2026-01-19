import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Packages from "../views/Packages.vue";


const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/packages", component: Packages },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;