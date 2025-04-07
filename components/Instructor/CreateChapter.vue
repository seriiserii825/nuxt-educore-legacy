<script setup lang="ts">
import axios from "axios";
import { inject } from "vue";
const closeModal = inject("closeModal");
const route = useRoute();
const course_id = route.params.course_id;
const title = ref<string>("");
const errors = ref();

const hideModal = () => {
  if (closeModal) closeModal(); // Ensure it's not undefined
};
async function emitClick() {
  console.log("Chapter Created");
  await createChapter();
}
async function createChapter() {
  try {
    const data = await axiosInstance.post(
      `/instructor/course/${course_id}/chapters`,
      {
        title: title.value,
        course_id: course_id,
      }
    );
    useSweetAlert("success", "Success", data.data.message);
    hideModal();
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const { response } = error;
      if (response) {
        const { status, data } = response;
        if (status === 422) {
          errors.value = data.errors;
          for (const key in errors.value) {
            if (errors.value[key].length > 0) {
              useSweetAlert("error", "Error", errors.value[key][0]);
              break;
            }
          }
        } else {
          useSweetAlert(
            "error",
            "Error",
            data.message || "Something went wrong"
          );
        }
      } else {
        useSweetAlert("error", "Error", "No response from server.");
      }
    } else if (error instanceof Error) {
      useSweetAlert("error", "Error", error.message);
    } else {
      useSweetAlert("error", "Error", "An unknown error occurred.");
    }
  }
}
</script>

<template>
  <div class="chapter">
    <InputComponent
      label="Chapter Name"
      v-model:value="title"
      type="text"
      name="title"
      :errors="errors ? errors.title : []"
    />
    <div class="actions">
      <FormBtn @emit_click="emitClick">Create</FormBtn>
    </div>
  </div>
</template>
