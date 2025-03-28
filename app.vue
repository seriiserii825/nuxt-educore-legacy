<script lang="ts" setup>
import { useAuthStore } from "./store/useAuthStore";

const auth_store = useAuthStore();
const router = useRouter();
async function getUser() {
  try {
    const data = await axiosInstance.get("/user");
    const user = data.data;
    auth_store.setUser(user);
    const user_cookie = useCookie("user");
    user_cookie.value = JSON.stringify(user);
  } catch (error) {
    console.log(error.status, "error.status");
    if (error.status === 401) {
      auth_store.setUser(null);
      localStorage.removeItem("token");
      // router.push("/login");
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
