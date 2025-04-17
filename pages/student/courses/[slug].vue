<script setup lang="ts">
import { UiLoading } from "#components";
import { useVideoStore } from "~/store/useVideoStore";
import type { TCourse } from "~/types/TCourse";

definePageMeta({
  layout: "student",
  middleware: ["student"],
});

const video_storage = useVideoStore();
const { video, video_loading } = storeToRefs(video_storage);

const route = useRoute();
const router = useRouter();
const loading = ref(false);
const course = ref<TCourse>();

async function getCourse() {
  loading.value = true;
  video_storage.setVideoLoading(true);
  try {
    const data = await axiosInstance.get(`/student/course/${route.params.slug}`);
    course.value = data.data;
    if (course.value?.lessons && course.value?.lessons.length > 0) {
      let video_path = useVideoToIframe(course.value.lessons[0].file_path);
      video_storage.setVideo(video_path);

      setTimeout(() => {
        video_storage.setVideoLoading(false);
      }, 1000);
    } else {
      useSweetAlert("error", "No video found");
      video_storage.setVideoLoading(false);
    }
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
          <div style="min-height: 500px">
            <UiLoading v-if="video_loading" />
            <div class="video-youtube" v-else-if="video">
              <div class="thumb-wrap">
                <iframe
                  :src="video"
                  width="100%"
                  title="YouTube video player"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <h3 v-else>No video found</h3>
          </div>
          <StudentVideoTabs />
        </div>
        <div class="wsus__course_sidebar d-none d-lg-block">
          <StudentVideoSidebar
            v-if="course && course.chapters"
            :chapters="course.chapters"
            :course_id="course.id"
          />
          <p v-else>No data available</p>
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
