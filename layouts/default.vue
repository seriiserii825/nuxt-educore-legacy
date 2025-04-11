<script setup lang="ts">
import { useHead } from "#imports";

useHead({
  link: [
    { rel: "stylesheet", href: "/css/all.min.css" },
    { rel: "stylesheet", href: "/css/bootstrap.min.css" },
    { rel: "stylesheet", href: "/css/fontawesome.min.css" },
    { rel: "stylesheet", href: "/style.css" },
    { rel: "stylesheet", href: "/css/responsive.css" },
  ],
});

async function getCart(){
  await useGetCart();
}

onMounted(() => {
  getCart();
});

</script>

<template>
  <div class="layout default-layout">
    <FrontHeader />
    <MainMenu />
    <MenuMobile />
    <slot />
    <FrontFooter />
  </div>
</template>
<style>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
