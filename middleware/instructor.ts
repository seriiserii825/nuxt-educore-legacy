export default defineNuxtRouteMiddleware((to, from) => {
  const user = useCookie("user");

  if (!user.value) {
    if (to.path !== "/login") {
      return navigateTo("/");
    }
  }

  if (to.path === "/login" && user.value && user.value.role === "instructor") {
    return navigateTo("/instructor");
  }
});
