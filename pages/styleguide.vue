<script setup lang="ts">
definePageMeta({
  middleware: ["admin"],
});

const current_active = ref(0);
</script>

<template>
  <div class="layout pt-8">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <button :class="{'active': current_active == 0}" @click="current_active = 0" class="link d-block mb-2">Button</button>
          <button :class="{'active': current_active == 1}" @click="current_active = 1" class="link d-block mb-2">Checkbox</button>
        </div>
        <div class="col-md-9">Content</div>
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
