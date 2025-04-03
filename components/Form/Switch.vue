<script setup lang="ts">
const emits = defineEmits(['emit_checked'])
const props = defineProps({
label: {
    type: String,
    default: "I agree with terms and conditions",
  },
  checked: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    required: true,
  },
});

function onChange(e: any){
  const isChecked = e.target.checked;
  emits('emit_checked', isChecked);
}
</script>

<template>
  <div class="switch">
    <div class="form-label">{{ label }}</div>
    <label class="form-check form-switch">
      <input class="form-check-input" @change="onChange($event)" :name="name" :checked="checked" type="checkbox" />
      <span class="form-check-label"></span>
    </label>
  </div>
</template>
<style>
.switch {
  cursor: pointer;
}
</style>
