<script setup lang="ts">
import type {TLevel} from '~/types/TLevel';


definePageMeta({
  layout: "admin",
  middleware: ["admin"],
});

const loading = ref<boolean>(false);

const levels = ref<TLevel[]>([]);

async function getLanguages() {
  loading.value = true;
  try {
    const data = await axiosInstance.get("/admin/courses/levels");
    levels.value = data.data;
    setTimeout(() => {
      loading.value = false;
    }, 1000);
  } catch (error: any) {
    if (error.response.data.message) {
      console.log(error.response.data.message);
      useSweetAlert("error", "Error", error.response.data.message);
      loading.value = false;
    }
  }
}

async function onDelete(id: number) {
  const agree = await useSweetAlertConfirm(
    "Confirm",
    "Are you sure you want to delete this language?"
  );
  if (agree) {
    loading.value = true;
    try {
      const level_name = levels.value.find((lang) => lang.id === id)?.name;
      await axiosInstance.delete(`/admin/courses/levels/${id}`);
      useSweetAlert("success", "Success", `${level_name} deleted successfully`);
      await getLanguages();
      loading.value = false;
    } catch (error: any) {
      if (error.response.data.message) {
        useSweetAlert("error", "Error", error.response.data.message);
      }
      loading.value = false;
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
      <UiCard
        title="Levels"
        link_url="/admin/courses/levels/create"
        link_text="Create Level"
      >
        <FormTable :headers="['Id', 'Name', 'Slug', 'Action']">
          <UiLoading v-if="loading" />
          <template v-else>
            <tr v-for="lang in levels" :key="lang.id">
              <td>{{ lang.id }}</td>
              <td>{{ lang.name }}</td>
              <td>{{ lang.slug }}</td>
              <td>
                <div class="d-flex gap-2">
                  <nuxt-link
                    :to="`/admin/courses/levels/edit/${lang.id}`"
                    class="fa fa-edit text-primary"
                  >
                  </nuxt-link>
                  <span
                    @click="onDelete(lang.id)"
                    class="cursor-pointer fa fa-trash text-danger"
                  ></span>
                </div>
              </td>
            </tr>
          </template>
        </FormTable>
      </UiCard>
    </div>
  </div>
</template>
