import { createApp } from "vue";
import App from "./App.vue";
import setComponent from "./modules/components.module";
import setPrime from "./modules/prime.module";
import router from "./router";
import "./style.scss";
import "./assets/tailwind.css";
import "primeicons/primeicons.css";
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/lara-light-blue/theme.css";

export const app = createApp(App);
setComponent(app);
setPrime(app);
app.use(router);
app.mount("#app");
