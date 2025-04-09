<script setup lang="ts">
import type { TCourse } from "~/types/TCourse";

const props = defineProps({
  courses: {
    type: Array as PropType<TCourse[]>,
    required: true,
  },
});
</script>

<template>
  <div class="row">
    <div
      v-for="course in courses"
      :key="course.id"
      class="col-xl-4 col-md-6 wow fadeInUp"
    >
      <div class="wsus__single_courses_3">
        <div class="wsus__single_courses_3_img">
          <img
            :src="course.thumbnail"
            alt="Courses"
            class="img-fluid"
          />
          <ul>
            <li>
              <a href="#">
                <img
                  src="/images/love_icon_black.png"
                  alt="Love"
                  class="img-fluid"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="/images/compare_icon_black.png"
                  alt="Compare"
                  class="img-fluid"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="/images/cart_icon_black_2.png"
                  alt="Cart"
                  class="img-fluid"
                />
              </a>
            </li>
          </ul>
          <span class="time"><i class="far fa-clock"></i> {{ course.duration }}</span>
        </div>
        <div class="wsus__single_courses_text_3">
          <div class="rating_area">
            <!-- <a href="#" class="category">Design</a> -->
            <p class="rating">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <span>(4.8 Rating)</span>
            </p>
          </div>
          <a class="title" href="#">{{ course.title }}</a>
          <ul>
            <li>24 Lessons</li>
            <li>38 Student</li>
          </ul>
          <a class="author" href="#">
            <div class="img">
              <img
                :src="course.instructor.image"
                alt="Author"
                class="img-fluid"
              />
            </div>
            <h4>{{ course.instructor.name }}</h4>
          </a>
        </div>
        <div class="wsus__single_courses_3_footer">
          <a class="common_btn" href="#"
            >Enroll <i class="far fa-arrow-right"></i
          ></a>
          <p><del v-if="course.discount">${{ course.discount }}</del> ${{course.price}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
