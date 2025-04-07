<script lang="ts" setup>
const modalRef = ref(null);

  // @ts-ignore
const openModal = (component, props = {}) => {
  // @ts-ignore
  modalRef.value?.openModal(component, props);
};

const closeModal = () => {
  // @ts-ignore
  modalRef.value?.closeModal();
};

provide('openModal', openModal);
provide('closeModal', closeModal);

onMounted(async () => {
  await useGetUserApi();
});
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
    <PopupModal ref="modalRef" />
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
