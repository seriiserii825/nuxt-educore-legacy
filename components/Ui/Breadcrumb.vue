<script setup lang="ts">
const props = defineProps({
image: String,
title: String,
});
</script>

<template>
  <section
    class="wsus__breadcrumb"
    :style="`background: url(${image})`"
  >
    <div class="wsus__breadcrumb_overlay">
      <div class="container">
        <div class="row">
          <div class="col-12 wow fadeInUp">
            <div class="wsus__breadcrumb_text">
              <h1>Overview</h1>
              <ul>
                <li>{{ title }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
