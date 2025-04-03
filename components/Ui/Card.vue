<script setup lang="ts">
const props = defineProps({
  title: String,
  link_url: String,
  link_text: String,
});
</script>

<template>
  <div class="card">
    <div class="card-header d-flex justify-content-between">
      <h4 class="card-title">{{ title }}</h4>
      <div class="card-row">
        <slot name="header" />
      </div>
      <nuxt-link
        v-if="link_url && link_text"
        :to="link_url"
        class="btn btn-primary"
        >{{ link_text }}</nuxt-link
      >
    </div>
    <div class="card-body">
      <slot />
    </div>
  </div>
</template>
<style>
.card-row {
  display: flex;
  gap: 10px;
}
</style>
