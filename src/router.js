import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Contatti from "./views/Contatti.vue";
import Error from "./views/Error.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contatti",
    name: "Contatti",
    component: Contatti,
  },
  {
    path: '/:pathMatch(.*)*', // Questa rotta cattura tutti i percorsi non definiti
    name: "Error",
    component: Error,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;