<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  type: {
    type: String as () => "success" | "error" | "warning" | "info",
    required: true,
  }
});
const class_name = ref("");

onMounted(() => {
  switch (props.type) {
    case "success":
      class_name.value = "badge bg-green text-green-fg";
      break;
    case "error":
      class_name.value = "badge bg-red text-red-fg";
      break;
    case "warning":
      class_name.value = "badge bg-yellow text-yellow-fg";
      break;
    case "info":
      class_name.value = "badge bg-blue text-blue-fg";
      break;
  }
})
</script>

<template>
  <span :class="class_name">{{ text }}</span>
</template>
