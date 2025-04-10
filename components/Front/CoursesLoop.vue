<script setup lang="ts">
import type { TCourse } from "~/types/TCourse";

const props = defineProps({
  courses: {
    type: Array as PropType<TCourse[]>,
    required: true,
  },
});

async function addToCart(course: TCourse) {
  try {
    await axiosInstance.post("/cart", {
      course_id: course.id,
    });
    await useGetUserApi();
    useSweetAlert("success", "Course added to cart successfully", "ok");
  } catch (error: any) {
    handleAxiosError(error, {});
  }
}
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
          <img :src="course.thumbnail" alt="Courses" class="img-fluid" />
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
              <a @click.prevent="addToCart(course)" href="#">
                <img
                  src="/images/cart_icon_black_2.png"
                  alt="Cart"
                  class="img-fluid"
                />
              </a>
            </li>
          </ul>
          <span class="time"
            ><i class="far fa-clock"></i> {{ course.duration }}</span
          >
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
            <li v-if="course.lessons_count">
              {{ course.lessons_count }} Lessons
            </li>
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
          <nuxt-link class="common_btn" :to="`/courses/${course.slug}`">
            Enroll <i class="far fa-arrow-right"></i>
          </nuxt-link>
          <p v-if="course.price">
            <del v-if="course.discount">${{ course.discount }}</del> ${{
              course.price
            }}
          </p>
          <p v-else>FREE</p>
        </div>
      </div>
    </div>
  </div>
</template>
