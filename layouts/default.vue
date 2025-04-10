<script setup lang="ts">
import { useHead } from "#imports";
import {useUserStore} from "~/store/useUserStore";

useHead({
  link: [
    { rel: "stylesheet", href: "/css/all.min.css" },
    { rel: "stylesheet", href: "/css/bootstrap.min.css" },
    { rel: "stylesheet", href: "/style.css" },
    { rel: "stylesheet", href: "/css/responsive.css" },
  ],
});

const user_store = useUserStore();

async function getCart(){
  try {
  const data = await axiosInstance.get("/cart");
  user_store.setCart(data.data);
  } catch (error) {
   handleAxiosError(error); 
  }
}

onMounted(() => {
  getCart();
});

</script>

<template>
  <div class="layout">
    <FrontHeader />
    <MainMenu />
    <MenuMobile />
    <slot />
    <FrontFooter />
  </div>
</template>
<style>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
