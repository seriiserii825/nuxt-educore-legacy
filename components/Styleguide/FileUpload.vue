<script setup lang="ts">
const code = `
const form = ref({
  video_file: "",
});
const errors = ref({});

<FormFileUpload
  label="Video File"
  name="video_file"
  v-model:value="form.video_file"
  accept="video/*"
  :errors="errors ? errors.video_file : []"
  @emit_file="form.video_file = $event"
/>
`;
const elem_copy = `
<FormFileUpload
  label="Video File"
  name="video_file"
  v-model:value="form.video_file"
  accept="video/*"
  :errors="errors ? errors.video_file : []"
  @emit_file="form.video_file = $event"
/>
`;

const form = ref({
  video_file: "",
});
const errors = ref();

const source = `
const emits = defineEmits(["emit_file"]);

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
  accept: {
    type: String,
    default: "image/*",
  },
});

function changeHandler(e: any) {
  const target = e.target as HTMLInputElement;
  if (target && target.files) {
    emits("emit_file", target.files[0]);
  }
}

  <div class="input">
    <label v-if="label" :for="name" class="form-label">{{ label }}</label>
    <input
      class="form-control"
      :id="name"
      :name="name"
      type="file"
      :accept="accept"
      @input="changeHandler"
      :class="{ 'input--error': errors && errors.length }"
    />
    <div
      v-if="errors && errors.length"
      class="input__message input__message--error"
    >
      <p class="text-danger" v-for="(error, index) in errors" :key="index">
        {{ error }}
      </p>
    </div>
  </div>
</template>
<style>
.input--error {
  border-color: red !important;
}
`;
</script>

<template>
  <div class="buttons">
    <StyleguidePreviewCode @emit_click="useCopyToClipboard(elem_copy)" :show_copy_btn="true">
      <template #default>
        <FormFileUpload
          label="Video File"
          name="video_file"
          v-model:value="form.video_file"
          accept="video/*"
          :errors="errors ? errors.video_file : []"
          @emit_file="form.video_file = $event"
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
