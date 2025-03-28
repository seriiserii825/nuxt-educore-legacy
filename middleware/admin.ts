export default defineNuxtRouteMiddleware((to, from) => {
  const admin_user = useCookie("user");

  if (!admin_user.value) {
    if (to.path !== "/admin/login") {
      return navigateTo("/");
    }
  }

  if (to.path === "/admin/login" && admin_user.value) {
    return navigateTo("/admin");
  }
});
