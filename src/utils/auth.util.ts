export class Auth {
  isAuth(): void {
    console.log("it's a test!");
  }

  static getToken(): string {
    var token: string = "";
    const session = localStorage.getItem("user");
    const objUser = session && JSON.parse(session);
    if (objUser?.token) token = `Bearer ${objUser.token}`;
    else token = "no token";
    return token;
  }

  static saveUser(user: any): void {
    const userStr = JSON.stringify(user);
    localStorage.setItem("user", userStr);
  }

  static getUser(hasUser?: any): any {
    const user = JSON.parse(localStorage.getItem("user") as string);
    return hasUser ?? user;
  }

  static logoutUser(): void {
    localStorage.clear();
    sessionStorage.clear();
  }
}
