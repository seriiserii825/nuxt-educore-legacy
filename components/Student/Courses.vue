<script setup lang="ts">
import type { PropType } from "vue";
import type {TEnrollment} from "~/types/TEnrollment";

defineProps({
  enrollments: {
    type: Array as PropType<TEnrollment[]>,
    required: true,
  },
});
</script>
<template>
  <div class="wsus__dashboard_contant">
    <form action="#" class="wsus__dash_course_searchbox">
      <div class="input">
        <input type="text" placeholder="Search our Courses" />
        <button><i class="far fa-search"></i></button>
      </div>
      <div class="selector">
        <select class="select_js">
          <option value="">Choose</option>
          <option value="">Choose 1</option>
          <option value="">Choose 2</option>
        </select>
      </div>
    </form>
    <div class="wsus__dash_course_table">
      <div class="row">
        <div class="col-12">
          <div class="table-responsive">
            <table class="table">
              <tbody>
                <tr>
                  <th class="image">COURSES</th>
                  <th class="details"></th>
                  <th class="action">ACTION</th>
                </tr>
                <template v-if="enrollments.length">
                  <tr v-for="enrollment in enrollments" :key="enrollment.id">
                    <td class="image">
                      <div class="image_category">
                        <img :src="enrollment.course.thumbnail" alt="img" class="img-fluid w-100" />
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
                      <nuxt-link class="title" href="#">
                        <p style="color: black; font-weight: bold;">{{ enrollment.course.title }}</p>
                        <p>by <em>{{enrollment.instructor.name}}</em></p>
                      </nuxt-link>
                    </td>
                    <td class="action">
                      <FormBtn @emit_click="console.log('')">Watch course</FormBtn>
                    </td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
