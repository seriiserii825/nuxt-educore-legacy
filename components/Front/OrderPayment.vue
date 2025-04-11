<script setup lang="ts">
const emits = defineEmits(["emit_click"]);
const props = defineProps({
  image: {
    type: String,
    default: "/images/payment_1.png",
  },
  title: {
    type: String,
    default: "Payment Method",
  },
  active: {
    type: Boolean,
    default: false,
  },
});

function emitClick() {
  emits("emit_click", props.title);
}
</script>

<template>
  <a href="#" class="payment_mathod" :class="{'active': active}" @click.prevent="emitClick">
    <img :src="image" alt="payment" class="img-fluid w-100" />
  </a>
</template>
<style>
.payment_mathod.active {
  border: 2px solid #f7b600;
}
</style>
