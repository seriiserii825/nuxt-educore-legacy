<script setup lang="ts">
import { inject } from "vue";
const closeModal = inject("closeModal");
const route = useRoute();
const course_id = route.params.course_id;
const title = ref("");
const errors = ref();

const hideModal = () => {
  // @ts-ignore
  if (closeModal) closeModal(); // Ensure it's not undefined
};
async function emitClick() {
  await createLesson();
}
async function createLesson() {
  try {
    const data = await axiosInstance.post(
      `/instructor/courses/${course_id}/chapters`,
      {
        title: title.value,
        course_id: course_id,
      }
    );
    // chapter_store.setLessonWasCreated(true);
    useSweetAlert("success", "Success", data.data.message);
    hideModal();
  } catch (error: unknown) {
    handleAxiosError(error, errors);
  }
}
</script>

<template>
  <div class="chapter">
    <div class="row">
      <div class="col-md-6">
        <InputComponent
          label="Title"
          v-model:value="title"
          type="text"
          name="title"
          :errors="errors ? errors.title : []"
        />
      </div>
    </div>
    <div class="actions">
      <FormBtn @emit_click="emitClick">Create</FormBtn>
    </div>
  </div>
</template>
