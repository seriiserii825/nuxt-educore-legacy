<script setup lang="ts">
const emits = defineEmits(['emit_click'])
</script>

<template>
  <div @click="emits('emit_click')" class="d-flex gap-2 pointer">
    <i class="fa-solid fa-copy text-success"></i>
    <span>Copy to clipboard</span>
  </div>
</template>
