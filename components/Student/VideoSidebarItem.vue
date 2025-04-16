<script setup lang="ts">
import { Vue3SlideUpDown } from "vue3-slide-up-down";
import type { TCourseChapter } from "~/types/TCourseChapter";
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
            <div v-for="lesson in chapter.lessons" :key="lesson.id" class="form-check">
              <input class="form-check-input" type="checkbox" value="" />
              <label class="form-check-label">
                {{ lesson.title }}
                <span>
                  <img src="/images/video_icon_black_2.png" alt="video" class="img-fluid" />
                  {{ useMinuteToTime(+lesson.duration) }}
                </span>
              </label>
            </div>
            <div class="dropdown">
              <button class="btn btn-secondary" type="button">
                <i class="fas fa-folder-open"></i> Resources
              </button>
              <ul>
                <li><a class="dropdown-item" href="#">Resources File 01</a></li>
                <li><a class="dropdown-item" href="#">Resources 02</a></li>
                <li><a class="dropdown-item" href="#">Resources 03</a></li>
              </ul>
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
