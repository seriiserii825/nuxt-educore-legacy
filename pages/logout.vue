<script setup lang="ts">
import useLogout from '~/composable/useLogout';
onMounted(() => {
  useLogout();
});
</script>

<template>
  <div class="layout"></div>
</template>
