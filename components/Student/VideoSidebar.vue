<script setup lang="ts">
import type { PropType } from "vue";
import type { TCourseChapter } from "~/types/TCourseChapter";

defineProps({
  chapters: {
    type: Array as PropType<TCourseChapter[]>,
    required: true,
  },
  course_id: {
    type: Number,
    required: true,
  },
  chapter_id: {
    type: Number,
    required: true,
  },
  lesson_id: {
    type: Number,
    required: true,
  },
  is_completed: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <div class="video-sidebar">
    <div class="accordion" v-for="(chapter, index) in chapters">
      <StudentVideoSidebarItem
        :chapter="chapter"
        :index="index + 1"
        :chapters_count="chapters.length"
        :course_id="course_id"
        :opened="chapter_id === chapter.id"
        :lesson_id="lesson_id"
        :is_completed="is_completed"
      />
    </div>
  </div>
</template>
<style scoped>
.accordion {
  padding-bottom: 0;
  overflow: initial;
}
</style>
