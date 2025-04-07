<script setup lang="ts">
import type { TCourseChapter } from "~/types/TCourseChapter";

const props = defineProps({
  chapter: {
    type: Object as PropType<TCourseChapter>,
    required: true,
  },
});
</script>

<template>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button
        class="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
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
        <a class="edit" href="#"><i class="far fa-edit"></i></a>
        <a class="del" href="#"><i class="fas fa-trash-alt"></i></a>
      </div>
    </h2>
    <div
      id="collapseOne"
      class="accordion-collapse collapse show"
      data-bs-parent="#accordionExample"
    >
      <div class="accordion-body">
        <ul class="item_list">
          <li>
            <span>Aut autem dolorem debitis mollitia.</span>
            <div class="add_course_content_action_btn">
              <a class="edit" href="#"><i class="far fa-edit"></i></a>
              <a class="del" href="#"><i class="fas fa-trash-alt"></i></a>
              <a class="arrow" href="#"><i class="fas fa-arrows-alt"></i></a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
