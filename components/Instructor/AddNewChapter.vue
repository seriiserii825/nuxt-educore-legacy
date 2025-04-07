<script setup lang="ts">
import { useModalStore } from "~/store/useModalStore";
const modal_store = useModalStore();
const route = useRoute();
const form = ref({
  title: ""
});
const errors = ref({
  chapter_name: [],
});
const course_id = route.params.course_id;
console.log("course_id", course_id);
</script>

<template>
  <PopupModal :show="modal_store.show_modal">
    <div class="row">
      <div class="col-md-6">
        <InputComponent
          label="Chapter Name"
          v-model:value="form.chapter_name"
          type="text"
          name="chapter_name"
          :errors="errors ? errors.chapter_name : []"
        />
      </div>
    </div>
  </PopupModal>
</template>
