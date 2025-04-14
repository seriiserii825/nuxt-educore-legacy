<script setup lang="ts">
import type { PropType } from "vue";
import type { TCourseChapter } from "~/types/TCourseChapter";

const props = defineProps({
  chapters: {
    type: Array as PropType<TCourseChapter[]>,
    required: true,
  },
});
</script>

<template>
  <div class="video-sidebar">
    <h2 class="video_heading">Course Content</h2>
    <div class="accordion" v-for="chapter in chapters">
      <StudentVideoSidebarItem />
    </div>
  </div>
</template>
