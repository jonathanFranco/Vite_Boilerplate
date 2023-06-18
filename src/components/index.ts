import { defineAsyncComponent } from "vue";

export class Components {
  static HelloWorld(): any {
    return defineAsyncComponent(
      () => import("./InitalComponent/HelloWorld.vue")
    );
  }
}
