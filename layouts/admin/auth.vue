<script setup>
import { useHead } from "#imports";
useHead({
  link: [
    { rel: "stylesheet", href: "/dist/css/tabler.min.css?1692870487" },
    { rel: "stylesheet", href: "/dist/css/tabler-flags.min.css?1692870487" },
    { rel: "stylesheet", href: "/dist/css/tabler-payments.min.css?1692870487" },
    { rel: "stylesheet", href: "/dist/css/tabler-vendors.min.css?1692870487" },
    { rel: "stylesheet", href: "/dist/css/demo.min.css?1692870487" },
    { rel: "stylesheet", href: "/css/all.min.css" },
    { rel: "stylesheet", href: "/css/bootstrap.min.css" },
    { rel: "stylesheet", href: "/style.css" },
    { rel: "stylesheet", href: "/css/responsive.css" },
  ],
});
</script>
<template>
  <div class="layout">
    <div class="d-flex justify-content-center align-items-center">
      <slot />
    </div>
  </div>
</template>
