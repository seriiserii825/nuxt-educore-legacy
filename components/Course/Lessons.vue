<script setup lang="ts">
import type { PropType } from "vue";
import type { TCourse } from "~/types/TCourse";
import type { TCourseChapter } from "~/types/TCourseChapter";
import type { TLesson } from "~/types/TLesson";

const props = defineProps({
  course: {
    type: Object as PropType<TCourse>,
    required: true,
  },
});

type TChapterLessons = {
  chapter: TCourseChapter;
  lessons: TLesson[];
};

const chapters_lessons = ref<TChapterLessons[]>([]);

onMounted(() => {
  if (props.course && props.course.chapters) {
    props.course.chapters.forEach((chapter) => {
      if (!props.course.lessons) {
        return;
      }
      const lessons = props.course.lessons.filter(
        (lesson) => lesson.chapter_id === chapter.id
      );
      if (lessons.length && chapters_lessons.value) {
        chapters_lessons.value.push({
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
      v-if="course.chapters && course.chapters.length"
      class="accordion"
      id="accordionExample"
    >
      <div
        class="accordion-item"
        v-for="item in chapters_lessons"
        :key="item.chapter.id"
      >
        <h2 class="accordion-header">
          <button class="accordion-button" type="button">
            {{ item.chapter.title }}
          </button>
        </h2>
        <div class="accordion-collapse collapse">
          <div
            v-if="item.lessons && item.lessons.length"
            class="accordion-body"
          >
            <ul>
              <li
                class="active"
                v-for="lesson in item.lessons"
                :key="lesson.id"
              >
                <p>{{ lesson.title }}</p>
                <span class="right_text">Preview</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
