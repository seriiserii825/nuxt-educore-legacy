<script setup lang="ts">
import type { TCodeProps } from "~/types/TCodeProps";

const code_props: TCodeProps[] = [
  { key: "label", value: "string" },
  { key: "errors", value: "string[]" },
  { key: "value", value: "boolean" },
  { key: "name", value: "string", required: true },
];

const code = `
const form = ref({
  qna: false,
});
const errors = ref({});

<FormCheckbox
  label="Checkbox label"
  v-model:value="form.qna"
  :errors="errors ? errors.qna : []"
  name="qna"
  @emit_checkbox="form.qna = $event"
/>
`;

const elem_copy = `
<FormCheckbox
  label="Checkbox label"
  v-model:value="form.qna"
  :errors="errors ? errors.qna : []"
  name="qna"
  @emit_checkbox="form.qna = $event"
  />
`;

const form = ref({
  qna: false,
});
const errors = ref();

const source = `
const emits = defineEmits(['emit_checkbox'])
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
    required: true,
  },
  value: {
    type: Boolean,
    required: true,
  },
});

function emitCheckbox(event: Event) {
  const target = event.target as HTMLInputElement;
  emits('emit_checkbox', target.checked);
}

  <div class="checkbox">
    <label class="form-check">
      <input
        :name="name"
        :checked="value"
        class="form-check-input"
        type="checkbox"
        @change="emitCheckbox($event)"
      />
      <span class="form-check-label">{{ label }}</span>
    </label>
    <div
      v-if="errors && errors.length"
      class="input__message input__message--error"
    >
      <p class="text-danger" v-for="(error, index) in errors" :key="index">
        {{ error }}
      </p>
    </div>
  </div>
.checkbox {
  margin-bottom: 1.6rem;
}
`;
</script>

<template>
  <div class="buttons">
    <StyleguidePreviewCode @emit_click="useCopyToClipboard(elem_copy)" :show_copy_btn="true" :show_props="true">
      <template #default>
        <FormCheckbox
          label="Checkbox label"
          v-model:value="form.qna"
          :errors="errors ? errors.qna : []"
          name="qna"
          @emit_checkbox="form.qna = $event"
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
