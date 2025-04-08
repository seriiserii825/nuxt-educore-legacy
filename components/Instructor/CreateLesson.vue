<script setup lang="ts">
import { inject } from "vue";
import type { TLessonType } from "~/types/TLessonType";
const closeModal = inject("closeModal");
const route = useRoute();
const course_id = route.params.course_id;
const form = ref({
  title: "",
  description: "",
  lesson_type: "lesson",
  storage: "",
  video_file: "",
  video_input: "",
  file_type: "",
  volume: "",
  duration: "",
  downloadable: "",
  order: "",
  is_preview: "",
  status: "",
});
const errors = ref();

const lesson_type_options = [
  { key: "lesson", value: "lesson" },
  { key: "live", value: "live" },
];

const storage_options = [
  { key: "upload", value: "Upload" },
  { key: "youtube", value: "Youtube" },
  { key: "vimeo", value: "Vimeo" },
  { key: "external_link", value: "External Link" },
];

const file_type_options = [
  { key: "video", value: "Video" },
  { key: "audio", value: "Audio" },
  { key: "text", value: "Text" },
  { key: "pdf", value: "PDF" },
];

const hideModal = () => {
  // @ts-ignore
  if (closeModal) closeModal(); // Ensure it's not undefined
};
async function emitClick() {
  await createLesson();
}
async function createLesson() {
  // try {
  //   const data = await axiosInstance.post(
  //     `/instructor/courses/${course_id}/chapters`,
  //     {
  //       title: title.value,
  //       course_id: course_id,
  //     }
  //   );
  //   // chapter_store.setLessonWasCreated(true);
  //   useSweetAlert("success", "Success", data.data.message);
  //   hideModal();
  // } catch (error: unknown) {
  //   handleAxiosError(error, errors);
  // }
}
</script>

<template>
  <div class="chapter">
    <div class="row">
      <div class="col-md-6">
        <InputComponent
          label="Title"
          v-model:value="form.title"
          type="text"
          name="title"
          :errors="errors ? errors.title : []"
        />
      </div>
      <div class="col-md-6">
        <FormTextarea
          label="Description"
          v-model:value="form.description"
          name="description"
          :errors="errors ? errors.description : []"
        />
      </div>
      <div class="col-md-6">
        <FormSelect
          label="Lesson Type"
          name="lesson_type"
          :options="lesson_type_options"
          :value="form.lesson_type"
          @emit_select="form.lesson_type = $event"
          :errors="errors ? errors.lesson_type : []"
        />
      </div>
      <div class="col-md-6">
        <FormSelect
          label="File Type"
          name="file_type"
          :options="file_type_options"
          :value="form.file_type"
          @emit_select="form.file_type = $event"
          :errors="errors ? errors.file_type : []"
        />
      </div>
      <div class="col-md-6">
        <FormSelect
          label="Storage"
          name="storage"
          :options="storage_options"
          :value="form.storage"
          @emit_select="form.storage = $event"
          :errors="errors ? errors.storage : []"
        />
      </div>
      <div class="col-md-6">
      </div>
    </div>
    <div class="actions">
      <FormBtn @emit_click="emitClick">Create</FormBtn>
    </div>
  </div>
</template>
