<script setup lang="ts">
definePageMeta({
  layout: "admin",
  middleware: ["admin"],
});

const router = useRouter();
const route = useRoute();

const form = ref({
  name: "",
});

const errors = ref();

async function getLanguage() {
  try {
    const data = await axiosInstance.get(`/admin/courses/levels/${route.params.id}`);
    form.value.name = data.data.name;
  } catch (error) {
    useSweetAlert("error", "Error", "Something went wrong");
  }
}

async function submitForm() {
  const formData = new FormData();
  formData.append("name", form.value.name);
  formData.append("_method", "PUT"); // Laravel will interpret this as a PUT request

  try {
    const url = `/admin/courses/levels/${route.params.id}`;
    await axiosInstance.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    useSweetAlert("success", "Success", "Language updated successfully");
    router.push("/admin/courses/levels");
  } catch (error) {
    errors.value = error.response.data.errors;
    for (const key in errors.value) {
      useSweetAlert("error", "Error", errors.value[key][0]);
    }
  }
}

onMounted(() => {
  getLanguage();
});
</script>

<template>
  <div class="page-body">
    <div class="container-xl">
      <UiCard
        title="Edit Language"
        link_text="back"
        link_url="/admin/courses/levels"
      >
        <div class="col-xl-6 mb-3">
          <div class="wsus__login_form_input">
            <InputComponent
              label="Name"
              placeholder="name"
              name="name"
              v-model:value="form.name"
              :errors="errors ? errors.name : []"
            />
          </div>
        </div>
        <div class="col-xl-12">
          <button @click="submitForm" class="btn btn-primary">Update</button>
        </div>
      </UiCard>
    </div>
  </div>
</template>
