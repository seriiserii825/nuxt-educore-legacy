<script setup lang="ts">
import { ref, onMounted, useSlots } from 'vue';

onMounted(() => {
    // console.log(slots.code, "slots.code");
  // if (slots.code) {
  //   // Extracts the code slot and turns it into raw text
  //   const el = document.createElement('div');
  //   el.appendChild(slots.code()[0].el.cloneNode(true));
  //   codeHTML.value = el.innerHTML.trim();
  // }
});
</script>

<template>
  <div class="preview-code">
    <div class="preview">
      <slot></slot> <!-- Renders the actual component -->
    </div>
    <div class="code-snippet">
      <slot name="code"></slot> <!-- Renders the code slot -->
      <button class="copy-button" @click="navigator.clipboard.writeText(codeHTML)">Copy</button>
    </div>
  </div>
</template>

<style scoped>
.preview {
  padding: 10px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
}

.code-snippet {
  position: relative;
}

.copy-button {
  position: absolute;
  top: 5px;
  right: 5px;
  padding: 5px 10px;
  background: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
