<script setup lang="ts">
import {PopupModal} from '#components';

definePageMeta({
  layout: "instructor",
  middleware: ["instructor"],
});
const user = useGetUser();
const route = useRoute();
const router = useRouter();

const course_id: number = parseInt(route.params.course_id as string);
const step: number = parseInt(route.params.step as string);

function setStep(step: number) {
  router.push(`/instructor/course/${course_id}/edit/${step}`);
}
</script>

<template>
  <div>
    <UiBreadcrumb image="/images/breadcrumb_bg.jpg" title="Student" />
    <section class="wsus__dashboard mt_90 xs_mt_70 pb_120 xs_pb_100">
      <div class="container">
        <div class="row">
          <div class="col-xl-3 col-md-4 wow fadeInLeft">
            <div class="wsus__dashboard_sidebar">
              <UiSidebarTop
                v-if="user"
                :image="user.image"
                :name="user.name"
                :role="user.role"
              />
              <NavInstructorSidebarMenu />
            </div>
          </div>
          <div class="pb-6 col-xl-9 col-md-8">
            <div class="wsus__dashboard_contant">
              <div class="wsus__dashboard_contant_top">
                <div class="relative wsus__dashboard_heading">
                  <h5>Add Courses</h5>
                  <p>
                    Manage your courses and its update like live, draft and
                    insight.
                  </p>
                </div>
              </div>
              <div class="dashboard_add_courses">
                <ul class="nav nav-pills" id="pills-tab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button @click="setStep(1)"  :class="{'active': step == 1}" class="nav-link">
                      Basic Infos
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button @click="setStep(2)" :class="{'active': step == 2}" class="nav-link">
                      More Infos
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button @click="setStep(3)" :class="{'active': step == 3}" class="nav-link">
                      Course Contents
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button @click="setStep(4)" :class="{'active': step == 4}" class="nav-link">
                      Finish
                    </button>
                  </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                  <div
                    class="tab-pane fade"
                    :class="{ 'show active': step === 1 }"
                    tabindex="0"
                  >
                    <InstructorAddCourseBasicInfo :update="true" />
                  </div>
                  <div
                    class="tab-pane fade"
                    :class="{ 'show active': step === 2 }"
                    tabindex="0"
                  >
                    <InstructorAddCourseMoreInfo :update="true" />
                  </div>
                  <div
                    class="tab-pane fade"
                    tabindex="0"
                    :class="{ 'show active': step === 3 }"
                  >
                    <InstructorAddCourseContent :update="true" />
                  </div>
                  <div
                    class="tab-pane fade"
                    tabindex="0"
                    :class="{ 'show active': step === 4 }"
                  >
                    <InstructorAddCourseFinish :update="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
