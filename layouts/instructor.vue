<script setup>
import { useHead } from "#imports";

useHead({
  link: [
    { rel: "stylesheet", href: "/css/fontawesome.min.css" },
    { rel: "stylesheet", href: "/css/all.min.css" },
    { rel: "stylesheet", href: "/css/bootstrap.min.css" },
    { rel: "stylesheet", href: "/css/style.css" },
    { rel: "stylesheet", href: "/css/responsive.css" },
  ],
});
</script>
<template>
  <div class="layout">
    <FrontHeader />
    <MainMenu />
    <MenuMobile />
    <div class="content-wrapper">
      <slot />
    </div>
    <FrontFooter />
  </div>
</template>
