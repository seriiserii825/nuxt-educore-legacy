<script setup lang="ts">
import { MdEditor } from "md-editor-v3";
import "md-editor-v3/lib/style.css";
const emits = defineEmits(["update:modelValue"]);
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
  emits("update:modelValue", newValue);
});
onMounted(() => {
  modelValue.value = props.value;
});
</script>

<template>
  <div class="editor">
    <label v-if="label">{{ label }}</label>
    <MdEditor v-model="modelValue" />
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
