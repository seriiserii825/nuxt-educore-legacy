<script setup lang="ts">
const form = ref({
  site_name: "",
  phone: "",
  email: "",
  address: "",
});
const errors = ref({
  site_name: [],
  phone: [],
  email: [],
  address: [],
});

const loading = ref(false);

async function getSettings(){
  loading.value = true;
  try {
    const response = await axiosInstance.get("/admin/settings");
    form.value = response.data;
    setTimeout(() => {
      loading.value = false;
    }, 1000);
  } catch (error) {
    handleAxiosError(error, errors);
    loading.value = false;
  }
}

async function onSubmit() {
  try {
    await axiosInstance.post("/admin/settings", form.value);
    useSweetAlert("success", "Success", "Settings updated successfully");
  } catch (error) {
    handleAxiosError(error, errors);
  }
}

onMounted(() => {
  getSettings();
});
</script>

<template>
  <div class="card-body">
    <UiLoading v-if="loading" />
    <div v-else class="row g-3">
      <div class="col-md-6">
        <InputComponent
          label="Site name"
          v-model:value="form.site_name"
          type="text"
          name="form.site_name"
          :errors="errors ? errors.site_name : []" />
      </div>
      <div class="col-md-6">
        <InputComponent
          label="Phone"
          v-model:value="form.phone"
          type="text"
          name="form.phone"
          :errors="errors ? errors.phone : []" />
      </div>
      <div class="col-md-6">
        <InputComponent
          label="Email"
          v-model:value="form.email"
          type="email"
          name="form.email"
          :errors="errors ? errors.email : []" />
      </div>
      <div class="col-md-6">
        <InputComponent
          label="Address"
          v-model:value="form.address"
          type="text"
          name="form.address"
          :errors="errors ? errors.address : []" />
      </div>
    </div>
  </div>
  <div class="card-footer bg-transparent mt-auto">
    <div class="btn-list justify-content-end">
      <FormBtn @emit_click="onSubmit">Submit</FormBtn>
    </div>
  </div>
</template>
