<script setup lang="ts">
import {useUserStore} from '~/store/useUserStore';

const user_store = useUserStore();
const {user} = storeToRefs(user_store);
const form = ref({
  current_password: "",
  password: "",
  password_confirmation: "",
});
const errors = ref();

async function onSubmit() {
  if (!user.value) return;
  try {
    await axiosInstance.put(
      "/profile/" + user.value.id + "/update-password",
      form.value
    );
    form.value.current_password = "";
    form.value.password = "";
    form.value.password_confirmation = "";
    useSweetAlert("success", "Update", "Password updated successfully");
  } catch (error: any) {
    console.log(error, "error");
    errors.value = error.response.data.errors;
  }
}
</script>

<template>
  <UiCard title="Update Password">
    <div class="row">
      <div class="mb-3 col-xl-4">
        <InputComponent
          label="Current Password"
          name="current_password"
          v-model:value="form.current_password"
          type="password"
          :errors="errors ? errors.current_password : []"
        />
      </div>
      <div class="mb-3 col-xl-4">
        <InputComponent
          label="Password"
          name="password"
          type="password"
          v-model:value="form.password"
          :errors="errors ? errors.password : []"
        />
      </div>
      <div class="mb-3 col-xl-4">
        <InputComponent
          label="Confirm Password"
          name="password_confirmation"
          type="password"
          v-model:value="form.password_confirmation"
        />
      </div>
      <div class="mb-4 col-xl-12">
        <div class="wsus__dashboard_profile_update_btn">
          <button @click="onSubmit" type="button" class="common_btn">
            Update Password
          </button>
        </div>
      </div>
    </div>
  </UiCard>
</template>
