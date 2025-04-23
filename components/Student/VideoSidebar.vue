<script setup lang="ts">
import type { PropType } from "vue";
import type { TChapterLessons } from "~/types/TChapterLessons";
import type { TCourseChapter } from "~/types/TCourseChapter";
import type { THistoryChapter, THistoryLesson } from "~/types/TWatchHistory";

const props = defineProps({
  chapters: {
    type: Array as PropType<TCourseChapter[]>,
    required: true,
  },
  course_id: {
    type: Number,
    required: true,
  },
  history_chapters: {
    type: Array as PropType<THistoryChapter[]>,
    default: () => [],
  },
});
function getLessons(chapter_id: number) {
  if (!props.history_chapters) {
    return [];
  }
  const chapter = props.history_chapters.find(
    (chapter: THistoryChapter) => chapter.chapter === chapter_id
  );
  if (!chapter) {
    return [];
  }
  if (!chapter.lessons) {
    return [];
  }
  return chapter.lessons;
}
</script>

<template>
  <div class="video-sidebar">
    <div class="accordion" v-for="(chapter, index) in chapters">
      <StudentVideoSidebarChapter
        :chapter="chapter"
        :index="index + 1"
        :chapters_count="chapters.length"
        :course_id="course_id"
        :opened="index === 0"
        :history_lessons="getLessons(chapter.id)"
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
