<script setup lang="ts">
import {useModalStore} from '~/store/useModalStore';
const props = defineProps({
  title: {
    type: String,
    default: 'Modal Title',
  }
});
const modal_store = useModalStore();
</script>

<template>
  <div
    class="modal modal-blur fade show"
    tabindex="-1"
    role="dialog"
    :style="`display: ${modal_store.show_modal ? 'block' : 'none'}`"
  >
    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ title }}</h5>
          <button
            @click="modal_store.show_modal = false"
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.modal {
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1050;
}
</style>
