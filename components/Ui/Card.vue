<script setup lang="ts">
const props = defineProps({
  title: String,
});
</script>

<template>
  <div class="card">
    <div class="card-header">
      <h4 class="card-title">{{ title }}</h4>
    </div>
    <div class="card-body">
      <slot />
    </div>
  </div>
</template>
