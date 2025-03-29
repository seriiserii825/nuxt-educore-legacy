<script setup lang="ts">
const props = defineProps({
  image: String,
  name: String,
  role: String,
});
</script>

<template>
  <div class="wsus__dashboard_sidebar_top">
    <div class="dashboard_banner">
      <img
        src="/images/single_topic_sidebar_banner.jpg"
        alt="img"
        class="img-fluid"
      />
    </div>
    <div class="img">
      <img
        :src="image"
        alt="profile"
        class="img-fluid w-100"
      />
    </div>
    <h4>{{ name }}</h4>
    <p>{{ role }}</p>
  </div>
</template>
