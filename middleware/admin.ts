import { useAuthStore } from "~/store/useAuthStore";

export default defineNuxtRouteMiddleware((to, from) => {
  const auth_store = useAuthStore();
  const { user } = storeToRefs(auth_store);
  console.log(user.value, "user.value");

  if (!user.value || user.value.role !== "admin") {
    return navigateTo("/"); // Redirect unauthorized users
  }

  if (to.path === "/admin/login") {
    return navigateTo("/admin"); // Prevent logged-in admin from accessing login
  }
});
