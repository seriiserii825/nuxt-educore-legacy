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
    <label v-if="label" :for="id">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :placeholder="placeholder !== undefined ? placeholder : null"
      :value="propsValue"
      :name="name"
      @input="changeHandler"
    />
    <div
      v-if="errors && errors.length"
      class="input__message input__message--error"
    >
      <p v-for="error in errors" :key="error.$uid">{{ error.$message }}</p>
    </div>
  </div>
</template>
