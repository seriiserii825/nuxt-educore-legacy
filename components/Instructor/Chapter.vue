<script setup lang="ts">
import type { TCourseChapter } from "~/types/TCourseChapter";
const emits = defineEmits(["emit_delete", "emit_edit"]);
const props = defineProps({
  chapter: {
    type: Object as PropType<TCourseChapter>,
    required: true,
  },
});
const is_visible = ref(false);
function deleteChapter() {
  emits("emit_delete", props.chapter.id);
}
function emitEdit() {
  emits("emit_edit", props.chapter);
}
function toggleBody(){
  if (props.chapter.lessons && props.chapter.lessons.length === 0) {
    return;
  }
  is_visible.value = !is_visible.value;
}
</script>

<template>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button
        class="accordion-button"
        :class="{'collapsed': !is_visible, 'hidden-arrow': chapter.lessons && chapter.lessons.length === 0}"
        type="button"
        @click="toggleBody"
      >
        <span>{{ chapter.title }}</span>
      </button>
      <div class="add_course_content_action_btn">
        <div class="dropdown">
          <div
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="far fa-plus"></i>
          </div>
          <ul class="dropdown-menu dropdown-menu-end">
            <li>
              <a class="dropdown-item" href="#">Add Lesson</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">Add Document</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">Add Quiz</a>
            </li>
          </ul>
        </div>
        <a class="edit" @click.prevent="emitEdit" href="#"
          ><i class="far fa-edit"></i
        ></a>
        <a class="del" @click.prevent="deleteChapter" href="#"
          ><i class="fas fa-trash-alt"></i
        ></a>
      </div>
    </h2>
    <Transition name="property">
      <div
        id="collapseOne"
        class="accordion-collapse collapse show"
        v-if="is_visible"
      >
        <div class="accordion-body">
          <ul class="item_list">
            <li v-for="lesson in chapter.lessons" :key="lesson.id">
              <span>{{ lesson.title }}</span>
              <div class="add_course_content_action_btn">
                <a class="edit" href="#"><i class="far fa-edit"></i></a>
                <a class="del" href="#"><i class="fas fa-trash-alt"></i></a>
                <a class="arrow" href="#"><i class="fas fa-arrows-alt"></i></a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Transition>
  </div>
</template>
<style>
/* // before enter */
.property-enter-from {
  opacity: 0;
}
/* // after enter */
.property-enter-to {
  opacity: 1;
}
/* // while enter */
.property-enter-active {
  transition: opacity 0.5s;
}
/* // before leave */
.property-leave-from {
  opacity: 1;
}
/* // after leave */
.property-leave-to {
  opacity: 0;
}
/* // while leave */
.property-leave-active {
  transition: opacity 0.3s;
}
</style>
