<script setup lang="ts">
import type { TSelectOption } from "~/types/TSelectOption";

const emits = defineEmits(['emit_select']);

const props = defineProps({
  name: String,
  label: String,
  options: Array as PropType<TSelectOption[]>,
  value: String,
  errors: {
    type: Array,
    required: false,
  },
});

function onChange(event: Event) {
  const target = event.target as HTMLSelectElement;
  emits("emit_select", target.value);
}
</script>

<template>
  <div class="select">
    <label v-if="label" class="form-label">{{ label }}</label>
    <select class="form-select" @change="onChange" :name="name">
      <option
        v-for="option in options"
        :key="option.key"
        :value="option.key"
        :selected="option.key === value"
      >
        {{ option.value }}
      </option>
    </select>
    <div
      v-if="errors && errors.length"
      class="input__message input__message--error"
    >
      <p class="text-danger" v-for="(error, index) in errors" :key="index">{{ error }}</p>
    </div>
  </div>
</template>
<style>
.select {
  margin-bottom: 1rem;
}
</style>
