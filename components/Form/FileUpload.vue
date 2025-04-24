<script setup lang="ts">
const emits = defineEmits(["emit_file"]);

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
  accept: {
    type: String,
    default: "image/*",
  },
  image: {
    type: [String, File],
    required: false,
  },
});



function changeHandler(e: any) {
  const target = e.target as HTMLInputElement;
  if (target && target.files) {
    emits("emit_file", target.files[0]);
  }
}
</script>
<template>
  <div class="input">
    <label v-if="label" :for="name" class="form-label">{{ label }}</label>
    <input
      class="form-control"
      :id="name"
      :name="name"
      type="file"
      :accept="accept"
      @input="changeHandler"
      :class="{ 'input--error': errors && errors.length }"
    />
    <div v-if="errors && errors.length" class="input__message input__message--error">
      <p class="text-danger" v-for="(error, index) in errors" :key="index">
        {{ error }}
      </p>
    </div>
    <div v-if="image" class="input__message">
      <img :width="100" :src="`${useBaseUrl()}/${image}`" alt="Preview" class="img-fluid" />
    </div>
  </div>
</template>
<style>
.input--error {
  border-color: red !important;
}
</style>
