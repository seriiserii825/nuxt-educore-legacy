<script setup lang="ts">
import type { TCodeProps } from "~/types/TCodeProps";

const code_props: TCodeProps[] = [
  { key: "label", value: "string" },
  { key: "options", value: "TSelectOption[]" },
  { key: "errors", value: "string[]" },
  { key: "value", value: "string | number" },
  { key: "name", value: "string", required: true },
];
const code = `
const form = ref({
  file_type: "",
});
const file_type_options = ref([
  { key: "video", value: "Video" },
  { key: "audio", value: "Audio" },
  { key: "text", value: "Text" },
  { key: "pdf", value: "PDF" },
]);

const errors = ref({});

<FormSelect
  label="File Type"
  name="file_type"
  :options="file_type_options"
  :value="form.file_type"
  @emit_select="form.file_type = $event"
  :errors="errors ? errors.file_type : []"
/>
`;

const elem_copy = `
<FormSelect
  label="File Type"
  name="file_type"
  :options="file_type_options"
  :value="form.file_type"
  @emit_select="form.file_type = $event"
  :errors="errors ? errors.file_type : []"
/>
`;

const form = ref({
  file_type: "",
});
const file_type_options = ref([
  { key: "video", value: "Video" },
  { key: "audio", value: "Audio" },
  { key: "text", value: "Text" },
  { key: "pdf", value: "PDF" },
]);
const errors = ref();

const source = `
import type { TSelectOption } from "~/types/TSelectOption";

const emits = defineEmits(['emit_select']);

const props = defineProps({
  name: String,
  label: String,
  options: Array as PropType<TSelectOption[]>,
  value: String,
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
    <select class="form-select" @change="onChange" :name="name">
      <option
        v-for="option in options"
        :key="option.key"
        :value="option.key"
        :selected="option.key === value"
      >
        {{ option.value }}
      </option>
    </select>
    <div
      v-if="errors && errors.length"
      class="input__message input__message--error"
    >
      <p class="text-danger" v-for="(error, index) in errors" :key="index">{{ error }}</p>
    </div>
  </div>

.select {
  margin-bottom: 1rem;
}
`;
</script>

<template>
  <div class="buttons">
    <StyleguidePreviewCode @emit_click="useCopyToClipboard(elem_copy)" :show_copy_btn="true" :show_props="true">
      <template #default>
        <FormSelect
          label="File Type"
          name="file_type"
          :options="file_type_options"
          :value="form.file_type"
          @emit_select="form.file_type = $event"
          :errors="errors ? errors.file_type : []"
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
