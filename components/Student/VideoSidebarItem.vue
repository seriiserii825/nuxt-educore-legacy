<script setup lang="ts">
import { Vue3SlideUpDown } from "vue3-slide-up-down";
import {useVideoStore} from "~/store/useVideoStore";
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
  },
  course_id: {
    type: Number,
    required: true,
  },
});

const video_store = useVideoStore();

const show = ref(props.opened);

function toggleText() {
  show.value = !show.value;
}

type TResponse = {
  data: {
    file_path: string;
  };
};

async function getVideoPath(lesson: any) {
  const lesson_id = lesson.id;
  const data: TResponse = await axiosInstance.get(`/student/enrollments/get-video?lesson_id=${lesson_id}&course_id=${props.course_id}`);
  video_store.setVideoLoading(true);
  let video_path = useVideoToIframe(data.data.file_path);
  video_store.setVideo(video_path);
  video_store.setVideoLoading(false);
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
            <div v-for="lesson in chapter.lessons" :key="lesson.id" class="form-check" @click.prevent="getVideoPath(lesson)">
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
