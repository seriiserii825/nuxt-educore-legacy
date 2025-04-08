<script setup lang="ts">
import { inject } from "vue";
import {useCourseChaptersStore} from "~/store/useCourseChaptersStore";
import type {TLesson} from "~/types/TLesson";
const props = defineProps({
  lesson: {
    type: Object as PropType<TLesson>,
    required: true,
  },
  chapter_id: {
    type: Number,
    required: true,
  },
});
const chapter_store = useCourseChaptersStore();
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
  downloadable: 0,
  is_preview: 0,
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
  await editLesson();
}
async function editLesson() {
  const formData = new FormData();
  formData.append("title", form.value.title);
  formData.append("description", form.value.description);
  formData.append("lesson_type", form.value.lesson_type);
  formData.append("storage", form.value.storage);
  formData.append("video_file", form.value.video_file);
  formData.append("video_input", form.value.video_input);
  formData.append("file_type", form.value.file_type);
  formData.append("volume", form.value.volume);
  formData.append("duration", form.value.duration);
  formData.append("downloadable", form.value.downloadable ? 1 : 0);
  formData.append("is_preview", form.value.is_preview ? 1 : 0);
  formData.append("_method", "PUT");
  try {
    const data = await axiosInstance.post(
      `/instructor/courses/${course_id}/chapters/${props.chapter_id}/lessons/${props.lesson.id}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
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
  if (props.lesson) {
    form.value.title = props.lesson.title;
    form.value.description = props.lesson.description;
    form.value.lesson_type = props.lesson.lesson_type;
    form.value.storage = props.lesson.storage;
    form.value.video_file = props.lesson.file_path;
    form.value.video_input = props.lesson.file_path;
    form.value.file_type = props.lesson.file_type;
    form.value.volume = props.lesson.volume;
    form.value.duration = props.lesson.duration;
    form.value.downloadable = props.lesson.downloadable;
    form.value.is_preview = props.lesson.is_preview;
  }
});
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
        <span class="text-danger" v-if="form.storage == 'upload'">If already have uploaded file change Storage</span>
        <FormFileUpload
          v-if="form.storage === 'upload'"
          label="Video File"
          name="video_file"
          accept="video/*"
          v-model:value="form.video_file"
          :errors="errors ? errors.video_file : []"
          @emit_file="form.video_file = $event"
        />
        <InputComponent
          v-else
          label="Video Input"
          v-model:value="form.video_input"
          type="url"
          name="video_input"
          :errors="errors ? errors.video_input : []"
        />
      </div>
      <div class="col-md-6">
        <InputComponent
          label="Volume"
          v-model:value="form.volume"
          type="number"
          name="volume"
          :errors="errors ? errors.volume : []"
        />
      </div>
      <div class="col-md-6">
        <InputComponent
          label="Duration"
          v-model:value="form.duration"
          type="number"
          name="duration"
          :errors="errors ? errors.duration : []"
        />
      </div>
      <div class="col-md-6">
        <FormSwitch
          label="Downloadable"
          name="downloadable"
          :checked="Boolean(form.downloadable)"
          :errors="errors ? errors.downloadable : []"
          @emit_checked="form.downloadable = $event"
        />
      </div>
      <div class="col-md-6">
        <FormSwitch
          label="Is Preview"
          name="is_preview"
          :checked="Boolean(form.is_preview)"
          :errors="errors ? errors.is_preview : []"
          @emit_checked="form.is_preview = $event"
        />
      </div>
    </div>
    <div class="actions">
      <FormBtn @emit_click="emitClick">Update</FormBtn>
    </div>
  </div>
</template>
