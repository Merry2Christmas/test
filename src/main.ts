import { createApp } from "vue";
import ArcoVue from "@arco-design/web-vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "./style.css";
import "@arco-design/web-vue/dist/arco.css";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(ArcoVue);
app.mount("#app");
