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

async function getUser() {
  const data = await axiosInstance.get("/user");
  const user = data.data;
  auth_store.setUser(user);
}

onMounted(async () => {
  await getUser();
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
