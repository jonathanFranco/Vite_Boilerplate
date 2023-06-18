export class Views {
  static InitialView(): Promise<any> {
    return import("./InitialView/initial.vue");
  }
}
