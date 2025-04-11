<script setup lang="ts">
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


</script>

<template>
  <div>
    <a v-if="url" :class="[ 'btn', `${props.color}`, { disabled: props.disabled }, ]" :href="url">
      <slot />
    </a>
    <button v-else @click="handleClick" :class="[ 'btn', `${props.color}`, { disabled: props.disabled }, ]">
      <slot />
    </button>
  </div>
</template>
