<script setup lang="ts">
const code = `
const form = ref({
  category_id: 0,
});
const file_type_options = ref([
  { key: "video", value: "Video" },
  { key: "audio", value: "Audio" },
  { key: "text", value: "Text" },
  { key: "pdf", value: "PDF" },
]);

const categories = ref([
  {
    key: 1,
    value: "Category 1",
    options: [
      { key: 2, value: "Subcategory 1" },
      { key: 3, value: "Subcategory 2" },
    ],
  },
  {
    key: 4,
    value: "Category 2",
    options: [
      { key: 5, value: "Subcategory 3" },
      { key: 6, value: "Subcategory 4" },
    ],
  },
]);

const errors = ref({});

<FormSelectGroup
  label="Category*"
  v-model:value="form.category_id"
  :options="categories"
  :errors="errors ? errors.category_id : []"
  @emit_select="form.category_id = $event"
  name="category_id"
/>
`;
const elem_copy = `
<FormSelectGroup
  label="Category*"
  v-model:value="form.category_id"
  :options="categories"
  :errors="errors ? errors.category_id : []"
  @emit_select="form.category_id = $event"
  name="category_id"
/>
`;
const form = ref({
  category_id: 0,
});

const categories = ref([
  {
    key: 1,
    value: "Category 1",
    options: [
      { key: 2, value: "Subcategory 1" },
      { key: 3, value: "Subcategory 2" },
    ],
  },
  {
    key: 4,
    value: "Category 2",
    options: [
      { key: 5, value: "Subcategory 3" },
      { key: 6, value: "Subcategory 4" },
    ],
  },
]);
const errors = ref();

const source = `
import type { TSelectOptionGroup } from "~/types/TSelectOption";

const emits = defineEmits(["emit_select"]);

const props = defineProps({
  name: String,
  label: String,
  options: Array as PropType<TSelectOptionGroup[]>,
  value: Number,
  errors: {
    type: Array,
    required: false,
  },
});

function onChange(event: Event) {
  const target = event.target as HTMLSelectElement;
  emits("emit_select", target.value);
}

  <div class="select">
    <label v-if="label" class="form-label">{{ label }}</label>
    <select class="select_2 form-select" :name="name" @change="onChange">
      <option value="" disabled selected hidden>
        Select an option
      </option>j
      <optgroup
        v-for="(option, index) in options"
        :key="index"
        :label="option.value"
      >
        <option
          v-for="(child, index) in option.options"
          :key="index"
          :value="child.key"
          :selected="child.key === value"
        >
          {{ child.value }}
        </option>
      </optgroup>
    </select>
    <div
      v-if="errors && errors.length"
      class="input__message input__message--error"
    >
      <p class="text-danger" v-for="(error, index) in errors" :key="index">
        {{ error }}
      </p>
    </div>
  </div>
`;
</script>

<template>
  <div class="buttons">
    <StyleguidePreviewCode @emit_click="useCopyToClipboard(elem_copy)" :show_copy_btn="true">
      <template #default>
        <FormSelectGroup
          label="Category*"
          v-model:value="form.category_id"
          :options="categories"
          :errors="errors ? errors.category_id : []"
          @emit_select="form.category_id = $event"
          name="category_id"
        />
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
