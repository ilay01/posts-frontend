import HomeView from "../views/HomeView.vue";
import ClownTab from "../views/ClownTab.vue";
import JokerTab from "../views/JokerTab.vue";
import Posts from "../views/Posts.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeView,
      children: [
        { path: "clown", component: ClownTab },
        { path: "joker", component: JokerTab },
      ],
    },
    { path: "/posts", component: Posts, meta: { requiresAuth: true } },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!localStorage.getItem("token")) {
      next("/");
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
