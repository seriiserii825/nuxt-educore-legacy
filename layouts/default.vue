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
</script>

<template>
  <div class="default-layout">
    <FrontHeader />
    <MainMenu />
    <MenuMobile />
    <slot />
  </div>
</template>
