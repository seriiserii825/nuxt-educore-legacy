<script setup>
import { useHead } from "#imports";

useHead({
  link: [
    { rel: "stylesheet", href: "/css/all.min.css" },
    { rel: "stylesheet", href: "/css/bootstrap.min.css" },
    { rel: "stylesheet", href: "/style.css" },
    { rel: "stylesheet", href: "/css/responsive.css" }
  ]
});
</script>
<template>
  <div class="layout">
    <slot />
  </div>
</template>
<style>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
