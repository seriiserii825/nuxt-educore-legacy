<script setup lang="ts">
import type { TUser } from "~/types/TUser";
definePageMeta({
  layout: "student",
  middleware: ["student"],
});
const router = useRouter();
const user = ref<TUser | null>(null);
user.value = useGetUser();
const active = ref(false);
const document = ref<File | null>(null);
const loading = ref(false);
function emitFile(file: File) {
  document.value = file;
  console.log(document.value, "document.value");
}
function onSubmit() {
  if (document.value && user.value) {
    loading.value = true;
    const formData = new FormData();
    formData.append("document", document.value);
    axiosInstance
      .post("/admin/instructor/requests/" + user.value.id, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(async (res) => {
        console.log(res.data, "res.data");
        active.value = false;
        document.value = null;
        await useGetUserApi();
        user.value = useGetUser();
        loading.value = false;
      })
      .catch((err) => {
        console.log(err.response.data, "err.response.data");
        loading.value = false;
      });
  }
}
</script>
<template>
  <div>
    <UiBreadcrumb image="/images/breadcrumb_bg.jpg" title="Student" />
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
              <ul class="wsus__dashboard_sidebar_menu">
                <UiMenuLink
                  v-if="user"
                  :to="
                    user.role === 'student'
                      ? '/student/dashboard'
                      : '/instructor/dashboard'
                  "
                  icon="fas fa-tachometer-alt"
                  text="Dashboard"
                />
                <UiMenuLink to="/" icon="fas fa-book" text="Courses" />
                <UiMenuLink
                  to="/logout"
                  icon="fas fa-sign-out-alt"
                  text="Logout"
                />
              </ul>
            </div>
          </div>
          <div class="pt-4 col-xl-9 col-md-8">
            <UiLoading v-if="loading" />
            <template v-else>
              <UiAlertSuccess
                v-if="user?.approve_status === 'pending'"
                message="Your status for instructor request is pending, wait an email response from admin..."
              />
              <div
                v-if="user?.approve_status === 'initial'"
                class="d-flex justify-content-end mb-4"
              >
                <button @click="active = true" class="btn btn-primary">
                  Become an Instructor
                </button>
              </div>
              <UiCard v-if="active" title="Become instructor">
                <div class="mb-3">
                  <FormFileUpload
                    label="Upload your document"
                    name="document"
                    @emit_file="emitFile"
                  />
                </div>
                <div class="d-flex justify-content-end">
                  <button @click="onSubmit" class="btn btn-primary">
                    Submit
                  </button>
                </div>
              </UiCard>
            </template>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
