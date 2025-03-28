<script setup>
import { useHead } from '@unhead/vue'

useHead({
  link: [
    { rel: "stylesheet", href: "/dist/css/tabler.min.css?1692870487" },
    { rel: "stylesheet", href: "/dist/css/tabler-flags.min.css?1692870487" },
    { rel: "stylesheet", href: "/dist/css/tabler-payments.min.css?1692870487" },
    { rel: "stylesheet", href: "/dist/css/tabler-vendors.min.css?1692870487" },
    { rel: "stylesheet", href: "/dist/css/demo.min.css?1692870487" },
  ]
});
</script>
<template>
  <div>
    <slot />
  </div>
</template>
