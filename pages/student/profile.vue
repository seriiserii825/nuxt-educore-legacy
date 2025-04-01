<script setup lang="ts">
import type { TUser } from "~/types/TUser";
definePageMeta({
  layout: "student",
  middleware: ["student"],
});
const user = ref<TUser | null>(null);
user.value = useGetUser();
const loading = ref(false);
function onSubmit() {}
</script>
<template>
  <div>
    <UiBreadcrumb image="/images/breadcrumb_bg.jpg" title="Student Profile" />
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
              <NavStudentSidebarMenu />
            </div>
          </div>
          <div class="pt-4 col-xl-9 col-md-8">
            <UiLoading v-if="loading" />
            <template v-else>
              Profile
            </template>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
