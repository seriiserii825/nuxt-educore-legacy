<script setup lang="ts">
import type { PropType } from "vue";
import type { TChapterLessons } from "~/types/TChapterLessons";
import type { TCourse } from "~/types/TCourse";

const props = defineProps({
  course: {
    type: Object as PropType<TCourse>,
    required: true,
  },
});

const chapter_lessons = ref<TChapterLessons[]>([]);

onMounted(() => {
  if (props.course && props.course.chapters) {
    props.course.chapters.forEach((chapter) => {
      if (!props.course.lessons) {
        return;
      }
      const lessons = props.course.lessons.filter(
        (lesson) => lesson.chapter_id === chapter.id
      );
      if (lessons.length && chapter_lessons.value) {
        chapter_lessons.value.push({
          chapter: chapter,
          lessons: lessons,
        });
      }
    });
  }
});
</script>

<template>
  <div class="wsus__courses_curriculum box_area">
    <h3>Course Lessons</h3>
    <div
      v-if="chapter_lessons.length"
      class="accordion"
      id="accordionExample"
    >
      <CourseLessonsAccordion
        v-for="item in chapter_lessons"
        :key="item.chapter.id"
        :item="item"
      />
    </div>
  </div>
</template>
