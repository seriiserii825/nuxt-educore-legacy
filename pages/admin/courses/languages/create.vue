<script setup lang="ts">
definePageMeta({
  layout: "admin",
  middleware: ["admin"],
});
</script>

<template>
  <div class="page-body">
    <div class="container-xl">
      <UiCard title="Create Language" link_text="back" link_url="/admin/courses/languages">
      </UiCard>
    </div>
  </div>
</template>
