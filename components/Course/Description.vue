<script setup lang="ts">
import type { PropType } from "vue";
import type { TCourse } from "~/types/TCourse";

const props = defineProps({
  course: {
    type: Object as PropType<TCourse>,
    required: true,
  },
});
</script>

<template>
  <div class="wsus__courses_overview box_area">
    <h3 class="mb-4">Course Description</h3>
    <div v-html="course.description"></div>
  </div>
</template>
