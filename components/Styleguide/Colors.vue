<script setup lang="ts">
const code = `
<div style="width: 30px; height: 30px; background-color: var(--accent);"></div>
<div style="width: 30px; height: 30px; background-color: var(--accent-light);"></div>
<div style="width: 30px; height: 30px; background-color: var(--accent-dark);"></div>
<div style="width: 30px; height: 30px; background-color: var(--contrast);"></div>
`;

const source = `
var(--accent)
var(--accent-light)
var(--accent-dark)
var(--contrast)
`;

function onClick(variable: string){
// copy to clipboard
  navigator.clipboard.writeText(variable).then(() => {
    useSweetAlert('success', 'Copied to clipboard', variable);
  }).catch(err => {
    useSweetAlert('error', 'Failed to copy', err);
  });
}
</script>

<template>
  <div class="buttons">
    <StyleguidePreviewCode>
      <template #default>
        <div
          style="width: 30px; height: 30px; background-color: var(--accent)"
          title="var(--accent)"
          @click="onClick('var(--accent)')"
        ></div>
        <div
          style="
            width: 30px;
            height: 30px;
            background-color: var(--accent-light);
          "
          title="var(--accent-light)"
          @click="onClick('var(--accent-light)')"
        ></div>
        <div
          style="
            width: 30px;
            height: 30px;
            background-color: var(--accent-dark);
          "
          title="var(--accent-dark)"
          @click="onClick('var(--accent-dark)')"
        ></div>
        <div
          style="width: 30px; height: 30px; background-color: var(--contrast)"
          title="var(--contrast)"
          @click="onClick('var(--contrast)')"
        ></div>
      </template>
      <template #code>
        {{ code }}
      </template>
      <template #source>
        {{ source }}
      </template>
    </StyleguidePreviewCode>
  </div>
</template>
<style>
:root {
  --accent: #007bff;
  --accent-light: #66b2ff;
  --accent-dark: #0056b3;
  --contrast: #ffcc00;
}
</style>
