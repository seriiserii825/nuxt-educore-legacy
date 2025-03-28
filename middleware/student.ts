export default defineNuxtRouteMiddleware((to, from) => {
  const user = useCookie("user");

  // If the user is not logged in, redirect to the home page
  if (!user.value) {
    if (to.path !== "/login") {
      return navigateTo("/");
    }
  }

  // If the user is logged in and is an student, redirect to the student page
  if (to.path === "/login" && user.value && user.value.role === "student") {
    return navigateTo("/student/dashboard");
  }
  // If the user is logged in and does not have the student role, redirect to home
 
  if (to.path.startsWith("/student") && user.value?.role !== "student") {
    return navigateTo("/");
  }
});
