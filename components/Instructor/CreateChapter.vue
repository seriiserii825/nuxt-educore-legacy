<script setup lang="ts">
const name = ref<string>("");
const errors = ref({
  name: [],
});
</script>

<template>
  <div class="chapter">
    <InputComponent
      label="Chapter Name"
      v-model:value="name"
      type="text"
      name="name"
      :errors="errors ? errors.name : []"
    />
  </div>
</template>
