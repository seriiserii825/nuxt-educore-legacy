<script setup lang="ts">
import type { TCourseChapter } from "~/types/TCourseChapter";
import CreateLesson from "./CreateLesson.vue";
import EditLesson from "./EditLesson.vue";
import type { TLesson } from "~/types/TLesson";
import {useCourseChaptersStore} from "~/store/useCourseChaptersStore";
const openModal = inject("openModal");
const showModal = () => {
  // @ts-ignore
  openModal(CreateLesson, { chapter_id: props.chapter.id });
};
const chapter_store = useCourseChaptersStore();
const route = useRoute();
const emits = defineEmits([
  "emit_delete",
  "emit_edit",
  "emit_refresh_chapters",
]);
const props = defineProps({
  chapter: {
    type: Object as PropType<TCourseChapter>,
    required: true,
  },
  active: {
    type: Boolean,
    default: false,
  }
});
const errors = ref();
const body_status = ref(false);
const lessons_status = ref(false);
function deleteChapter() {
  emits("emit_delete", props.chapter.id);
}
function emitEdit() {
  emits("emit_edit", props.chapter);
}
function editLessonModal(lesson: TLesson) {
  // @ts-ignore
  openModal(EditLesson, { chapter_id: props.chapter.id, lesson });
}
async function deleteLesson(lesson_id: number) {
  const delete_confirmed = await useSweetAlertConfirm(
    "Are you sure?",
    "You won't be able to revert this!"
  );
  if (!delete_confirmed) {
    return;
  }
  try {
    await axiosInstance.delete(
      `/instructor/courses/${route.params.course_id}/chapters/${props.chapter.id}/lessons/${lesson_id}`
    );
    emits("emit_refresh_chapters");
  } catch (error) {
    handleAxiosError(error, errors);
  }
}
function toggleBody() {
  if (props.chapter.lessons && props.chapter.lessons.length === 0) {
    return;
  }
  body_status.value = !body_status.value;
}

let draggedIndex = ref<number | null>(null);
const items = ref(props.chapter.lessons || []);

const onDragStart = (index: number) => {
  // console.log("Drag started:", index);
  draggedIndex.value = index;
};

const onDragOver = (event: DragEvent) => {
  // console.log("Dragging over an element");
  event.preventDefault(); // Must call preventDefault() to allow drop
};

async function orderLessons(lessons_ids: number[]) {
  try {
    const data = await axiosInstance.post(
      `/instructor/courses/${route.params.course_id}/chapters/${props.chapter.id}/order`,
      {
        lessons_ids,
      }
    );
    useSweetAlert("success", "update order", data.data.message);
  } catch (error) {
    handleAxiosError(error, errors);
  }
}

const onDrop = async (index: number) => {
  // console.log("Dropped on index:", index);
  if (draggedIndex.value === null) {
    return; // No item was dragged
  }
  const draggedItem = items.value[draggedIndex.value];
  // Reorder the list
  items.value.splice(draggedIndex.value, 1); // Remove dragged item
  items.value.splice(index, 0, draggedItem); // Insert at new position
  const lessons_ids = items.value.map((item) => item.id);
  await orderLessons(lessons_ids);
  draggedIndex.value = null; // Reset dragged index
  chapter_store.setChapterActiveId(props.chapter.id);
  emits("emit_refresh_chapters");
};

onMounted(() => {
  lessons_status.value = props.active;
  if (props.active && props.chapter.lessons && props.chapter.lessons.length > 0) {
    body_status.value = true;
  }
});
</script>

<template>
  <div
    class="accordion-item"
    :class="{ 'accordion-item--lesson-open': lessons_status }"
  >
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
          <ul
            class="dropdown-menu dropdown-menu-end"
            :class="{ show: lessons_status === true }"
          >
            <li>
              <a @click.prevent="showModal" class="dropdown-item" href="#"
                >Add Lesson</a
              >
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
            <li
              v-for="(lesson, index) in chapter.lessons"
              draggable="true"
              @dragstart="onDragStart(index)"
              @dragover.prevent="onDragOver"
              @drop="onDrop(index)"
              :key="lesson.id"
            >
              <span>{{ lesson.title }}</span>
              <div class="add_course_content_action_btn">
                <a
                  @click.prevent="editLessonModal(lesson)"
                  class="edit"
                  href="#"
                  ><i class="far fa-edit"></i
                ></a>
                <a @click.prevent="deleteLesson(lesson.id)" class="del" href="#"
                  ><i class="fas fa-trash-alt"></i
                ></a>
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
