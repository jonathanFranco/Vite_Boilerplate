import { Auth } from "@/utils/auth.util";

function guardAuth(to: any, _: any, next: any): void {
  const hasUser = Auth.getUser();
  const isMeta = "auth" in to.meta;
  const metaAuth = to.meta.auth;
  if (isMeta && metaAuth && !hasUser) {
    next("/init-route-here");
  } else {
    next();
  }
}

export { guardAuth };
