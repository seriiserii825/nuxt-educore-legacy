<script setup lang="ts">
const route = useRoute();
const props = defineProps({
  url: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

const is_active = computed(() => {
  return route.path === props.url;
});
</script>

<template>
  <nuxt-link
    :to="url"
    class="list-group-item list-group-item-action d-flex align-items-center"
    :class="{ active: is_active }">
    {{ text }}
  </nuxt-link>
</template>
