<script setup lang="ts">
import { InputComponent, UiLoading } from "#components";
import type { TSelectOption } from "~/types/TSelectOption";
import type { TUser } from "~/types/TUser";

const loading = ref(false);
const user = ref<TUser | null>(null);

const form = ref({
  name: "",
  email: "",
  headline: "",
  gender: "",
  bio: "",
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
async function onSubmit() {
  loading.value = true;
  if (!user.value) return;
  try {
    const response = await axiosInstance.put(
      "/profile/" + user.value.id,
      form.value
    );
    setTimeout(() => {
      loading.value = false;
      useSweetAlert("success", "Update", "Profile updated successfully");
      setTimeout(() => {
        const profile = document.querySelector("#js-profile");
        console.log("profile", profile);
        profile.scrollIntoView({ behavior: "smooth" });
      }, 1000);
    }, 10);
    console.log(response, "response");
  } catch (error) {
    console.log(error, "error");
    loading.value = false;
    errors.value = error.response.data.errors;
  }
}

onMounted(async () => {
  await useGetUserApi();
  user.value = useGetUser();
  if (!user.value) return;
  form.value.name = user.value.name;
  form.value.email = user.value.email;
  form.value.gender = user.value.gender;
  form.value.bio = user.value.bio;
  form.value.headline = user.value.headline;
  form.value.facebook = user.value.facebook;
  form.value.twitter = user.value.twitter;
  form.value.linkedin = user.value.linkedin;
  form.value.website = user.value.website;
  form.value.github = user.value.github;
});
</script>
<template>
  <div>
    <UiLoading v-if="loading" />
    <div v-else class="wsus__dashboard_contant" id="js-profile">
      <div
        class="flex-wrap wsus__dashboard_contant_top d-flex justify-content-between"
      >
        <div class="wsus__dashboard_heading">
          <h5>Update Your Information</h5>
          <p>
            Manage your courses and its update like live, draft and insight.
          </p>
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
      <div class="p-4">
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
          <div class="mb-4 col-xl-6">
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
        </div>
        <div class="row">
          <div class="col-xl-12">
            <UiCard title="Socials">
              <div class="wsus__dashboard_profile_update_info">
                <div class="row">
                  <div class="mb-3 col-xl-6">
                    <InputComponent
                      label="Facebook"
                      name="facebook"
                      v-model:value="form.facebook"
                      :errors="errors ? errors.facebook : []"
                    />
                  </div>
                  <div class="mb-3 col-xl-6">
                    <InputComponent
                      label="Twitter"
                      name="twitter"
                      v-model:value="form.twitter"
                      :errors="errors ? errors.twitter : []"
                    />
                  </div>
                  <div class="mb-3 col-xl-6">
                    <InputComponent
                      label="LinkedIn"
                      name="linkedin"
                      v-model:value="form.linkedin"
                      :errors="errors ? errors.linkedin : []"
                    />
                  </div>
                  <div class="mb-3 col-xl-6">
                    <InputComponent
                      label="Website"
                      name="website"
                      v-model:value="form.website"
                      :errors="errors ? errors.website : []"
                    />
                  </div>
                  <div class="mb-3 col-xl-12">
                    <InputComponent
                      label="Github"
                      name="github"
                      v-model:value="form.github"
                      :errors="errors ? errors.github : []"
                    />
                  </div>
                </div>
              </div>
            </UiCard>
          </div>
          <div class="mb-4 col-xl-12">
            <div class="wsus__dashboard_profile_update_btn">
              <button @click="onSubmit" type="button" class="common_btn">
                Update Profile
              </button>
            </div>
          </div>
        </div>
        <StudentUpdatePassword />
      </div>
    </div>
  </div>
</template>
