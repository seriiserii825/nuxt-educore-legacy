<script setup lang="ts">
import { UiLoading } from "#components";
import type { TCourse } from "~/types/TCourse";

const courses = ref<TCourse[]>([]);
const loading = ref(false);

async function getCourses() {
  loading.value = true;
  try {
    const data = await axiosInstance.get("/courses");
    courses.value = data.data.data;
    setTimeout(() => {
      loading.value = false;
    }, 1000);
  } catch (error) {
    handleAxiosError(error, {});
    loading.value = false;
  }
}

onMounted(() => {
  getCourses();
});
</script>

<template>
  <div class="courses">
    <UiBreadcrumb image="/images/breadcrumb_bg.jpg" title="Courses" />
    <section class="wsus__courses mt_120 xs_mt_100 pb_120 xs_pb_100 mt-4">
      <div class="container">
        <div class="row">
          <div
            class="col-xl-3 col-lg-4 col-md-8 order-2 order-lg-1 wow fadeInLeft"
          >
            <FrontCoursesSidebar />
          </div>
          <div class="col-xl-9 col-lg-8 order-lg-1">
            <FrontCourseSort />
            <UiLoading v-if="loading" />
            <div v-else-if="courses && courses.length">
              <div class="mb-4" style="min-height: 70vh">
                <FrontCoursesLoop :courses="courses" />
              </div>
              <FrontCoursesPagination />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
