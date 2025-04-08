<script setup lang="ts"></script>

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
            <div class="mb-4" style="min-height: 70vh;">
              <FrontCoursesLoop />
            </div>
            <FrontCoursesPagination />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
