import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/pages/Home.vue"),
  },
  {
    path: "/2",
    name: "Home2",
    component: () => import("@/pages/Home2.vue"),
  },
  {
    path: "/:pathMatch(.*)",
    name: "root404",
    component: () => import("@/pages/PageNotFound404/PageNotFound404.vue"),
  },
];
