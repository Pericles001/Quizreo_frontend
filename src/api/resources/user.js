
export function storeUserSession(user) {
   return localStorage.setItem("user", JSON.stringify(user));
}
