<script setup lang="ts">
import { UiLoading } from "#components";
import type { TCourse } from "~/types/TCourse";

definePageMeta({
  layout: "student",
  middleware: ["student"],
});

const route = useRoute();
const router = useRouter();
const loading = ref(false);
const course = ref<TCourse>();

async function getCourse() {
  loading.value = true;
  try {
    const data = await axiosInstance.get(`/student/course/${route.params.slug}`);
    course.value = data.data;
    setTimeout(() => {
      loading.value = false;
    }, 1000);
  } catch (error) {
    handleAxiosError(error);
    router.push("/student/dashboard");
    loading.value = false;
  }
}

onMounted(() => {
  getCourse();
});
</script>
<template>
  <div class="layout pt-8">
    <UiLoading v-if="loading" />
    <section v-else class="wsus__course_video">
      <div class="col-12">
        <div class="wsus__course_header">
          <p><i class="fas fa-angle-left"></i> {{ course?.title }}</p>
          <p>Your Progress: 20 of 15 (75%)</p>
        </div>
      </div>
      <div class="d-flex">
        <div class="wsus__course_video_player">
          <div class="video-youtube">
            <div class="thumb-wrap">
              <iframe
                src="https://www.youtube.com/embed/2Vv-BfVoq4g"
                width="100%"
                title="YouTube video player"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <StudentVideoTabs />
        </div>
        <div class="wsus__course_sidebar d-none d-lg-block">
          <StudentVideoSidebar v-if="course && course.chapters" :chapters="course.chapters" />
          <p v-else> No data available</p>
        </div>
      </div>
    </section>
  </div>
</template>
<style>
.thumb-wrap {
  position: relative;
  padding-bottom: 56.25%; /* задаёт высоту контейнера для 16:9 (если 4:3 — поставьте 75%) */
  height: 0;
  overflow: hidden;
}
.thumb-wrap iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-width: 0;
  outline-width: 0;
}
</style>
