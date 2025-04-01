<script setup lang="ts">
import { InputComponent } from "#components";
import type { TSelectOption } from "~/types/TSelectOption";

const form = ref({
  name: "",
  email: "",
  headline: "",
  gender: "",
  facebook: "",
  twitter: "",
  linkedin: "",
  website: "",
  github: "",
});

const gender_options: TSelectOption[] = [
  { key: "male", value: "Male" },
  { key: "female", value: "Female" },
];

const gender = ref(gender_options[0].key);

function onChange(value: string) {
  gender.value = value;
}

const errors = ref();
</script>
<template>
  <div class="wsus__dashboard_contant">
    <div
      class="flex-wrap wsus__dashboard_contant_top d-flex justify-content-between"
    >
      <div class="wsus__dashboard_heading">
        <h5>Update Your Information</h5>
        <p>Manage your courses and its update like live, draft and insight.</p>
      </div>
      <div class="wsus__dashboard_profile_delete">
        <a href="#" class="common_btn">Delete Profile</a>
      </div>
    </div>
    <div class="wsus__dashboard_profile wsus__dashboard_profile_avatar">
      <div class="img">
        <img
          src="/images/dashboard_profile_img.png"
          alt="profile"
          class="img-fluid w-100"
        />
        <label for="profile_photo">
          <img
            src="/images/dash_camera.png"
            alt="camera"
            class="img-fluid w-100"
          />
        </label>
        <input type="file" id="profile_photo" hidden="" />
      </div>
      <div class="text">
        <h6>Your avatar</h6>
        <p>PNG or JPG no bigger than 400px wide and tall.</p>
      </div>
    </div>
    <form action="#" class="wsus__dashboard_profile_update">
      <div class="row">
        <div class="col-xl-6">
          <div class="wsus__dashboard_profile_update_info">
            <InputComponent
              label="Full name"
              placeholder="Enter your full name"
              name="name"
              v-model:value="form.name"
              :errors="errors ? errors.email : []"
            />
          </div>
        </div>
        <div class="col-xl-6">
          <div class="wsus__dashboard_profile_update_info">
            <InputComponent
              label="Email"
              placeholder="Enter your email"
              name="email"
              type="email"
              v-model:value="form.email"
              :errors="errors ? errors.email : []"
            />
          </div>
        </div>
        <div class="col-xl-6">
          <div class="wsus__dashboard_profile_update_info">
            <InputComponent
              label="Headline"
              placeholder="Enter your headline"
              name="headline"
              v-model:value="form.headline"
              :errors="errors ? errors.headline : []"
            />
          </div>
        </div>
        <div class="col-xl-6">
          <div class="wsus__dashboard_profile_update_info">
            <FormSelect
              label="Gender"
              name="gender"
              :options="gender_options"
              :value="gender"
              @emit_select="onChange($event)"
            />
          </div>
        </div>
        <div class="col-xl-12">
          <div class="wsus__dashboard_profile_update_btn">
            <button type="submit" class="common_btn">Update Profile</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
