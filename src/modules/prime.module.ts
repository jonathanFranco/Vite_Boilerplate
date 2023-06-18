import PrimeVue from "primevue/config";
import Dialog from "primevue/dialog";
import { App } from "vue";

export default function setPrime(app: App): void {
  app.use(PrimeVue);
  app.component("Dialog", Dialog);
}
