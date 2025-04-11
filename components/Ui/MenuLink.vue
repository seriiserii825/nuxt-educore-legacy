<script setup lang="ts">
const props = defineProps({
  to: String,
  icon: String,
  text: String,
});
</script>

<template>
  <li>
    <nuxt-link :to="to">
      <div class="img">
        <i :class="icon"></i>
      </div>
      {{ text }}
    </nuxt-link>
  </li>
</template>
<style>
.router-link-active.router-link-exact-active {
  color: white !important;
  background: var(--colorPrimary);
  border-color: #a6bef8;
}
</style>
