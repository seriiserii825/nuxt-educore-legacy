<script setup lang="ts">
const emits = defineEmits(['emit_checkbox'])
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
    type: Boolean,
    required: true,
  },
});

function emitCheckbox(event: Event) {
  const target = event.target as HTMLInputElement;
  emits('emit_checkbox', target.checked);
}
</script>
<template>
  <div class="checkbox">
    <label class="form-check">
      <input
        :name="name"
        :checked="value"
        class="form-check-input"
        type="checkbox"
        @change="emitCheckbox($event)"
      />
      <span class="form-check-label">{{ label }}</span>
    </label>
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
.checkbox {
  margin-bottom: 1.6rem;
}
</style>
