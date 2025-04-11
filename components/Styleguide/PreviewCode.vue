<script setup lang="ts">
import { Vue3SlideUpDown } from "vue3-slide-up-down";
const emits = defineEmits(['emit_click']);
const show_code = ref(false);
const show_source = ref(false);

function emitClick() {
  emits('emit_click');
}
</script>

<template>
  <div class="preview-code">
    <div class="preview">
      <slot></slot>
      <!-- Renders the actual component -->
    </div>
    <footer class="d-flex wrap gap-2 justify-content-end border p-2">
      <FormBtn
        color="btn-warning"
        @emit_click="emitClick"
        >Copy to clipboard</FormBtn
      >
      <FormBtn @emit_click="() => (show_code = !show_code)">How to use</FormBtn>
      <FormBtn
        color="btn-secondary"
        @emit_click="() => (show_source = !show_source)"
        >Source Code</FormBtn
      >
    </footer>
    <Vue3SlideUpDown v-model="show_code">
      <div class="code-snippet">
        <pre>
          <slot name="code"></slot>
        </pre>
      </div>
    </Vue3SlideUpDown>
    <Vue3SlideUpDown v-model="show_source">
      <div class="code-snippet">
        <pre>
        <slot name="source"></slot>
      </pre>
      </div>
    </Vue3SlideUpDown>
  </div>
</template>

<style>
.preview-code {
  position: relative;
}
.preview {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
}
.preview > * {
  margin-bottom: 10px;
}

.code-snippet {
  position: relative;
  padding: 10px 20px;
  font-size: 20px;
  color: white;
  background: #333;
}
</style>
