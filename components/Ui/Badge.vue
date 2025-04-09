<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  type: {
    type: String as () => "success" | "error" | "warning" | "info",
    required: true,
  },
});
const class_name = ref("");

onMounted(() => {
  switch (props.type) {
    case "success":
      class_name.value = "success";
      break;
    case "error":
      class_name.value = "error";
      break;
    case "warning":
      class_name.value = "warning";
      break;
    case "info":
      class_name.value = "info";
      break;
  }
});
</script>

<template>
  <span class="custom-badge" :class="class_name">{{ text }}</span>
</template>
<style>
.custom-badge {
  justify-content: center;
  align-items: center;
  padding: 0.4em 0.8em;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: white;
  border-radius: 0.25em;
}
.custom-badge.success {
  background-color: green;
}
.custom-badge.error {
  background-color: red;
}
.custom-badge.warning {
  background-color: orange;
}
.custom-badge.info {
  background-color: blue;
}
</style>
