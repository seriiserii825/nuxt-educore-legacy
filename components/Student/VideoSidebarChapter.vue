<script setup lang="ts">
import { Vue3SlideUpDown } from "vue3-slide-up-down";
import type { TCourseChapter } from "~/types/TCourseChapter";
import type {THistoryLesson} from "~/types/TWatchHistory";
const props = defineProps({
  chapter: {
    type: Object as PropType<TCourseChapter>,
    required: true,
  },
  chapters_count: {
    type: Number,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
  opened: {
    type: Boolean,
    default: false,
  },
  course_id: {
    type: Number,
    required: true,
  },
  history_lessons: {
    type: Array as PropType<THistoryLesson[]>,
    default: () => [],
  }
});
const show = ref(props.opened);
function toggleText() {
  show.value = !show.value;
}
</script>
<template>
  <div>
    <div v-if="chapter.lessons && chapter.lessons.length" class="accordion-item">
      <h2 class="accordion-header">
        <button @click="toggleText" class="accordion-button" type="button">
          <b>{{ chapter.title }}</b>
          <span>{{ index }}/{{ chapters_count }}</span>
        </button>
      </h2>
      <div class="accordion-collapse collapse show">
        <Vue3SlideUpDown v-model="show">
          <div class="accordion-body">
            <div
              v-for="(lesson) in chapter.lessons"
              :key="lesson.id"
            >
              <StudentVideoSidebarLesson
                :chapter="chapter"
                :course_id="course_id"
                :lesson="lesson"
                :history_lesson="history_lessons.find((h) => h.id === lesson.id)"
              />
            </div>
          </div>
        </Vue3SlideUpDown>
      </div>
    </div>
    <div v-else>
      <h2 class="accordion-header">No lessons available</h2>
    </div>
  </div>
</template>
<style>
.lesson-item .form-check-label {
  transition: color 0.3s ease;
  cursor: pointer;
}
.lesson-item .form-check-label:hover,
.lesson-item.active .form-check-label {
  color: #007bff;
}
.form-check-input {
  cursor: pointer;
}
</style>
