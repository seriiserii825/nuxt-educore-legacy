<script setup lang="ts"></script>

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
        <span>Introduction</span>
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
          <li>
            <span>Aut autem dolorem debitis mollitia.</span>
            <div class="add_course_content_action_btn">
              <a class="edit" href="#"><i class="far fa-edit"></i></a>
              <a class="del" href="#"><i class="fas fa-trash-alt"></i></a>
              <a class="arrow" href="#"><i class="fas fa-arrows-alt"></i></a>
            </div>
          </li>
          <li>
            <span>Aut autem dolorem debitis mollitia.</span>
            <div class="add_course_content_action_btn">
              <a class="edit" href="#"><i class="far fa-edit"></i></a>
              <a class="del" href="#"><i class="fas fa-trash-alt"></i></a>
              <a class="arrow" href="#"><i class="fas fa-arrows-alt"></i></a>
            </div>
          </li>
          <li>
            <span>Aut autem dolorem debitis mollitia.</span>
            <div class="add_course_content_action_btn">
              <a class="edit" href="#"><i class="far fa-edit"></i></a>
              <a class="del" href="#"><i class="fas fa-trash-alt"></i></a>
              <a class="arrow" href="#"><i class="fas fa-arrows-alt"></i></a>
            </div>
          </li>
          <li>
            <span>Aut autem dolorem debitis mollitia.</span>
            <div class="add_course_content_action_btn">
              <a class="edit" href="#"><i class="far fa-edit"></i></a>
              <a class="del" href="#"><i class="fas fa-trash-alt"></i></a>
              <a class="arrow" href="#"><i class="fas fa-arrows-alt"></i></a>
            </div>
          </li>
        </ul>
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                <span>Accordion Item #1</span>
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
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the
                <code>.accordion-flush</code> class. This is the first item's
                accordion body.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
