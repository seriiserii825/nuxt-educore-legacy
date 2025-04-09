<script setup lang="ts">
import type { PropType } from "vue";
import type { TCourse } from "~/types/TCourse";

const props = defineProps({
  course: {
    type: Object as PropType<TCourse>,
    required: true,
  },
});
</script>

<template>
  <div class="wsus__courses_sidebar">
    <div class="wsus__courses_sidebar_video">
      <img :src="course.thumbnail" alt="Video" class="img-fluid" />
      <a
        v-if="course.demo_video_source"
        class="play_btn venobox vbox-item"
        data-autoplay="true"
        data-vbtype="video"
        target="_blank"
        :href="course.demo_video_source"
      >
        <img
          :src="`/images/play_icon_white.png`"
          alt="Play"
          class="img-fluid"
        />
      </a>
    </div>
    <h3 class="wsus__courses_sidebar_price">
      <del v-if="course.discount">${{ course.discount }}</del>
      <span v-if="course.price"> ${{ course.price }} </span>
      <span v-else class="text-success p-2">
        <UiBadge type="success" text="Free" />
      </span>
    </h3>
    <div class="wsus__courses_sidebar_list_info">
      <ul>
        <li v-if="course.duration">
          <p>
            <span
              ><img
                :src="`/images/clock_icon_black.png`"
                alt="clock"
                class="img-fluid"
            /></span>
            Course Duration
          </p>
          {{ useMinuteToTime(course.duration) }}
        </li>
        <li v-if="course.level">
          <p>
            <span
              ><img
                :src="`/images/network_icon_black.png`"
                alt="network"
                class="img-fluid"
            /></span>
            Skill Level
          </p>
          {{ course.level.name }}
        </li>
        <li>
          <p>
            <span
              ><img
                :src="`/images/user_icon_black_2.png`"
                alt="User"
                class="img-fluid"
            /></span>
            Student Enrolled
          </p>
          47
        </li>
        <li v-if="course.language">
          <p>
            <span
              ><img
                :src="`/images/language_icon_black.png`"
                alt="Language"
                class="img-fluid"
            /></span>
            {{ course.language.name }}
          </p>
          English
        </li>
      </ul>
      <a class="common_btn" href="#"
        >Enroll The Course <i class="far fa-arrow-right"></i
      ></a>
    </div>
    <div
      class="wsus__courses_sidebar_share_btn d-flex flex-wrap justify-content-between"
    >
      <a href="#" class="common_btn"
        ><i class="far fa-heart"></i> Add to Wishlist</a
      >
    </div>
    <div class="wsus__courses_sidebar_info">
      <h3>This Course Includes</h3>
      <ul>
        <li v-if="course.duration">
          <span
            ><img
              :src="`/images/video_icon_black.png`"
              alt="video"
              class="img-fluid"
          /></span>
          {{ useMinuteToTime(course.duration) }}
        </li>
        <li>
          <span
            ><img
              :src="`/images/file_download_icon_black.png`"
              alt="download"
              class="img-fluid"
          /></span>
          3 Downloadable Resources File
        </li>
        <li>
          <span
            ><img
              :src="`/images/certificate_icon_black.png`"
              alt="Certificate"
              class="img-fluid"
          /></span>
          Certificate of Completion
        </li>
      </ul>
    </div>
    <div class="wsus__courses_sidebar_instructor">
      <div class="image_area d-flex flex-wrap align-items-center">
        <div class="img">
          <img
            :src="course.instructor?.image"
            alt="Instructor"
            class="img-fluid"
          />
        </div>
        <div class="text">
          <h3>{{ course.instructor.name }}</h3>
          <p><span>Instructor</span> Level 2</p>
        </div>
      </div>
    </div>
  </div>
</template>
