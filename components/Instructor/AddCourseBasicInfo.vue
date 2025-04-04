<script setup lang="ts"></script>

<template>
  <div class="add_course_basic_info">
    <form action="#">
      <div class="row">
        <div class="col-xl-12">
          <div class="add_course_basic_info_imput">
            <label for="#">Title *</label>
            <input type="text" placeholder="Title" />
          </div>
        </div>
        <div class="col-xl-12">
          <div class="add_course_basic_info_imput">
            <label for="#">Slug *</label>
            <input type="text" placeholder="Slug" />
          </div>
        </div>
        <div class="col-xl-12">
          <div class="add_course_basic_info_imput">
            <label for="#">Seo description</label>
            <input type="text" placeholder="Seo description" />
          </div>
        </div>
        <div class="col-xl-12">
          <div class="add_course_basic_info_imput">
            <label for="#">Thumbnail *</label>
            <input type="file" />
          </div>
        </div>
        <div class="col-xl-6">
          <div class="add_course_basic_info_imput">
            <label for="#">Demo Video Storage <b>(optional)</b></label>
            <select class="select_js">
              <option value="">Please Select</option>
              <option value="">Red</option>
              <option value="">Black</option>
              <option value="">Orange</option>
              <option value="">Rose Gold</option>
              <option value="">Pink</option>
            </select>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="add_course_basic_info_imput">
            <label for="#">Path</label>
            <input type="file" />
          </div>
        </div>
        <div class="col-xl-6">
          <div class="add_course_basic_info_imput">
            <label for="#">Price *</label>
            <input type="text" placeholder="Price" />
            <p>Put 0 for free</p>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="add_course_basic_info_imput">
            <label for="#">Discount Price</label>
            <input type="text" placeholder="Price" />
          </div>
        </div>
        <div class="col-xl-12">
          <div class="mb-0 add_course_basic_info_imput">
            <label for="#">Description</label>
            <textarea rows="8" placeholder="Description"></textarea>
            <button type="submit" class="common_btn mt_20">Save</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
