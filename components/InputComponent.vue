<script setup>
import { computed } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "text",
  },
  label: {
    type: String,
    required: false,
  },
  placeholder: {
    type: String,
    required: false,
  },
  errors: {
    type: Array,
    required: false,
  },
  value: {
    type: [String, Number],
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
});

const propsValue = computed(() => {
  return props.value;
});

const emits = defineEmits(["update:value"]);

function changeHandler(e) {
  let value = e.target.value;
  emits("update:value", value);
}
</script>
<template>
  <div class="input">
    <label v-if="label">{{ label }}</label>
    <input
      :type="type"
      :placeholder="placeholder !== undefined ? placeholder : null"
      :value="propsValue"
      :name="name"
      @input="changeHandler"
      :class="{ 'input--error': errors && errors.length }"
    />
    <div
      v-if="errors && errors.length"
      class="input__message input__message--error"
    >
      <p class="text-danger" v-for="(error, index) in errors" :key="index">{{ error }}</p>
    </div>
  </div>
</template>
<style>
.input--error {
  border-color: red !important;
}
</style>
