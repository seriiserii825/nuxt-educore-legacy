<script setup lang="ts">
const code = `
const form = ref({
  downloadable: false,
});
const errors = ref({});

<FormSwitch
  label="Downloadable"
  name="downloadable"
  :checked="Boolean(form.downloadable)"
  :errors="errors ? errors.downloadable : []"
  @emit_checked="form.downloadable = $event"
/>
`;

const form = ref({
  downloadable: false,
});
const errors = ref();

const source = `
const emits = defineEmits(['emit_checked'])
const props = defineProps({
label: {
    type: String,
    default: "I agree with terms and conditions",
  },
  checked: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    required: true,
  },
});

function onChange(e: any){
  const isChecked = e.target.checked;
  emits('emit_checked', isChecked);
}

  <div class="switch">
    <div class="form-label">{{ label }}</div>
    <label class="form-check form-switch">
      <input class="form-check-input" @change="onChange($event)" :name="name" :checked="checked" type="checkbox" />
      <span class="form-check-label"></span>
    </label>
  </div>
</template>
<style>
.switch {
  margin-bottom: 1.6rem;
  cursor: pointer;
}
`;
</script>

<template>
  <div class="buttons">
    <StyleguidePreviewCode>
      <template #default>
        <FormSwitch
          label="Downloadable"
          name="downloadable"
          :checked="Boolean(form.downloadable)"
          :errors="errors ? errors.downloadable : []"
          @emit_checked="form.downloadable = $event"
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
