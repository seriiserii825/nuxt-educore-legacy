<script setup lang="ts">
import type { TSelectOption } from "~/types/TSelectOption";

const props = defineProps({
  name: String,
  label: String,
  options: Array as PropType<TSelectOption[]>,
  value: String,
});
</script>

<template>
  <div class="select">
    <label v-if="label" class="form-label">{{ label }}</label>
    <select class="form-select" :name="name">
      <option
        v-for="option in options"
        :key="option.key"
        :value="option.key"
        :selected="option.key === value"
      >
        {{ option.value }}
      </option>
    </select>
  </div>
</template>
