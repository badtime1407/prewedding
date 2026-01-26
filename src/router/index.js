import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Packages from "../views/Packages.vue";
import Register from "../views/Register.vue";
import Resetpassword from "../views/Resetpassword.vue";
import Gallery from "../views/Gallery.vue";
import Booking from "../views/Booking.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login, meta: { hideNavbar: true, hideFooter: true},},
  { path: "/register", component: Register, meta: { hideNavbar: true, hideFooter: true},},
  { path: "/resetpassword", component: Resetpassword, meta: { hideNavbar: true, hideFooter: true},},
  { path: "/packages", component: Packages },
  { path: "/gallery", component: Gallery},
  { path: "/booking", component: Booking},

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;