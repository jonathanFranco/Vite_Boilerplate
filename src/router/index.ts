import { Views } from "../views";
import { createRouter, createWebHistory } from "vue-router";
// import { guardAuth } from "./guards/auth.guard";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      alias: "/home",
      name: "home",
      component: Views.InitialView,
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   guardAuth(to, from, next);
// });

export default router;
