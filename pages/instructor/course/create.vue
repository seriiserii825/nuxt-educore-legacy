<script setup lang="ts">
definePageMeta({
  layout: "instructor",
  middleware: ["instructor"],
});
const user = useGetUser();

const current_tab = ref(0);
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
                    <button @click="current_tab = 0"  :class="{'active': current_tab == 0}" class="nav-link">
                      Basic Infos
                    </button>
                  </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                  <div
                    class="tab-pane fade"
                    :class="{ 'show active': current_tab === 0 }"
                    tabindex="0"
                  >
                    <InstructorAddCourseBasicInfo />
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
