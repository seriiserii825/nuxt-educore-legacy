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
</script>

<template>
  <div class="card-body">
    <div class="row g-3">
      <div class="col-md">
        <InputComponent
          label="Site name"
          v-model:value="form.site_name"
          type="text"
          name="form.site_name"
          :errors="errors ? errors.site_name : []" />
      </div>
      <div class="col-md">
        <InputComponent
          label="Phone"
          v-model:value="form.phone"
          type="text"
          name="form.phone"
          :errors="errors ? errors.phone : []" />
      </div>
      <div class="col-md">
        <InputComponent
          label="Email"
          v-model:value="form.email"
          type="text"
          name="form.email"
          :errors="errors ? errors.email : []" />
      </div>
    </div>
  </div>
  <div class="card-footer bg-transparent mt-auto">
    <div class="btn-list justify-content-end">
      <a href="#" class="btn"> Cancel </a>
      <a href="#" class="btn btn-primary"> Submit </a>
    </div>
  </div>
</template>
