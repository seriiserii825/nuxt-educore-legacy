<script setup lang="ts">
import type { PropType } from "vue";
import type { TCourseChapter } from "~/types/TCourseChapter";

defineProps({
  chapters: {
    type: Array as PropType<TCourseChapter[]>,
    required: true,
  },
});
</script>

<template>
  <div class="video-sidebar">
    <div class="accordion" v-for="(chapter, index) in chapters">
      <StudentVideoSidebarItem :chapter="chapter" :index="index+1" :chapters_count="chapters.length" :opened="index === 0" />
    </div>
  </div>
</template>
<style scoped>
.accordion {
  padding-bottom: 0;
  overflow: initial;
}
</style>
