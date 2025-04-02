<script setup lang="ts">
import type { TLanguage } from "~/types/TLanguage";

definePageMeta({
  layout: "admin",
  middleware: ["admin"],
});

const languages = ref<TLanguage[]>([]);

async function getLanguages() {
  try {
    const data = await axiosInstance.get("/admin/courses/languages");
    languages.value = data.data;
  } catch (error: any) {
    if (error.response.data.message) {
      console.log(error.response.data.message);
      useSweetAlert("error", "Error", error.response.data.message);
    }
  }
}

onMounted(() => {
  getLanguages();
});
</script>

<template>
  <div class="page-body">
    <div class="container-xl">
      <FormTable :headers="['Id', 'Name', 'Slug', 'Action']">
        <tr v-for="lang in languages" :key="lang.id">
          <td>{{ lang.id }}</td>
          <td>{{ lang.name }}</td>
          <td>{{ lang.slug }}</td>
          <td>
            <div class="d-flex gap-2">
              <span class="fa fa-edit text-primary"></span>
              <span class="fa fa-trash text-danger"></span>
            </div>
          </td>
        </tr>
      </FormTable>
    </div>
  </div>
</template>
