<script setup lang="ts">
const code = `
const form = ref({
  description: "",
});
const errors = ref({});

<FormTextarea
  label="Description"
  v-model:value="form.description"
  name="description"
  :errors="errors ? errors.description : []"
/>
`;

const elem_copy = `
<FormTextarea
  label="Description"
  v-model:value="form.description"
  name="description"
  :errors="errors ? errors.description : []"
/>
`

const form = ref({
  description: "",
});
const errors = ref();

const source = `
import { computed } from "vue";

const props = defineProps({
  label: {
    type: String,
    required: false,
  },
  errors: {
    type: Array,
    required: false,
  },
  value: {
    type: [String, Number],
    required: false,
  },
  name: {
    type: String,
    required: false,
  }
});

const propsValue = computed(() => {
  return props.value;
});

const emits = defineEmits(["update:value"]);
function changeHandler(e: any) {
  let value = e.target.value;
  emits("update:value", value);
}

  <div class="input">
    <label v-if="label">{{ label }}</label>
    <textarea
      :name="name"
      rows="5"
      @input="changeHandler"
      :class="{ 'input--error': errors && errors.length }"
      >{{ propsValue }}</textarea>
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
        <FormTextarea
          label="Description"
          v-model:value="form.description"
          name="description"
          :errors="errors ? errors.description : []"
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
