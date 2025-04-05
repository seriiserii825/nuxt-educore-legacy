<script setup lang="ts">
import type { TCategory, TCategoryChildren } from "~/types/TCategory";
import type { TSelectOption, TSelectOptionGroup } from "~/types/TSelectOption";

const route = useRoute();
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
          :errors="errors ? errors.capacity : []"
        />
      </div>
      <div class="col-xl-6">
        <InputComponent
          label="Course Duration (Minutes)*"
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
          />
          <FormCheckbox
            label="Completion Certificate"
            v-model:value="form.certificate"
            :errors="errors ? errors.certificate : []"
            name="certificate"
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
            name="category_id"
            />
        </div>
      </div>
      <div class="col-xl-4">
        <div class="add_course_more_info_radio_box">
          <h3>Level</h3>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Beginner
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label class="form-check-label" for="flexRadioDefault2">
              Intermediate
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault3"
            />
            <label class="form-check-label" for="flexRadioDefault3">
              Expert
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault4"
            />
            <label class="form-check-label" for="flexRadioDefault4">
              Expert
            </label>
          </div>
        </div>
      </div>
      <div class="col-xl-4">
        <div class="add_course_more_info_radio_box">
          <h3>Language</h3>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault1"
              id="flexRadioDefault11"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault11">
              English
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault1"
              id="flexRadioDefault12"
            />
            <label class="form-check-label" for="flexRadioDefault12">
              Hindi
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault1"
              id="flexRadioDefault13"
            />
            <label class="form-check-label" for="flexRadioDefault13">
              Arabic
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault1"
              id="flexRadioDefault14"
            />
            <label class="form-check-label" for="flexRadioDefault14">
              Francais
            </label>
          </div>
        </div>
      </div>
      <div class="col-xl-12">
        <button type="submit" class="common_btn">Save</button>
      </div>
    </div>
  </div>
</template>
