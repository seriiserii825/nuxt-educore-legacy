export default defineNuxtRouteMiddleware((to, from) => {
  const admin_user = useCookie("user");

  // If the user is not logged in, redirect to the home page
  if (!admin_user.value) {
    if (to.path !== "/admin/login") {
      return navigateTo("/");
    }
  }

  // If the user is logged in and is an admin, redirect to the admin page
  if (to.path === "/admin/login" && admin_user.value && admin_user.value.role === "admin") {
    return navigateTo("/admin");
  }

// If the user is logged in and does not have the admin role, redirect to home
  if (to.path.startsWith("/admin") && admin_user.value && admin_user.value?.role !== "admin") {
    return navigateTo("/");
  }
});
