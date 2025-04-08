<script setup lang="ts">
import type { TCourseChapter } from "~/types/TCourseChapter";
import type {TLesson} from "~/types/TLesson";
const emits = defineEmits(["emit_delete", "emit_edit"]);
const props = defineProps({
  chapter: {
    type: Object as PropType<TCourseChapter>,
    required: true,
  },
});
const route = useRoute();
const course_id = route.params.course_id;
const lessons = ref<TLesson[]>();
const errors = ref();
const loading = ref(false);

function deleteChapter() {
  emits("emit_delete", props.chapter.id);
}
function emitEdit() {
  emits("emit_edit", props.chapter);
}

async function getLessons() {
  loading.value = true;
  try {
    const data = await axiosInstance.get(
      `/instructor/course/${course_id}/chapters/${props.chapter.id}/lessons`
    );
    lessons.value = data.data;
    setTimeout(() => {
      loading.value = false;
    }, 1000);
  } catch (error) {
    console.error("Error fetching lessons:", error);
    handleAxiosError(error, errors);
    loading.value = false;
  }
}

onMounted(() => {
  getLessons();
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
        <a class="edit" @click.prevent="emitEdit" href="#"
          ><i class="far fa-edit"></i
        ></a>
        <a class="del" @click.prevent="deleteChapter" href="#"
          ><i class="fas fa-trash-alt"></i
        ></a>
      </div>
    </h2>
    <div
      id="collapseOne"
      class="accordion-collapse collapse show"
      data-bs-parent="#accordionExample"
    >
      <div class="accordion-body">
        <UiLoading v-if="loading" />
        <ul v-else class="item_list">
          <li
            v-for="lesson in lessons"
            :key="lesson.id"
            >
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
  </div>
</template>
