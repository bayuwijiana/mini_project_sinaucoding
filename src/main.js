import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import router from "./router/index";

const app = createApp(App);
app.use(router);
app.mount("#app");