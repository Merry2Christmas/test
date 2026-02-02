import { createApp } from "vue";
import ArcoVue from "@arco-design/web-vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "./style.css";
import "@arco-design/web-vue/dist/arco.css";
import { routes } from "./router";
import { createRouter, createWebHashHistory } from "vue-router";

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
