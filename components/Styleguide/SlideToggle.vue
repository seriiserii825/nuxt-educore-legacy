<script setup lang="ts">
import { Vue3SlideUpDown } from "vue3-slide-up-down";
const show = ref(true);
const code = `
import { Vue3SlideUpDown } from "vue3-slide-up-down";
const show = ref(true);

function toggleText() {
  show.value = !show.value;
}

<div>
  <button class="btn btn-primary" @click="toggleText">Toggle text</button>
</div>
<Vue3SlideUpDown v-model="show">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed alias natus doloribus,
  reprehenderit blanditiis impedit excepturi facilis! Odit, dicta? Numquam nostrum a fuga
  nulla ipsam, repudiandae at eaque nisi sequi?
</Vue3SlideUpDown>

`;

const source = `
import { ref } from "vue";
import { Vue3SlideUpDown } from "vue3-slide-up-down";

const show = ref(true);
`;

function toggleText() {
  show.value = !show.value;
}

function onClick(variable: string) {
  useCopyToClipboard(variable);
}
</script>

<template>
  <div class="buttons">
    <StyleguidePreviewCode>
      <template #default>
        <div>
          <button class="btn btn-primary" @click="toggleText">Toggle text</button>
        </div>
        <Vue3SlideUpDown v-model="show">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed alias natus doloribus,
          reprehenderit blanditiis impedit excepturi facilis! Odit, dicta? Numquam nostrum a fuga
          nulla ipsam, repudiandae at eaque nisi sequi?
        </Vue3SlideUpDown>
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
