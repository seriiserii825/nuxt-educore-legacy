<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({
  link: [
    { rel: "stylesheet", href: "/css/all.min.css" },
    { rel: "stylesheet", href: "/css/bootstrap.min.css" },
    { rel: "stylesheet", href: "/css/style.css" },
    { rel: "stylesheet", href: "/css/responsive.css" }
  ]
});
onMounted(() => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  console.log("user", user);
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
