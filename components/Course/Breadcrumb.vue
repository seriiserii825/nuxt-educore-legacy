<script setup lang="ts">
import type { TCourse } from "~/types/TCourse";

const props = defineProps({
  course: {
    type: Object as PropType<TCourse>,
    required: true,
  },
});
</script>

<template>
  <section
    class="wsus__breadcrumb course_details_breadcrumb"
    style="background: url(/images/breadcrumb_bg.jpg)"
  >
    <div class="wsus__breadcrumb_overlay">
      <div class="container">
        <div class="row">
          <div class="col-12 wow fadeInUp">
            <div class="wsus__breadcrumb_text">
              <p class="rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <span>(4 Reviews)</span>
              </p>
              <h1>{{ course.title }}</h1>
              <ul class="list">
                <li>
                  <span
                    ><img
                      src="/images/user_icon_blue.png"
                      alt="user"
                      class="img-fluid"
                  /></span>
                  By {{ course.instructor.name }}
                </li>
                <li v-if="course.category">
                  <span><img 
                    :src="`/images/globe_icon_blue.png`"
                    alt="Globe" class="img-fluid"/></span>
                  {{ course.category.name }}
                </li>
                <li>
                  <span
                    ><img
                      src="/images/calendar_blue.png"
                      alt="Calendar"
                      class="img-fluid"
                  /></span>
                  Last updated {{ useFormatDate(course.updated_at) }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
