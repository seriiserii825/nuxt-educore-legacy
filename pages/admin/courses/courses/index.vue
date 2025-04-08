<script setup lang="ts">
import type { TCourseAdmin } from "~/types/TCourseAdmin";
definePageMeta({
  layout: "admin",
  middleware: ["admin"],
});
const loading = ref<boolean>(false);
const courses = ref<TCourseAdmin[]>([]);
async function getCourses() {
  loading.value = true;
  try {
    const data = await axiosInstance.get("/admin/courses");
    courses.value = data.data;
    setTimeout(() => {
      loading.value = false;
    }, 1000);
  } catch (error: any) {
    if (error.response.data.message) {
      console.log(error.response.data.message);
      useSweetAlert("error", "Error", error.response.data.message);
      loading.value = false;
    }
  }
}
const approved_options = [
  { key: "approved", value: "Approved" },
  { key: "pending", value: "Pending" },
  { key: "rejected", value: "Rejected" },
];
async function updateApproved(course_id: number, status: string) {
  loading.value = true;
  try {
    const data = await axiosInstance.put(`/admin/courses/${course_id}/approved`, {
      is_approved: status,
    });
    useSweetAlert("success", "Success", data.data.message);
    await getCourses();
    setTimeout(() => {
      loading.value = false;
    }, 1000);
  } catch (error: any) {
    if (error.response.data.message) {
      console.log(error.response.data.message);
      useSweetAlert("error", "Error", error.response.data.message);
      loading.value = false;
    }
  }
}
onMounted(async () => {
  await getCourses();
});
</script>
<template>
  <div class="page-body">
    <div class="container-xl">
      <UiCard title="Courses">
        <FormTable
          :headers="[
            'Id',
            'Title',
            'Price',
            'Instructor',
            'Status',
            'Action',
          ]"
        >
          <UiLoading v-if="loading" />
          <template v-else>
            <tr v-for="course in courses" :key="course.id">
              <td>{{ course.id }}</td>
              <td>{{ course.title }}</td>
              <td>{{ course.price }}</td>
              <td>{{ course.instructor.name }}</td>
              <td>
                <UiBadge
                  v-if="course.is_approved === 'approved'"
                  type="success"
                  text="Approved"
                />
                <UiBadge
                  v-if="course.is_approved === 'pending'"
                  type="warning"
                  text="Pending"
                />
                <UiBadge
                  v-if="course.is_approved === 'rejected'"
                  type="error"
                  text="Rejected"
                />
              </td>
              <td>
                <FormSelect
                  label=""
                  name="is_approved"
                  :options="approved_options"
                  :value="course.is_approved"
                  @emit_select="updateApproved(course.id, $event)"
                  :errors="[]"
                />
              </td>
            </tr>
          </template>
        </FormTable>
      </UiCard>
    </div>
  </div>
</template>
