<script setup lang="ts">
import type { TChapterLessons } from "~/types/TChapterLessons";
import type {TLesson} from "~/types/TLesson";
import VideoPopup from "../Popup/VideoPopup.vue";
const openModal = inject("openModal");
const props = defineProps({
  item: {
    type: Object as PropType<TChapterLessons>,
    required: true,
  },
  opened: {
    type: Boolean,
    default: false,
  },
});

const active = ref(false);

function showVideo(item: TLesson){
  // // if item.filepath contains youtube link open in new tab
  // if (item.file_path.includes("youtube.com")) {
  //   window.open(item.file_path, "_blank");
  //   return;
  // }
  // @ts-ignore
  openModal(VideoPopup, { youtube: item.file_path });
}

onMounted(() => {
  if (props.opened) {
    active.value = true;
  }
});
</script>

<template>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button
        @click="active = !active"
        class="accordion-button"
        :class="{ collapsed: !active }"
        type="button"
      >
        {{ item.chapter.title }}
      </button>
    </h2>
    <div class="accordion-collapse collapse" :class="{ show: active }">
      <div v-if="item.lessons && item.lessons.length" class="accordion-body">
        <ul>
          <li
            :class="{ active: lesson.is_preview }"
            v-for="lesson in item.lessons"
            :key="lesson.id"
          >
            <p>{{ lesson.title }}</p>
            <a href="#" v-if="lesson.is_preview" @click.prevent="showVideo(lesson)" class="right_text">Preview</a>
            <span v-else class="right_text">{{ useMinuteToTime(parseInt(lesson.duration)) }} min</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
