<script setup lang="ts">
const btn_code = `
<FormBtn @emit_click="console.log('')">Edit</FormBtn>
<FormBtn color="btn-secondary" @emit_click="console.log('')">Edit</FormBtn>
<FormBtn color="btn-danger" @emit_click="console.log('')">Edit</FormBtn>
<FormBtn color="btn-warning" @emit_click="console.log('')">Edit</FormBtn>
`;

const btn_default = `<FormBtn @emit_click="console.log('')">Edit</FormBtn>`
const btn_secondary = `<FormBtn color="btn-secondary" @emit_click="console.log('')">Edit</FormBtn>`
const btn_danger = `<FormBtn color="btn-danger" @emit_click="console.log('')">Edit</FormBtn>`
const btn_warning = `<FormBtn color="btn-warning" @emit_click="console.log('')">Edit</FormBtn>`

const btn_source = `
const props = defineProps({
  color: {
    type: String as () => "btn-primary" | "btn-secondary" | "btn-danger" | "btn-warning",
    default: "btn-primary",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  url: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["emit_click"]);
const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit("emit_click", event);
  }
};

<div>
  <a v-if="url" :class="[ 'btn', props.color, { disabled: props.disabled }, ]" :href="url">
    <slot />
  </a>
  <button v-else @click="handleClick" :class="[ 'btn', props.color, { disabled: props.disabled }, ]">
    <slot />
  </button>
</div>
`;
</script>

<template>
  <div class="buttons">
    <StyleguidePreviewCode>
      <template #default>
        <div @click="useCopyToClipboard(btn_default)">
          <FormBtn @emit_click="console.log('')">Edit</FormBtn>
        </div>
        <div @click="useCopyToClipboard(btn_secondary)">
          <FormBtn color="btn-secondary" @emit_click="console.log('')"
            >Edit</FormBtn
          >
        </div>
        <div @click="useCopyToClipboard(btn_danger)">
          <FormBtn color="btn-danger" @emit_click="console.log('')"
            >Edit</FormBtn
          >
        </div>
        <div @click="useCopyToClipboard(btn_warning)">
          <FormBtn color="btn-warning" @emit_click="console.log('')"
            >Edit</FormBtn
          >
        </div>
      </template>
      <template #code>
        {{ btn_code }}
      </template>
      <template #source>
        {{ btn_source }}
      </template>
    </StyleguidePreviewCode>
  </div>
</template>
