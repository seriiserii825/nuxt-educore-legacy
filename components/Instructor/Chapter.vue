<script setup lang="ts">
import type { TCourseChapter } from "~/types/TCourseChapter";
import CreateLesson from "./CreateLesson.vue";
const openModal = inject("openModal");
const showModal = () => {
  // @ts-ignore
  openModal(CreateLesson, { chapter_id: props.chapter.id });
};
const emits = defineEmits(["emit_delete", "emit_edit"]);
const props = defineProps({
  chapter: {
    type: Object as PropType<TCourseChapter>,
    required: true,
  },
});
const body_status = ref(false);
const lessons_status = ref(false);
function deleteChapter() {
  emits("emit_delete", props.chapter.id);
}
function emitEdit() {
  emits("emit_edit", props.chapter);
}
function toggleBody() {
  if (props.chapter.lessons && props.chapter.lessons.length === 0) {
    return;
  }
  body_status.value = !body_status.value;
}
</script>

<template>
  <div class="accordion-item" :class="{'accordion-item--lesson-open': lessons_status}">
    <h2 class="accordion-header">
      <button
        class="accordion-button"
        :class="{
          collapsed: !body_status,
          'hidden-arrow': chapter.lessons && chapter.lessons.length === 0,
        }"
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
            @click="lessons_status = !lessons_status"
          >
            <i class="fa-solid fa-plus"></i>
          </div>
          <ul class="dropdown-menu dropdown-menu-end" :class="{'show': lessons_status === true}">
            <li>
              <a @click.prevent="showModal" class="dropdown-item" href="#">Add Lesson</a>
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
        v-if="body_status"
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
.accordion-item {
  position: relative;
}
.accordion-item.accordion-item--lesson-open .accordion-header {
  z-index: 10;
}
.accordion-header {
  position: relative;
}
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
