<script setup lang="ts">
import type { TCourse } from "~/types/TCourse";
import { demo_video_storage_options } from "../data/demo_video_storage_options";
import { ref } from "vue";
const props = defineProps({
  update: {
    type: Boolean,
    default: false,
  },
  course: {
    type: Object as PropType<TCourse>,
    required: false,
  },
});
const router = useRouter();
const route = useRoute();
const form = ref({
  title: "",
  description: "",
  seo_description: "",
  thumbnail: "",
  demo_video_storage: "",
  video_file: "",
  video_input: "",
  price: 0,
  discount: 0,
});

const loading = ref(false);

const errors = ref();

function videoStorageChange(value: string) {
  form.value.demo_video_storage = value;
}

async function setCourse() {
  if (!props.course) return;
  form.value.title = props.course.title;
  console.log(props.course.description, "props.course.description");
  form.value.description = props.course.description;
  form.value.seo_description = props.course.seo_description;
  form.value.thumbnail = props.course.thumbnail;
  form.value.demo_video_storage = props.course.demo_video_storage;
  form.value.video_file = props.course.demo_video_source;
  form.value.video_input = props.course.demo_video_source;
  form.value.price = props.course.price;
  form.value.discount = props.course.discount;
  loading.value = false;
}

async function submitForm() {
  const formData = new FormData();
  formData.append("title", form.value.title);
  formData.append("description", form.value.description);
  formData.append("seo_description", form.value.seo_description);
  formData.append("price", form.value.price);
  formData.append("discount", form.value.discount);
  formData.append("demo_video_storage", form.value.demo_video_storage);
  formData.append("thumbnail", form.value.thumbnail);

  if (form.value.demo_video_storage === "upload") {
    formData.append("video_file", form.value.video_file);
  } else {
    formData.append("video_input", form.value.video_input);
  }

  try {
    loading.value = true;
    const url = props.update
      ? `/instructor/courses/${route.params.course_id}`
      : "/instructor/courses";
    const data = await axiosInstance.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const course_id = data.data.id;
    loading.value = false;
    useSweetAlert("success", "Success", "Course updated successfully");
    router.push(`/instructor/course/${course_id}/edit/2`);
  } catch (error: any) {
    console.log(error, "error");
    errors.value = error.response.data.errors;
    if (error.response.data.erors && error.response.data.erors.length > 0) {
      for (const key in errors.value) {
        useSweetAlert("error", "Error", errors.value[key][0]);
      }
    } else {
      useSweetAlert("error", "Error", error.response.data.message);
    }
  }
}

onMounted(async () => {
  form.value.demo_video_storage = demo_video_storage_options[0].key;
  if (props.update && props.course) {
    setCourse();
  }
});
</script>

<template>
  <div class="add_course_basic_info">
    <div class="row">
      <div class="mb-3 col-xl-6">
        <InputComponent
          label="Title *"
          v-model:value="form.title"
          :errors="errors ? errors.title : []"
        />
      </div>
      <div class="mb-3 col-xl-6">
        <FormTextarea
          label="SEO Description *"
          v-model:value="form.seo_description"
          :errors="errors ? errors.seo_description : []"
        />
      </div>
      <div class="mb-3 col-xl-12">
        <WysiwygEditor
          label="Description *"
          :value="form.description"
          @emit_value="form.description = $event"
          :errors="errors ? errors.description : []"
        />
      </div>
      <div class="mb-3 col-xl-6">
        <FormSelect
          label="Storage"
          name="demo_video_storage"
          :options="demo_video_storage_options"
          :value="form.demo_video_storage"
          @emit_select="videoStorageChange($event)"
          :errors="errors ? errors.gender : []"
        />
      </div>
      <div class="mb-3 col-xl-6">
        <FormFileUpload
          v-if="form.demo_video_storage === 'upload'"
          label="Video File *"
          name="video_file"
          accept="image/*"
          v-model:value="form.video_file"
          :errors="errors ? errors.video_file : []"
          @emit_file="form.video_file = $event"
        />
        <InputComponent
          v-else
          label="Video Source"
          type="url"
          v-model:value="form.video_input"
          :errors="errors ? errors.video_input : []"
        />
      </div>
      <div class="mb-3 col-xl-4">
        <FormFileUpload
          label="Thumbnail *"
          name="thumbnail"
          v-model:value="form.thumbnail"
          :errors="errors ? errors.thumbnail : []"
          @emit_file="form.thumbnail = $event"
        />
      </div>
      <div class="mb-3 col-xl-4">
        <InputComponent
          label="Price"
          v-model:value="form.price"
          type="number"
          :errors="errors ? errors.price : []"
        />
      </div>
      <div class="mb-3 col-xl-4">
        <InputComponent
          label="Discount"
          type="number"
          v-model:value="form.discount"
          :errors="errors ? errors.discount : []"
        />
      </div>
      <div class="col-xl-12">
        <button @click="submitForm" class="btn btn-primary">Create</button>
      </div>
    </div>
  </div>
</template>
