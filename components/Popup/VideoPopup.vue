<script setup lang="ts">
const props = defineProps({
  youtube: {
    type: String,
    required: true,
  },
});

const youtube_url = computed(() => {
  // change watch to embed
  return props.youtube.replace("watch?v=", "embed/");
});
</script>

<template>
  <div class="video-popup">
    <iframe :src="youtube_url" frameborder="0"></iframe>
  </div>
</template>
<style>
.video-popup {
  position: relative;
  aspect-ratio: 16/9;
}
.video-popup iframe {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
