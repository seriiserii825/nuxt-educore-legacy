<script lang="ts" setup>
async function getUser() {
  try {
    const data = await axiosInstance.get("/user");
    const user = data.data;
    const user_cookie = useCookie("user");
    user_cookie.value = JSON.stringify(user);
  } catch (error: any) {
    console.log(error.status, "error.status");
    if (error.status === 401) {
      const user_cookie = useCookie("user");
      user_cookie.value = null;
      localStorage.removeItem("token");
    }
  }
}

onMounted(async () => {
  await getUser();
});
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
</style>
