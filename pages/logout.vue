<script setup lang="ts">
const router = useRouter();
onMounted(() => {
  axiosInstance.post('/logout')
    .then(() => {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      router.push({ name: 'login' });
    })
    .catch(() => {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      router.push({ name: 'login' });
    });
  // localStorage.removeItem('token');
  // router.push({ name: 'login' });
});
</script>

<template>
  <div class="logout">

  </div>
</template>
