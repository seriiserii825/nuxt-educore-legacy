<script setup lang="ts">
type TMenuItem = {
  title: string;
  link: string;
};

const props = defineProps({
  title: String,
  icon: String,
  url: String,
});
</script>

<template>
  <li class="nav-item">
    <nuxt-link class="nav-link" to="/admin">
      <span class="nav-link-icon d-md-none d-lg-inline-block">
        <i :class="icon"></i>
      </span>
      <span class="nav-link-title">{{ title }}</span>
    </nuxt-link>
  </li>
</template>
