import { ref } from "vue";
import { defineStore } from "pinia";
export const useVideoStore = defineStore("video", () => {
  const video = ref("");
  function setVideo(v: string) {
    video.value = v;
  }
  const video_loading = ref(false);
  function setVideoLoading(v: boolean) {
    video_loading.value = v;
  }
  return {
    video,
    setVideo,
    video_loading,
    setVideoLoading
  };
});
