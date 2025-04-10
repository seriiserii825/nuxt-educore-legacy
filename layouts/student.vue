<script setup>
import { useHead } from "#imports";

useHead({
  link: [
    { rel: "stylesheet", href: "/css/fontawesome.min.css" },
    { rel: "stylesheet", href: "/css/all.min.css" },
    { rel: "stylesheet", href: "/css/bootstrap.min.css" },
    { rel: "stylesheet", href: "/style.css" },
    { rel: "stylesheet", href: "/css/responsive.css" }
  ]
});
</script>
<template>
  <div class="layout">
    <FrontHeader />
    <MainMenu />
    <MenuMobile />
    <slot />
    <div class="pb-6"></div>
    <FrontFooter />
  </div>
</template>
