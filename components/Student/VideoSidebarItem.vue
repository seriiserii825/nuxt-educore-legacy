<script setup lang="ts">
const is_active = ref(false);
</script>

<template>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button">
        <b>Introduction</b>
        <span>5/5</span>
      </button>
    </h2>
    <div class="accordion-collapse collapse show">
      <div class="accordion-body">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" />
          <label class="form-check-label">
            1_Setting up Environment (Part - 1)
            <span>
              <img src="/images/video_icon_black_2.png" alt="video" class="img-fluid" />
              06.03
            </span>
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" />
          <label class="form-check-label">
            2_Environment Setup for Project (Part - 1)
            <span>
              <img src="/images/video_icon_black_2.png" alt="video" class="img-fluid" />
              06.03
            </span>
          </label>
        </div>
        <div class="dropdown">
          <button class="btn btn-secondary" type="button">
            <i class="fas fa-folder-open"></i> Resources
          </button>
          <ul>
            <li><a class="dropdown-item" href="#">Resources File 01</a></li>
            <li><a class="dropdown-item" href="#">Resources 02</a></li>
            <li><a class="dropdown-item" href="#">Resources 03</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
