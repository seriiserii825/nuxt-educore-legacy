<script setup lang="ts">
import { inject } from "vue";
import CreateChapter from "./CreateChapter.vue";
import type { TCourseChapter } from "~/types/TCourseChapter";
import { useCourseChaptersStore } from "~/store/useCourseChaptersStore";
import EditChapter from "./EditChapter.vue";
const chapter_store = useCourseChaptersStore();
const route = useRoute();
const course_id = route.params.course_id;
const openModal = inject("openModal");
const showModal = () => {
  // @ts-ignore
  openModal(CreateChapter);
};
function editChapter(chapter: TCourseChapter) {
  // @ts-ignore
  openModal(EditChapter, { chapter });
}
async function getChapters() {
  chapter_store.setChaptersLoading(true);
  try {
    const response = await axiosInstance.get(
      `/instructor/course/${course_id}/chapters`
    );
    const chapters: TCourseChapter[] = response.data;
    chapter_store.setChapters(chapters);
    chapter_store.setChaptersLoading(false);
  } catch (error) {
    handleAxiosError(error, {});
    chapter_store.setChaptersLoading(false);
  }
}
async function deleteChapter(chapter_id: number) {
  const delete_confirmed = await useSweetAlertConfirm(
    "Are you sure?",
    "You won't be able to revert this!"
  );
  if (!delete_confirmed) {
    return;
  }
  chapter_store.setChaptersLoading(true);
  try {
    await axiosInstance.delete(
      `/instructor/course/${course_id}/chapters/${chapter_id}`
    );
    await getChapters();
  } catch (error) {
    handleAxiosError(error, {});
  } finally {
    chapter_store.setChaptersLoading(false);
  }
}
watch(
  () => chapter_store.chapter_was_created,
  async (newValue) => {
    if (newValue) {
      await getChapters();
      chapter_store.setChapterWasCreated(false);
    }
  }
);
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
    <UiLoading v-if="chapter_store.chapters_loading" />
    <div
      v-else-if="chapter_store.chapters && chapter_store.chapters.length > 0"
      class="accordion"
      id="accordionExample"
    >
      <InstructorChapter
        v-for="chapter in chapter_store.chapters"
        :key="chapter.id"
        :chapter="chapter"
        @emit_delete="deleteChapter"
        @emit_edit="editChapter"
      />
    </div>
  </div>
</template>
