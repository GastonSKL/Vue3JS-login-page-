import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Home from "../views/Home.vue";
import Editar from "../views/Editar.vue";
import Nuevo from "../views/Nuevo.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
    },
    {
      path: "/editar/:id",
      name: "Editar",
      component: Editar,
    },{
      path: "/nuevo/",
      name: "nuevo",
      component: Nuevo,
    },
  ],
});

export default router;
