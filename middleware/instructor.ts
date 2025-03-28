export default defineNuxtRouteMiddleware((to, from) => {
  const user = useCookie("user");

  // If the user is not logged in, redirect to the home page
  if (!user.value) {
    if (to.path !== "/login") {
      return navigateTo("/");
    }
  }

  // If the user is logged in and is an instructor, redirect to the instructor page
  if (to.path === "/login" && user.value && user.value.role === "instructor") {
    return navigateTo("/instructor/dashboard");
  }
  // If the user is logged in and does not have the instructor role, redirect to home
 
  if (to.path.startsWith("/instructor") && user.value?.role !== "instructor") {
    return navigateTo("/");
  }
});
