<script setup lang="ts">
import type { TCategory, TCategoryChildren } from "~/types/TCategory";
import type { TSelectOption, TSelectOptionGroup } from "~/types/TSelectOption";

const route = useRoute();
const router = useRouter();
const loading = ref(false);

const categories = ref<TSelectOptionGroup[]>([]);
const levels = ref<TSelectOption[]>([]);
const languages = ref<TSelectOption[]>([]);
const errors = ref<any>(null);

const form = ref({
  capacity: 0,
  duration: 0,
  qna: false,
  certificate: true,
  category_id: 0,
  course_level_id: 0,
  course_language_id: 0,
});

async function getCourse() {
  const course_id = route.params.course_id;
  try {
    loading.value = true;
    const data = await axiosInstance.get(
      `/instructor/courses/${course_id}/step2`
    );
    const course = data.data.course;
    form.value.capacity = course.capacity;
    form.value.duration = course.duration;
    form.value.qna = course.qna === 1 ? true : false;
    form.value.certificate = course.certificate == 1 ? true : false;
    form.value.category_id = course.category_id;
    form.value.course_level_id = course.course_level_id;
    form.value.course_language_id = course.course_language_id;
    levels.value = data.data.levels.map((level: any) => ({
      key: level.id,
      value: level.name,
    }));
    languages.value = data.data.languages.map((language: any) => ({
      key: language.id,
      value: language.name,
    }));
    let parents_categories: TSelectOptionGroup[] = [];
    data.data.categories.forEach((category: TCategory) => {
      if (category.parent_id === null) {
        let children: TSelectOption[] = [];
        data.data.categories.forEach((child: TCategory) => {
          if (child.parent_id === category.id) {
            children.push({
              key: child.id,
              value: child.name,
            });
          }
        });
        parents_categories.push({
          key: category.id,
          value: category.name,
          options: children,
        });
      }
    });
    categories.value = parents_categories;
    loading.value = false;
  } catch (error: any) {
    console.log(error, "error");
  }
}

async function onSubmit() {
  const course_id = route.params.course_id;
  try {
    loading.value = true;
    await axiosInstance.post(
      `/instructor/courses/${course_id}/step2`,
      form.value
    );
    useSweetAlert(
      "success",
      "Course updated successfully",
      "We have updated your course successfully"
    );
    router.push(`/instructor/course/${course_id}/edit/3`);
    loading.value = false;
  } catch (error: any) {
    if (error.response.status === 422) {
      errors.value = error.response.data.errors;
      for (const key in errors.value) {
        useSweetAlert("error", errors.value[key][0], "Please check your input");
      }
    }
    if (error.response.status === 500) {
      useSweetAlert("error", "Server Error", "Please try again later");
    }
    loading.value = false;
  }
}

onMounted(async () => {
  await getCourse();
});
</script>

<template>
  <div class="add_course_more_info">
    <div class="row">
      <div class="col-xl-6">
        <InputComponent
          label="Course Capacity*"
          v-model:value="form.capacity"
          type="number"
          :errors="errors ? errors.capacity : []"
        />
      </div>
      <div class="col-xl-6">
        <InputComponent
          label="Course Duration (Minutes)*"
          type="number"
          v-model:value="form.duration"
          :errors="errors ? errors.duration : []"
        />
      </div>
      <div class="col-xl-6">
        <div class="add_course_more_info_checkbox">
          <FormCheckbox
            label="Q&A"
            v-model:value="form.qna"
            :errors="errors ? errors.qna : []"
            name="qna"
            @emit_checkbox="form.qna = $event"
          />
          <FormCheckbox
            label="Completion Certificate"
            v-model:value="form.certificate"
            :errors="errors ? errors.certificate : []"
            name="certificate"
            @emit_checkbox="form.certificate = $event"
          />
        </div>
      </div>
      <div class="col-6">
        <div class="add_course_more_info_input">
          <FormSelectGroup
            label="Category*"
            v-model:value="form.category_id"
            :options="categories"
            :errors="errors ? errors.category_id : []"
            @emit_select="form.category_id = $event"
            name="category_id"
          />
        </div>
      </div>
      <div class="col-xl-4">
        <FormRadio
          label="Course Level*"
          v-model:value="form.course_level_id"
          :options="levels"
          :errors="errors ? errors.course_level_id : []"
          name="course_level_id"
          @emit_radio="form.course_level_id = $event"
        />
      </div>
      <div class="col-xl-4">
        <FormRadio
          label="Course Language*"
          v-model:value="form.course_language_id"
          :options="languages"
          :errors="errors ? errors.course_language_id : []"
          name="course_language_id"
          @emit_radio="form.course_language_id = $event"
        />
      </div>
      <div class="col-xl-12">
        <button type="text" @click="onSubmit" class="common_btn">Save</button>
      </div>
    </div>
  </div>
</template>
