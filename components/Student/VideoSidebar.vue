<script setup lang="ts">
import { UiLoading } from "#components";
import type { PropType } from "vue";
import type { TChapterLessons } from "~/types/TChapterLessons";
import type { TCourseChapter } from "~/types/TCourseChapter";
import type {TLesson} from "~/types/TLesson";
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
  last_watch_history_lesson_id: {
    type: Number,
    required: true,
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

const loading = ref(false);
const max_chapter_id = ref(1);

function getChapterWithLastLesson(chapter_id: number) {
  const chapter_with_lesson = props.chapters.find((chapter: TCourseChapter) => {
    if (chapter.lessons) {
      return chapter.lessons.some(
      (lesson: TLesson) => {
          return lesson.id === props.last_watch_history_lesson_id;
        }
      );
    }
    return false;
  });
  if (chapter_with_lesson) {
    return chapter_with_lesson.id === chapter_id;
  }
  return false;
}
onMounted(() => {
  loading.value = true;
  if (props.history_chapters) {
    props.history_chapters.forEach((chapter: THistoryChapter, index) => {
      if (chapter.lessons) {
        chapter.lessons.forEach((lesson: THistoryLesson) => {
          if (lesson.is_completed) {
            max_chapter_id.value = Math.max(max_chapter_id.value, chapter.chapter);
          }
        });
      }
    });
  }
  loading.value = false;
  console.log(max_chapter_id.value, "max_chapter_id.value");
});
</script>

<template>
  <div class="video-sidebar">
    <UiLoading v-if="loading" />
    <div v-else class="accordion" v-for="(chapter, index) in chapters">
      <StudentVideoSidebarChapter
        :chapter="chapter"
        :index="index + 1"
        :chapters_count="chapters.length"
        :course_id="course_id"
        :opened="getChapterWithLastLesson(chapter.id)"
        :history_lessons="getLessons(chapter.id)"
        :last_watch_history_lesson_id="last_watch_history_lesson_id"
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
