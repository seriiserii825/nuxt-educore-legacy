<script setup lang="ts">
import type { TChapterLessons } from "~/types/TChapterLessons";

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
          <li class="active" v-for="lesson in item.lessons" :key="lesson.id">
            <p>{{ lesson.title }}</p>
            <span class="right_text">Preview</span>
          </li>
          <li>
            <a href="">User Experience Fundamentals Course</a>
            <span class="right_text">24 minutes</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
