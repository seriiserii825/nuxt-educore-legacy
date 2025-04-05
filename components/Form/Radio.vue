<script setup lang="ts">
import type { TSelectOption } from "~/types/TSelectOption";

const emits = defineEmits(['emit_radio']);

const props = defineProps({
  label: {
    type: String,
    required: false,
  },
  errors: {
    type: Array,
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
  value: {
    type: [Number, null],
    required: true,
  },
  options: {
    type: Array as PropType<TSelectOption[]>,
    required: false,
  },
});
function emitRadio(event: Event, key: number) {
  const target = event.target as HTMLInputElement;
  if (target.checked) {
    emits('emit_radio', key);
  }
}
</script>
<template>
  <div class="radio">
    <div class="add_course_more_info_radio_box">
      <h3>{{ label }}</h3>
      <div v-for="option in options" :key="option.key" class="form-check">
        <input
          class="form-check-input"
          type="radio"
          :name="name"
          :id="`js-${name}-${option.key}`"
          :checked="option.key === value"
          @change="emitRadio($event, option.key)"
        />
        <label class="form-check-label" :for="`js-${name}-${option.key}`">
          {{ option.value }}
        </label>
      </div>
    </div>
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
<style>
.radio {
  margin-bottom: 1.6rem;
}
</style>
