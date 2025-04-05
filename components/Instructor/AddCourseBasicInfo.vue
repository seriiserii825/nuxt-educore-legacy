<script setup lang="ts">
import { demo_video_storage_options } from "../data/demo_video_storage_options";
const props = defineProps({
  update: {
    type: Boolean,
    default: false,
  },
});
const router = useRouter();
const route = useRoute();
const form = ref({
  title: "",
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

async function getCourse(){
  const course_id = route.params.course_id;
  try {
    loading.value = true;
    const data = await axiosInstance.get(`/instructor/courses/${course_id}`);
    const course = data.data;
    form.value.title = course.title;
    form.value.seo_description = course.seo_description;
    form.value.thumbnail = course.thumbnail;
    form.value.demo_video_storage = course.demo_video_storage;
    form.value.video_file = course.demo_video_source;
    form.value.video_input = course.demo_video_source;
    form.value.price = course.price;
    form.value.discount = course.discount;
    loading.value = false;
  } catch (error: any) {
    console.log(error, "error");
  }
}

async function submitForm() {
  const formData = new FormData();
  formData.append("title", form.value.title);
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
    const data = await axiosInstance.post("/instructor/courses", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const course_id = data.data.id;
    loading.value = false;
    useSweetAlert("success", "Success", "Course created successfully");
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

onMounted(async() => {
  form.value.demo_video_storage = demo_video_storage_options[0].key;
  if (props.update) {
    await getCourse();
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
