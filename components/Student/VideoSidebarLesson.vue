<script setup lang="ts">
import { useVideoStore } from "~/store/useVideoStore";
import type { TCourseChapter } from "~/types/TCourseChapter";
import type { TLesson } from "~/types/TLesson";
import type {THistoryLesson} from "~/types/TWatchHistory";

const props = defineProps({
  chapter: {
    type: Object as PropType<TCourseChapter>,
    required: true,
  },
  course_id: {
    type: Number,
    required: true,
  },
  lesson: {
    type: Object as PropType<TLesson>,
    required: true,
  },
  history_lesson: {
    type: Object as PropType<THistoryLesson>,
    default: () => ({}),
  },
});
const video_store = useVideoStore();
const is_completed = ref(false);
const have_resources = ref(false);
const active = ref(false);

type TResponse = {
  data: {
    file_path: string;
  };
};

async function getVideoPath() {
  active.value = true;
  try {
    await axiosInstance.post(`/student/watch-history`, {
      course_id: props.course_id,
      chapter_id: props.chapter.id,
      lesson_id: props.lesson.id,
      is_completed: is_completed.value,
    });
    try {
      const data: TResponse = await axiosInstance.get(
        `/student/enrollments/${props.course_id}/get-video/${props.lesson.id}`
      );
      video_store.setVideoLoading(true);
      let video_path = useVideoToIframe(data.data.file_path);
      video_store.setVideo(video_path);
      setTimeout(() => {
        video_store.setVideoLoading(false);
      }, 1000);
    } catch (error) {
      handleAxiosError(error);
    }
  } catch (error) {
    handleAxiosError(error);
  }
}
onMounted(() => {
  if (props.history_lesson) {
    is_completed.value = Boolean(props.history_lesson.is_completed);
  }
});
</script>

<template>
  <div class="form-check lesson-item" :class="{'active': active}">
    <div>
      <input
        :checked="is_completed"
        @change="is_completed = !is_completed"
        class="form-check-input"
        type="checkbox"
        value=""
      />
      <label class="form-check-label" @click="getVideoPath()">
        {{ lesson.title }}
        <span>
          <img src="/images/video_icon_black_2.png" alt="video" class="img-fluid" />
          {{ useMinuteToTime(+lesson.duration) }}
        </span>
      </label>
    </div>
    <div class="dropdown" v-if="have_resources">
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
