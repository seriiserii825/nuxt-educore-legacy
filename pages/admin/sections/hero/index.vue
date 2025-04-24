<script setup lang="ts">
import type { THero } from "~/types/THero";
definePageMeta({
  layout: "admin",
  middleware: ["admin"],
});
const loading = ref(true);
const method = ref("POST");
const hero = ref<THero>();
const form = ref({
  id: 0,
  label: "",
  title: "",
  description: "",
  video_text: "",
  video_url: "",
  button_text: "",
  banner_title: "",
  banner_text: "",
  round_text: "",
  image: "",
});
const errors = ref();
async function getHero() {
  loading.value = true;
  try {
    const data = await axiosInstance.get("/admin/sections/hero");
    hero.value = data.data;
    if (hero.value && hero.value.id) {
      form.value.id = hero.value.id;
      form.value.label = hero.value.label;
      form.value.title = hero.value.title;
      form.value.description = hero.value.description;
      form.value.video_text = hero.value.video_text;
      form.value.video_url = hero.value.video_url;
      form.value.button_text = hero.value.button_text;
      form.value.banner_title = hero.value.banner_title;
      form.value.banner_text = hero.value.banner_text;
      form.value.round_text = hero.value.round_text;
      form.value.image = hero.value.image;
      method.value = "PUT";
    }
    loading.value = false;
  } catch (error) {
    handleAxiosError(error);
    loading.value = false;
  }
}
async function onSubmit() {
  const formData = new FormData();
  // make loop throw form and appedn to formData
  for (const key in form.value) {
    if (form.value[key] !== "") {
      formData.append(key, form.value[key]);
    }
  }
  console.log(method.value, "method.value");
  if (method.value === "PUT") {
    await updateHero(formData);
  } else {
    await createHero(formData);
  }
}

async function createHero(formData: FormData) {
  try {
    await axiosInstance.post("/admin/sections/hero", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    useSweetAlert("success", "Hero Created Successfully");
    await getHero();
  } catch (error) {
    handleAxiosError(error);
    errors.value = error.response.data.errors;
  }
}

async function updateHero(formData: FormData) {
  try {
    await axiosInstance.post(`/admin/sections/hero/update/${form.value.id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    useSweetAlert("success", "Hero Updated Successfully");
    await getHero();
  } catch (error) {
    handleAxiosError(error);
    errors.value = error.response.data.errors;
  }
}

onMounted(async () => {
  await getHero();
});
</script>
<template>
  <div class="page-body">
    <div class="container-xl">
      <UiLoading v-if="loading" />
      <div v-else class="admin-index">
        <UiCard title="Hero">
          <div class="row">
            <div class="col-md-4">
              <InputComponent
                label="Label"
                v-model:value="form.label"
                type="text"
                name="label"
                :errors="errors ? errors.label : []"
              />
            </div>
            <div class="col-md-4">
              <InputComponent
                label="Title"
                v-model:value="form.title"
                type="text"
                name="title"
                :errors="errors ? errors.title : []"
              />
            </div>
            <div class="col-md-4">
              <FormTextarea
                label="Description"
                v-model:value="form.description"
                name="description"
                :errors="errors ? errors.description : []"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <InputComponent
                label="Video Text"
                v-model:value="form.video_text"
                type="text"
                name="video_text"
                :errors="errors ? errors.video_text : []"
              />
            </div>
            <div class="col-md-4">
              <InputComponent
                label="Video Url"
                v-model:value="form.video_url"
                type="text"
                name="video_url"
                :errors="errors ? errors.video_url : []"
              />
            </div>
            <div class="col-md-4">
              <InputComponent
                label="Button Text"
                v-model:value="form.button_text"
                type="text"
                name="button_text"
                :errors="errors ? errors.button_text : []"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <InputComponent
                label="Banner title"
                v-model:value="form.banner_title"
                type="text"
                name="banner_title"
                :errors="errors ? errors.banner_title : []"
              />
            </div>
            <div class="col-md-4">
              <InputComponent
                label="Banner Text"
                v-model:value="form.banner_text"
                type="text"
                name="banner_text"
                :errors="errors ? errors.banner_text : []"
              />
            </div>
            <div class="col-md-4">
              <InputComponent
                label="Round Text"
                v-model:value="form.round_text"
                type="text"
                name="round_text"
                :errors="errors ? errors.round_text : []"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <FormFileUpload
                label="Image"
                name="image"
                accept="image/*"
                :errors="errors ? errors.image : []"
                @emit_file="form.image = $event"
                :image="form.image"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <FormBtn @emit_click="onSubmit">Upload</FormBtn>
            </div>
          </div>
        </UiCard>
      </div>
    </div>
  </div>
</template>
