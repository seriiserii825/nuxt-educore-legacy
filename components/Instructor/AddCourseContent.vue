<script setup lang="ts">
import { inject } from "vue";

const route = useRoute();
const course_id = route.params.course_id;

const openModal = inject("openModal");
import ModalContent from "./CreateChapter.vue";
import type {TCourseChapter} from "~/types/TCourseChapter";

const showModal = () => {
  // @ts-ignore
  openModal(ModalContent, { message: "Hello from modal!" });
};

async function getChapters() {
  try {
    const response = await axiosInstance.get(
      `/instructor/course/${course_id}/chapters`
    );
    const chapters: TCourseChapter[] = response.data;
  } catch (error) {
    handleAxiosError(error, {});
  }
}
onMounted(() => {
  getChapters();
});
</script>

<template>
  <div class="add_course_content">
    <div
      class="flex-wrap add_course_content_btn_area d-flex justify-content-between"
    >
      <button class="common_btn" @click="showModal">Add New Chapter</button>
      <a class="common_btn" href="#">Short Chapter</a>
    </div>
    <div class="accordion" id="accordionExample">
      <InstructorChapter />
    </div>
  </div>
</template>
