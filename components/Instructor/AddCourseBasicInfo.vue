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

const errors = ref();

function videoStorageChange(value: string) {
  form.value.demo_video_storage = value;
}

function submitForm(){

}

onMounted(() => {
  form.value.demo_video_storage = demo_video_storage_options[0].key;
});
</script>

<template>
  <div class="add_course_basic_info">
    <form action="#">
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
    </form>
  </div>
</template>
