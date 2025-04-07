<script setup lang="ts">
import { inject } from "vue";
import { useCourseChaptersStore } from "~/store/useCourseChaptersStore";
import type { TCourseChapter } from "~/types/TCourseChapter";
const chapter_store = useCourseChaptersStore();
const closeModal = inject("closeModal");
const route = useRoute();
const course_id = route.params.course_id;
const title = ref<string>("");
const errors = ref();
const props = defineProps({
  chapter: {
    type: Object as PropType<TCourseChapter>,
    required: true,
  },
});
const hideModal = () => {
  // @ts-ignore
  if (closeModal) closeModal(); // Ensure it's not undefined
};
async function emitClick() {
  await createChapter();
}
async function createChapter() {
  try {
    const data = await axiosInstance.put(
      `/instructor/course/${course_id}/chapters/${props.chapter.id}`,
      {
        title: title.value,
        course_id: course_id,
      }
    );
    chapter_store.setChapterWasCreated(true);
    useSweetAlert("success", "Success", data.data.message);
    hideModal();
  } catch (error: unknown) {
    handleAxiosError(error, errors);
  }
}
onMounted(() => {
  title.value = props.chapter.title;
});
</script>

<template>
  <div class="chapter">
    <h3 class="mb-3">Edit chapter</h3>
    <InputComponent
      label="Name"
      v-model:value="title"
      type="text"
      name="title"
      :errors="errors ? errors.title : []"
    />
    <div class="actions">
      <FormBtn @emit_click="emitClick">Edit</FormBtn>
    </div>
  </div>
</template>
