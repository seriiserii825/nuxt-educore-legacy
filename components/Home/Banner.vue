<script setup lang="ts">
import type { THero } from "~/types/THero";

const hero = ref<THero>();
const loading = ref(false);

async function getHero() {
  loading.value = true;
  try {
    const data = await axiosInstance.get("/home/hero");
    hero.value = data.data;
    if (!hero.value.image) {
      hero.value.image = "uploads/banner_3_img_1.png";
    }
    loading.value = false;
  } catch (error) {
    handleAxiosError(error);
    loading.value = false;
  }
}
onMounted(() => {
  getHero();
});
</script>

<template>
  <div>
    <UiLoading v-if="loading" />
    <section
      v-else-if="hero"
      class="wsus__banner_3"
      style="background: url(images/banner_3_bg.png)"
    >
      <div class="row justify-content-between">
        <div class="col-xl-6 col-lg-6 wow fadeInUp">
          <div class="wsus__banner_3_text">
            <h5>{{ hero.label }}</h5>
            <h1>{{ hero.title }}</h1>
            <p class="description mb-2">{{ hero.description }}</p>
            <div class="wsus__banner_2_btn_area mt_60">
              <a class="common_btn" href="#"
                >{{ hero.button_text }} <i class="far fa-arrow-right" aria-hidden="true"></i
              ></a>
              <div class="play_btn_area">
                <a
                  class="play_btn venobox vbox-item"
                  data-autoplay="true"
                  data-vbtype="video"
                  :href="hero.video_url"
                >
                  <img src="/images/play_icon.png" alt="Play" class="img-fluid" />
                </a>
                <h4>{{ hero.video_text }}</h4>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 wow fadeInRight">
          <div class="wsus__banner_3_img">
            <div class="img">
              <img :src="`${useBaseUrl()}/${hero.image}`" alt="Banner" class="img-fluid" />

              <div class="text">
                <h4>{{ hero.banner_title }}</h4>
                <p>{{ hero.banner_text }}</p>
              </div>

              <div class="circle_box">
                <svg viewBox="0 0 100 100">
                  <defs>
                    <path
                      id="circle"
                      d="
                            M 50, 50
                            m -37, 0
                            a 37,37 0 1,1 74,0
                            a 37,37 0 1,1 -74,0"
                    ></path>
                  </defs>
                  <text>
                    <textPath xlink:href="#circle">{{ hero.round_text }}</textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul class="wsus__banner_features d-flex flex-wrap">
        <li class="green wow fadeInRight">
          <div class="icon">
            <img src="/images/banner_feature_icon_1.png" alt="Features" class="img-fluid" />
          </div>
          <div class="text">
            <h4>Learn From Experts</h4>
            <p>LMS allows users to create organize and manage courses.</p>
          </div>
        </li>
        <li class="pink wow fadeInRight">
          <div class="icon">
            <img src="/images/banner_feature_icon_2.png" alt="Features" class="img-fluid" />
          </div>
          <div class="text">
            <h4>Earn a Certificate</h4>
            <p>LMS allows users to create organize and manage courses.</p>
          </div>
        </li>
        <li class="sky wow fadeInRight">
          <div class="icon">
            <img src="/images/banner_feature_icon_3.png" alt="Features" class="img-fluid" />
          </div>
          <div class="text">
            <h4>5400+ Courses</h4>
            <p>LMS allows users to create organize and manage courses.</p>
          </div>
        </li>
      </ul>
    </section>
    <h3 v-else>No hero in admin</h3>
  </div>
</template>
