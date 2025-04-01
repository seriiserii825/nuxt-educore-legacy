<script setup lang="ts">
const props = defineProps({
  image: String,
  api_url: {
    type: String,
    required: true,
  },
});
const loading = ref(false);
const camera_img = "/images/dash_camera.png";
const runtimeConfig = useRuntimeConfig();

const current_image = ref(props.image);

function fileChange(event: any) {
  loading.value = true;
  const file = event.target.files[0];
  const formData = new FormData();
  formData.append("image", file);
  axiosInstance
    .post(props.api_url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      current_image.value = response.data.image;
      const user = useGetUser();
      if (user && current_image.value) {
        user.image = current_image.value;
        setTimeout(() => {
          useSweetAlert("success", "Update", "Profile updated successfully");
          loading.value = false;
        }, 2000);
      } else {
        useSweetAlert("error", "Update", "Profile updated failed");
        loading.value = false;
      }
    })
    .catch((error) => {
      console.log(error, "error");
      loading.value = false;
    });
}
</script>

<template>
  <div>
    <UiLoading v-if="loading" />
    <div v-else class="wsus__dashboard_profile wsus__dashboard_profile_avatar">
      <div class="img">
        <img
          :src="`${runtimeConfig.public.apiBase}/${current_image}`"
          alt="profile"
          class="img-fluid w-100"
        />
        <label for="profile_photo">
          <img :src="camera_img" alt="camera" class="img-fluid w-100" />
        </label>
        <input
          @change="fileChange($event)"
          type="file"
          id="profile_photo"
          hidden=""
        />
      </div>
      <div class="text">
        <h6>Your avatar</h6>
        <p>PNG or JPG no bigger than 400px wide and tall.</p>
      </div>
    </div>
  </div>
</template>
