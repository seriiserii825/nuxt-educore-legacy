<script setup lang="ts">
import useLogout from '~/composable/useLogout';
onMounted( async () => {
  await useLogout();
  await useGetCart();
  useSweetAlert(
    'success',
    'Logout Successfully',
    'You have been logged out successfully'
  );
});
</script>

<template>
  <div class="layout"></div>
</template>
