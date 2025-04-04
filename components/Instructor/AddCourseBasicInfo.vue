<script setup lang="ts">
import { demo_video_storage_options } from '../data/demo_video_storage_options';
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

const errors = ref();

function videoStorageChange(value: string) {
  form.value.demo_video_storage = value;
}

onMounted(() => {
  form.value.demo_video_storage = demo_video_storage_options[0].value;
});
</script>

<template>
  <div class="add_course_basic_info">
    <form action="#">
      <div class="row">
        <div class="col-xl-6">
          <InputComponent
            label="Title *"
            placeholder="Title"
            v-model:value="form.title"
            :errors="errors ? errors.title : []"
          />
        </div>
        <div class="col-xl-6">
          <FormTextarea
            label="SEO Description *"
            v-model:value="form.seo_description"
            :errors="errors ? errors.seo_description : []"
          />
        </div>
        <div class="col-xl-6">
          <FormSelect
            label="Storage"
            name="demo_video_storage"
            :options="demo_video_storage_options"
            :value="form.demo_video_storage"
            @emit_select="videoStorageChange($event)"
            :errors="errors ? errors.gender : []"
          />
        </div>
        <div class="col-xl-6">
          <FormFileUpload
            label="Thumbnail *"
            name="thumbnail"
            v-model:value="form.thumbnail"
            :errors="errors ? errors.thumbnail : []"
            @emit_file="form.thumbnail = $event"
          />
        </div>
      </div>
    </form>
  </div>
</template>
