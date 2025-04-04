<script setup lang="ts">
//            $table->string('seo_description')->nullable();
////           $table->string('thumbnail')->nullable();
////         $table->enum('demo_video_storage', ['upload', 'youtube', 'vimeo', 'external_link'])->default('upload');
//       $table->string('demo_video_source')->nullable();
//      $table->double('price')->default(0);
//     $table->double('discount')->default(0);
//    $table->text('description')->nullable();
const form = ref({
  title: "",
  seo_description: "",
  thumbnail: "",
  demo_video_storage: "",
  demo_video_source: "",
  price: 0,
  discount: 0,
});
const errors = ref({});
</script>

<template>
  <div class="add_course_basic_info">
    <form action="#">
      <div class="row">
        <div class="col-xl-12">
          <InputComponent
            v-model="form.title"
            label="Title *"
            placeholder="Title"
            v-model:value="form.title"
            :errors="errors ? errors.title : []"
          />
        </div>
      </div>
    </form>
  </div>
</template>
