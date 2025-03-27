<script setup lang="ts">
import { useHead } from "@unhead/vue";
import { useAuthStore } from "~/store/useAuthStore";
const auth_store = useAuthStore();

useHead({
  link: [
    { rel: "stylesheet", href: "/css/all.min.css" },
    { rel: "stylesheet", href: "/css/bootstrap.min.css" },
    { rel: "stylesheet", href: "/css/style.css" },
    { rel: "stylesheet", href: "/css/responsive.css" },
  ],
});
onMounted(() => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  if (user) {
    auth_store.setUser(user);
  }
});
</script>

<template>
  <div class="default-layout">
    <FrontHeader />
    <MainMenu />
    <MenuMobile />
    <slot />
  </div>
</template>
