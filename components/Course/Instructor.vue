<script setup lang="ts"></script>

<template>
  <div class="wsus__courses_instructor box_area">
    <h3>Instructor Details</h3>
    <div class="row align-items-center">
      <div class="col-lg-4 col-md-6">
        <div class="wsus__courses_instructor_img">
          <img
            :src="`/images/course_instructor_img.jpg`"
            alt="Instructor"
            class="img-fluid"
          />
        </div>
      </div>
      <div class="col-lg-8 col-md-6">
        <div class="wsus__courses_instructor_text">
          <h4>Ravi O'Leigh</h4>
          <p class="designation">IT Technician at IBM</p>
          <ul class="list">
            <li>
              <i class="fas fa-star"></i>
              <b>74,537 Reviews</b>
            </li>
            <li><strong>4.7 Rating</strong></li>
            <li>
              <span
                ><img
                  :src="`/images/book_icon.png`"
                  alt="book"
                  class="img-fluid"
              /></span>
              8 Courses
            </li>
            <li>
              <span
                ><img
                  :src="`/images/user_icon_gray.png`"
                  alt="user"
                  class="img-fluid"
              /></span>
              32 Students
            </li>
          </ul>
          <ul class="badge d-flex flex-wrap">
            <li
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-title="Exclusive Author"
            >
              <img :src="`/images/badge_1.png`" alt="Badge" class="img-fluid" />
            </li>
            <li
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-title="Top Earning"
            >
              <img :src="`/images/badge_2.png`" alt="Badge" class="img-fluid" />
            </li>
            <li
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-title="Trending"
            >
              <img :src="`/images/badge_3.png`" alt="Badge" class="img-fluid" />
            </li>
            <li
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-title="2 Years of Membership"
            >
              <img :src="`/images/badge_4.png`" alt="Badge" class="img-fluid" />
            </li>
            <li
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-title="Collector Lavel 1"
            >
              <img :src="`/images/badge_5.png`" alt="Badge" class="img-fluid" />
            </li>
          </ul>
          <p class="description">
            Sed mi leo placerat nulla Donec pharetra rutrum ullamcorpe Ut eget
            convallis mi. Sed cursus aliquam Nula sed allium lectus fermentum
            enim Nam maximus pretium consectetu lacinia finibus.
          </p>
          <ul class="link d-flex flex-wrap">
            <li>
              <a href="#"><i class="fab fa-twitter"></i></a>
            </li>
            <li>
              <a href="#"><i class="fab fa-facebook-f"></i></a>
            </li>
            <li>
              <a href="#"><i class="fab fa-linkedin-in"></i></a>
            </li>
            <li>
              <a href="#"><i class="fab fa-pinterest-p"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
