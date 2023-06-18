import { Components } from "../components";
import { App } from "vue";
export default function setComponent(app: App): void {
  app.component("HelloWorld", Components.HelloWorld());
}
