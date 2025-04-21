<script setup lang="ts">
import { useUserStore } from "~/store/useUserStore";
import type {TEnrollment} from "~/types/TEnrollment";
definePageMeta({
  layout: "student",
  middleware: ["student"],
});
const user_store = useUserStore();
const { user } = storeToRefs(user_store);
const active = ref(false);
const loading = ref(false);
const enrollments = ref<TEnrollment[]>([]);
const form = ref({
  document: null as File | null,
});
const errors = ref();
function emitFile(file: File) {
  form.value.document = file;
}

function onSubmit() {
  if (!user.value) {
    useSweetAlert("error", "No user", "user not found");
  }
  loading.value = true;
  const formData = new FormData();
  formData.append("document", form.value.document);
  axiosInstance
    .post("/student/requests/" + user.value.id, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then(async (res) => {
      console.log(res.data, "res.data");
      active.value = false;
      document.value = null;
      await useGetUserApi();
      loading.value = false;
    })
    .catch((error) => {
      handleAxiosError(error, errors);
      loading.value = false;
    });
}

async function getEnrollments() {
  loading.value = true;
  try {
    const data = await axiosInstance.get("/student/enrollments");
    enrollments.value = data.data;
    setTimeout(() => {
      loading.value = false;
    }, 1000);
  } catch (error) {
    handleAxiosError(error, {});
    loading.value = false;
  }
}

onMounted(() => {
  getEnrollments();
});
</script>
<template>
  <div>
    <UiBreadcrumb image="/images/breadcrumb_bg.jpg" title="Student" />
    <section class="wsus__dashboard mt_90 xs_mt_70 pb_120 xs_pb_100">
      <div class="container">
        <div class="row">
          <div class="col-xl-3 col-md-4 wow fadeInLeft">
            <div class="wsus__dashboard_sidebar">
              <UiSidebarTop />
              <NavStudentSidebarMenu />
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
                class="mb-4 d-flex justify-content-end"
              >
                <button @click="active = true" class="btn btn-primary">Become an Instructor</button>
              </div>
              <UiCard v-if="active" title="Become instructor">
                <div class="mb-3">
                  <FormFileUpload
                    label="Upload your document"
                    name="document"
                    accept="application/pdf"
                    @emit_file="emitFile"
                  />
                </div>
                <div class="d-flex justify-content-end">
                  <button @click="onSubmit" class="btn btn-primary">Submit</button>
                </div>
              </UiCard>
              <StudentCourses v-if="enrollments.length" :enrollments="enrollments" />
            </template>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
