<script setup lang="ts">
import { UiBadge } from "#components";
import type { TCourse } from "~/types/TCourse";

const loading = ref(false);
const courses = ref<TCourse[]>([]);
async function getCourses() {
  try {
    loading.value = true;
    const response = await axiosInstance.get("/instructor/courses");
    courses.value = response.data;
    loading.value = false;
  } catch (error) {
    loading.value = false;
    useSweetAlert("error", "Error", error.response.data.message);
    console.error("Error fetching courses:", error);
  }
}
onMounted(async () => {
  await getCourses();
});
</script>

<template>
  <div class="wsus__dash_course_table">
    <div class="row">
      <div class="col-12">
        <div class="table-responsive">
          <table class="table">
            <tbody>
              <tr>
                <th class="image">COURSES</th>
                <th class="details"></th>
                <th class="sale">STUDENT</th>
                <th class="status">STATUS</th>
                <th class="status">Approved</th>
                <th class="action">ACTION</th>
              </tr>
              <template v-if="courses && courses.length">
                <tr v-for="course in courses" :key="course.id">
                  <td class="image">
                    <div class="image_category">
                      <img
                        :src="`${useRuntimeConfig().public.apiBase}/${
                          course.thumbnail
                        }`"
                        alt="img"
                        class="img-fluid w-100"
                      />
                    </div>
                  </td>
                  <td class="details">
                    <p class="rating">
                      <i class="fas fa-star" aria-hidden="true"></i>
                      <i class="fas fa-star" aria-hidden="true"></i>
                      <i class="fas fa-star" aria-hidden="true"></i>
                      <i class="fas fa-star-half-alt" aria-hidden="true"></i>
                      <i class="far fa-star" aria-hidden="true"></i>
                      <span>(5.0)</span>
                    </p>
                    <a class="title" href="#">{{ course.title }}</a>
                  </td>
                  <td class="sale">
                    <p>{{ course.price }}</p>
                  </td>
                  <td class="status">
                    <p class="active">{{ course.status }}</p>
                  </td>
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
                  <td class="action">
                    <div class="d-flex gap-2">
                      <nuxt-link
                        class="edit"
                        :to="`/instructor/course/${course.id}/edit/1`"
                        ><i class="far fa-edit"></i
                      ></nuxt-link>
                      <a class="del" href="#"
                        ><i class="fas fa-trash-alt"></i
                      ></a>
                    </div>
                  </td>
                </tr>
              </template>
              <template v-else>
                <tr>
                  <td colspan="5" class="text-center">
                    <p>No courses found.</p>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
