import { createApp } from "vue";
import ArcoVue from "@arco-design/web-vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "@arco-design/web-vue/dist/arco.css";
import { routes } from "./router";
import { createRouter, createWebHashHistory } from "vue-router";
import "@/styles/index.less"; // 自定义全局样式

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import Cookie from "js-cookie";

// 识别、处理、转换 UTC 时间
dayjs.extend(utc);

const pinia = createPinia();
const app = createApp(App);

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

app.use(pinia);
app.use(ArcoVue);
app.use(router);
app.mount("#app");
