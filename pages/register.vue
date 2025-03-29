<script setup lang="ts">
definePageMeta({
  layout: "auth",
});
const active_tab = ref(0);
</script>
<template>
  <section class="wsus__sign_in sign_up">
    <div class="row align-items-center">
      <div class="col-xxl-5 col-xl-6 col-lg-6 wow fadeInLeft">
        <div class="wsus__sign_img">
          <img
            src="/admin/images/login_img_2.jpg"
            alt="login"
            class="img-fluid"
          />
          <a href="index.html">
            <img src="/admin/images/logo.png" alt="EduCore" class="img-fluid" />
          </a>
        </div>
      </div>
      <div class="m-auto col-xxl-4 col-xl-5 col-lg-6 col-md-9 wow fadeInRight">
        <div class="wsus__sign_form_area">
          <ul class="nav nav-pills" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                @click="active_tab = 0"
                :class="{ active: active_tab === 0 }"
                class="nav-link"
                id="pills-home-tab"
              >
                Student
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                @click="active_tab = 1"
                :class="{ active: active_tab === 1 }"
                class="nav-link"
              >
                Instructor
              </button>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div
              :class="`tab-pane fade ${
                active_tab === 0 ? 'show active' : null
              }`"
              tabindex="0"
            >
              <FormRegisterStudent title="Student" role="student" />
            </div>

            <div
              :class="`tab-pane fade ${
                active_tab === 1 ? 'show active' : null
              }`"
              tabindex="0"
            >
              <FormRegisterStudent title="Instructor" role="instructor" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <a class="back_btn" href="index.html">Back to Home</a>
  </section>
</template>
