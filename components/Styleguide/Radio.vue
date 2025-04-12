<script setup lang="ts">
import type { TCodeProps } from "~/types/TCodeProps";

const code_props: TCodeProps[] = [
  { key: "label", value: "string" },
  { key: "errors", value: "string[]" },
  { key: "value", value: "number | null" },
  { key: "name", value: "string", required: true },
  { key: "options", value: "TSelectOption[]", required: true },
];

const code = `
const form = ref({
  course_level_id: 0,
});
const levels = ref([
  { key: 1, value: 'Beginner' },
  { key: 2, value: 'Intermediate' },
  { key: 3, value: 'Advanced' },
]);

<FormRadio
  label="Course Level*"
  v-model:value="form.course_level_id"
  :options="levels"
  :errors="errors ? errors.course_level_id : []"
  name="course_level_id"
  @emit_radio="form.course_level_id = $event"
/>
`;

const elem_copy = `
<FormRadio
  label="Course Level*"
  v-model:value="form.course_level_id"
  :options="levels"
  :errors="errors ? errors.course_level_id : []"
  name="course_level_id"
  @emit_radio="form.course_level_id = $event"
/>
`;

const form = ref({
  course_level_id: 0,
});
const levels = ref([
  { key: 1, value: 'Beginner' },
  { key: 2, value: 'Intermediate' },
  { key: 3, value: 'Advanced' },
]);
const errors = ref();

const source = `
import type { TSelectOption } from "~/types/TSelectOption";

const emits = defineEmits(['emit_radio']);

const props = defineProps({
  label: {
    type: String,
    required: false,
  },
  errors: {
    type: Array,
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
  value: {
    type: [Number, null],
    required: true,
  },
  options: {
    type: Array as PropType<TSelectOption[]>,
    required: false,
  },
});
function emitRadio(event: Event, key: number) {
  const target = event.target as HTMLInputElement;
  if (target.checked) {
    emits('emit_radio', key);
  }
}
  <div class="radio">
    <div class="add_course_more_info_radio_box">
      <h3>{{ label }}</h3>
      <div v-for="option in options" :key="option.key" class="form-check">
        <input
          class="form-check-input"
          type="radio"
          :name="name"
          :id="js-{name}-{option.key}"
          :checked="option.key === value"
          @change="emitRadio($event, option.key)"
        />
        <label class="form-check-label" :for="js-{name}-{option.key}">
          {{ option.value }}
        </label>
      </div>
    </div>
    <div
      v-if="errors && errors.length"
      class="input__message input__message--error"
    >
      <p class="text-danger" v-for="(error, index) in errors" :key="index">
        {{ error }}
      </p>
    </div>
  </div>
.radio {
  margin-bottom: 1.6rem;
}
`;
</script>

<template>
  <div class="buttons">
    <StyleguidePreviewCode @emit_click="useCopyToClipboard(elem_copy)" :show_copy_btn="true" :show_props="true">
      <template #default>
        <FormRadio
          label="Course Level*"
          v-model:value="form.course_level_id"
          :options="levels"
          :errors="errors ? errors.course_level_id : []"
          name="course_level_id"
          @emit_radio="form.course_level_id = $event"
        />
      </template>
      <template #code_props>
        <StyleguideCodeProps :code_props="code_props" />
      </template>
      <template #code>
        {{ code }}
      </template>
      <template #source>
        {{ source }}
      </template>
    </StyleguidePreviewCode>
  </div>
</template>
