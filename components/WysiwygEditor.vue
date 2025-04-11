<script setup lang="ts">
import { MdEditor } from "md-editor-v3";
import "md-editor-v3/lib/style.css";
const emits = defineEmits(["emit_value"]);
const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  value: {
    type: String,
    default: "",
  },
  errors: {
    type: Array,
    default: () => [],
  },
});
const modelValue = ref(props.value);
watch(modelValue, (newValue) => {
  emits("emit_value", newValue);
});
watch(
  () => props.value,
  (newValue) => {
    modelValue.value = newValue;
  },
  { immediate: true }
);
onMounted(() => {
  modelValue.value = props.value;
});
</script>

<template>
  <div class="editor">
    <label v-if="label">{{ label }}</label>
    <ClientOnly>
      <MdEditor v-model="modelValue" />
    </ClientOnly>
    <div
      v-if="errors && errors.length"
      class="input__message input__message--error"
    >
      <p class="text-danger" v-for="(error, index) in errors" :key="index">
        {{ error }}
      </p>
    </div>
  </div>
</template>
