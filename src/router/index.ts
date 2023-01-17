import { createRouter, createWebHistory } from "vue-router";
import FrontPage from "@/pages/FrontPage/FrontPage.vue";
import SignIn from "@/pages/SignIn/SignIn.vue";
import { getAuth } from "firebase/auth";
import ProfileEditor from "@/pages/ProfileEditor/ProfileEditor.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: FrontPage,
    },
    {
      path: "/auth/signIn",
      name: "signIn",
      component: SignIn,
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: "/auth/profileEditor",
      name: "profileEditor",
      component: ProfileEditor,
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
