import { createRouter, createWebHistory } from "vue-router";
import { getAuth } from "firebase/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/pages/FrontPage/FrontPage.vue"),
    },
    {
      path: "/auth/signIn",
      name: "signIn",
      component: () => import("@/pages/SignIn/SignIn.vue"),
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: "/auth/profileEditor",
      name: "profileEditor",
      component: () => import("@/pages/ProfileEditor/ProfileEditor.vue"),
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach((to, from) => {
  const user = getAuth().currentUser;
  if (to.meta.requiresAuth && !user) {
    return { name: "home" };
  }
  if (to.name === "signIn" && user) {
    return { name: "home" };
  }
});

export default router;
