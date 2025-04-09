<script setup lang="ts">
import type { TCourse } from "~/types/TCourse";
const route = useRoute();
const router = useRouter();
const course = ref<TCourse>();
const loading = ref<boolean>(false);
const slug = route.params.slug;

const current_tab = ref(0);

async function getCourse() {
  loading.value = true;
  try {
    const data = await axiosInstance.get(`/courses/${slug}`);
    course.value = data.data;
    loading.value = false;
  } catch (error) {
    handleAxiosError(error, {});
    console.log(error, "error");
    loading.value = false;
    router.push("/courses");
  }
}
onMounted(async () => {
  await getCourse();
});
</script>

<template>
  <div>
    <UiLoading v-if="loading" />
    <template v-else-if="course">
      <CourseBreadcrumb :course="course" />
      <section class="wsus__courses_details pb_120 xs_pb_100">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 wow fadeInLeft">
              <div class="wsus__courses_details_area mt_40">
                <ul class="nav nav-pills mb_40" id="pills-tab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      :class="{ active: current_tab === 0 }"
                      @click="current_tab = 0"
                    >
                      Overview
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      :class="{ active: current_tab === 1 }"
                      @click="current_tab = 1"
                    >
                      Instructor
                    </button>
                  </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                  <div
                    class="tab-pane fade"
                    :class="{ 'show active': current_tab === 0 }"
                  >
                    <CourseDescription :course="course" />
                  </div>
                  <div
                    class="tab-pane fade"
                    :class="{ 'show active': current_tab === 1 }"
                  >
                    <CourseInstructor :course="course" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-8 wow fadeInRight">
              <CourseSidebar />
            </div>
          </div>
        </div>
      </section>
    </template>
  </div>
</template>
