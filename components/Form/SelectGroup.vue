<script setup lang="ts">
import type { TSelectOptionGroup } from "~/types/TSelectOption";

const emits = defineEmits(["emit_select"]);

const props = defineProps({
  name: String,
  label: String,
  options: Array as PropType<TSelectOptionGroup[]>,
  value: Number,
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
    <select class="select_2 form-select" :name="name" @change="onChange">
      <option value="" disabled selected hidden>
        Select an option
      </option>j
      <optgroup
        v-for="(option, index) in options"
        :key="index"
        :label="option.value"
      >
        <option
          v-for="(child, index) in option.options"
          :key="index"
          :value="child.key"
          :selected="child.key === value"
        >
          {{ child.value }}
        </option>
      </optgroup>
    </select>
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
