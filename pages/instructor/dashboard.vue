<script setup lang="ts">
import { InstructorAddCoursePanel } from "#components";

definePageMeta({
  layout: "instructor",
  middleware: ["instructor"],
});
const user = useGetUser();
</script>
<template>
  <div>
    <UiBreadcrumb image="/images/breadcrumb_bg.jpg" title="Instructor Dashboard" />
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
              <InstructorAddCoursePanel />
              <InstructorFilterCourses />
              <InstructorCoursesTable />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
