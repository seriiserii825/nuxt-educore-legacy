<script setup lang="ts">
const form = ref({
  message_for_review: "",
  status: "",
});
const route = useRoute();
const router = useRouter();
const course_id = route.params.course_id;

const errors = ref();

const status_options = [
  { key: "active", value: "Active" },
  { key: "inactive", value: "Inactive" },
  { key: "draft", value: "Draft" },
];

const loading = ref(false);

async function getCourse() {
  const course_id = route.params.course_id;
  try {
    loading.value = true;
    const data = await axiosInstance.get(
      `/instructor/courses/${course_id}/step2`
    );
    const course = data.data.course;
    form.value.message_for_review = course.message_for_review;
    form.value.status = course.status;
    loading.value = false;
  } catch (error) {
    loading.value = false;
    handleAxiosError(error, errors);
  }
}

async function onSubmit() {
  try {
    await axiosInstance.post(
      `/instructor/courses/${course_id}/step3`,
      form.value
    );
    useSweetAlert("success", "Course added successfully", "ok");
    setTimeout(() => {
      router.push(`/instructor/dashboard`);
    }, 2000);
  } catch (error) {
    handleAxiosError(error, errors);
  }
}

onMounted(async () => {
  await getCourse();
});
</script>

<template>
  <div class="dashboard_add_course_finish">
    <UiLoading v-if="loading" />
    <div class="row" v-else>
      <div class="col-xl-12">
        <FormTextarea
          label="Message for Reviewer"
          v-model:value="form.message_for_review"
          name="message_for_review"
          :errors="errors ? errors.message_for_review : []"
        />
      </div>
      <div class="col-xl-12">
        <FormSelect
          label="Status"
          name="status"
          :options="status_options"
          :value="form.status"
          @emit_select="form.status = $event"
          :errors="errors ? errors.status : []"
        />
        <div class="mb-0 add_course_more_info_input">
          <button type="button" @click="onSubmit" class="common_btn mt_25">
            Send
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
