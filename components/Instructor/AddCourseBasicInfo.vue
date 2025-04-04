<script setup lang="ts">
import { demo_video_storage_options } from "../data/demo_video_storage_options";
const form = ref({
  title: "",
  seo_description: "",
  thumbnail: "",
  demo_video_storage: "",
  demo_video_source: "",
  price: 0,
  discount: 0,
});

const loading = ref(false);

const errors = ref();

function videoStorageChange(value: string) {
  form.value.demo_video_storage = value;
}

async function submitForm() {
  const formData = new FormData();
  formData.append("title", form.value.title);
  formData.append("seo_description", form.value.seo_description);
  formData.append("price", form.value.price);
  formData.append("discount", form.value.discount);

  if (form.value.demo_video_storage === "upload") {
    formData.append("thumbnail", form.value.thumbnail);
  } else {
    formData.append("demo_video_source", form.value.demo_video_source);
  }

  try {
    loading.value = true;
    await axiosInstance.post("/instructor/course", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    loading.value = false;
    useSweetAlert("success", "Success", "Course created successfully");
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

onMounted(() => {
  form.value.demo_video_storage = demo_video_storage_options[0].key;
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
          label="Thumbnail *"
          name="thumbnail"
          v-model:value="form.thumbnail"
          :errors="errors ? errors.thumbnail : []"
          @emit_file="form.thumbnail = $event"
        />
        <InputComponent
          v-else
          label="Video Source"
          v-model:value="form.demo_video_source"
          :errors="errors ? errors.demo_video_source : []"
        />
      </div>
      <div class="mb-3 col-xl-6">
        <InputComponent
          label="Price"
          v-model:value="form.price"
          :errors="errors ? errors.price : []"
        />
      </div>
      <div class="mb-3 col-xl-6">
        <InputComponent
          label="Discount"
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
