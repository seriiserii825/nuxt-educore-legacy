<script lang="ts" setup>
import { useAuthStore } from "./store/useAuthStore";

const auth_store = useAuthStore();
const router = useRouter();
async function getUser() {
  try {
    const data = await axiosInstance.get("/user");
    const user = data.data;
    console.log("user", user);
    auth_store.setUser(user);
  } catch (error) {
    console.log(error.status, "error.status");
    if (error.status === 401) {
      auth_store.setUser(null);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
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
