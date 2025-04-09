<script setup>
import { useHead } from "#imports";

useHead({
  link: [
    { rel: "stylesheet", href: "/css/fontawesome.min.css" },
    { rel: "stylesheet", href: "/dist/css/tabler.min.css?1692870487" },
    { rel: "stylesheet", href: "/dist/css/tabler-flags.min.css?1692870487" },
    {
      rel: "stylesheet",
      href: "/dist/css/tabler-payments.min.css?1692870487",
    },
    { rel: "stylesheet", href: "/dist/css/tabler-vendors.min.css?1692870487" },
    { rel: "stylesheet", href: "/dist/css/demo.min.css?1692870487" },
    { rel: "stylesheet", href: "/css/style.css" },
  ],
  script: [
    // { src: "/dist/js/demo-theme.min.js?1692870487" },
    { src: "/dist/js/tabler.min.js?1692870487" },
    { src: "/dist/js/demo.min.js?1692870487" },
  ],
});
</script>
<template>
  <div class="layout" style="min-height: 80vh">
    <AdminSidebar />
    <div class="page-wrapper">
      <HeaderAdmin />
      <slot />
      <FooterAdmin />
    </div>
  </div>
</template>
