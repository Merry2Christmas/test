import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import experimentCenter from "./experimentCenter.ts";
const VITE_APP_PRODUCT_CODE = import.meta.env.VITE_APP_PRODUCT_CODE;
console.log(23, VITE_APP_PRODUCT_CODE);

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/Layout/LayoutMain.vue"),
    // redirect: "/" + VITE_APP_PRODUCT_CODE,
    // redirect: "/acrsa/dataCenter",
  },
  {
    path: "/" + VITE_APP_PRODUCT_CODE,
    component: () => import("@/Layout/LayoutMain.vue"),
    children: [
      ...experimentCenter,
      {
        path: "/:pathMatch(.*)",
        name: "root404",
        component: () => import("@/pages/PageNotFound404/PageNotFound404.vue"),
      },
    ],
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
