<script setup lang="ts">
import {StyleguideSwitch} from '#components';

const current_active = ref(0);
const layout = ref(null);
onMounted(() => {
  if (layout.value) {
    layout.value.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
});
</script>

<template>
  <div class="layout pt-10 pb-10" ref="layout">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <button
            :class="{ active: current_active == 0 }"
            @click="current_active = 0"
            class="link d-block mb-2"
          >
            Button
          </button>
          <button
            :class="{ active: current_active == 1 }"
            @click="current_active = 1"
            class="link d-block mb-2"
          >
            Checkbox
          </button>
          <button
            :class="{ active: current_active == 2 }"
            @click="current_active = 2"
            class="link d-block mb-2"
          >
          Radio
          </button>
          <button
            :class="{ active: current_active == 3 }"
            @click="current_active = 3"
            class="link d-block mb-2"
          >
          Input
          </button>
          <button
            :class="{ active: current_active == 4 }"
            @click="current_active = 4"
            class="link d-block mb-2"
          >
          Select
          </button>
          <button
            :class="{ active: current_active == 5 }"
            @click="current_active = 5"
            class="link d-block mb-2"
          >
          Select Group
          </button>
          <button
            :class="{ active: current_active == 6 }"
            @click="current_active = 6"
            class="link d-block mb-2"
          >
          File upload
          </button>
          <button
            :class="{ active: current_active == 7 }"
            @click="current_active = 7"
            class="link d-block mb-2"
          >
          Textarea
          </button>
          <button
            :class="{ active: current_active == 8 }"
            @click="current_active = 8"
            class="link d-block mb-2"
          >
          Switch
          </button>
        </div>
        <div class="col-md-9">
          <div v-if="current_active === 0">
            <StyleguideButtons />
          </div>
          <div v-if="current_active === 1">
            <StyleguideCheckbox />
          </div>
          <div v-if="current_active === 2">
            <StyleguideRadio />
          </div>
          <div v-if="current_active === 3">
            <StyleguideInput />
          </div>
          <div v-if="current_active === 4">
            <StyleguideSelect />
          </div>
          <div v-if="current_active === 5">
            <StyleguideSelectGroup />
          </div>
          <div v-if="current_active === 6">
            <StyleguideFileUpload />
          </div>
          <div v-if="current_active === 7">
            <StyleguideTextarea />
          </div>
          <div v-if="current_active === 8">
            <StyleguideSwitch />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.link {
  padding: 10px 26px;
  line-height: 1.5;
  font-size: 16px;
  font-weight: 500;
  transition: color 0.5s;
  border-radius: 8px;
  &.active,
  &:hover {
    color: #fff;
    background-color: #007bff;
  }
}
</style>
