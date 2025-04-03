<script setup lang="ts">
import type {TCategory} from '~/types/TCategory';


definePageMeta({
  layout: "admin",
  middleware: ["admin"],
});

const loading = ref<boolean>(false);

const categories = ref<TCategory[]>([]);

async function getLanguages() {
  loading.value = true;
  try {
    const data = await axiosInstance.get("/admin/courses/categories");
    categories.value = data.data;
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
    "Are you sure you want to delete this categoryuage?"
  );
  if (agree) {
    loading.value = true;
    try {
      const category_name = categories.value.find(
      (category: TCategory) => category.id === id
      )?.name;
      await axiosInstance.delete(`/admin/courses/categories/${id}`);
      useSweetAlert(
        "success",
        "Success",
        `${category_name} deleted successfully`
      );
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
        title="Languages"
        link_url="/admin/courses/categories/create"
        link_text="Create Level"
      >
        <FormTable
          :headers="[
            'Id',
            'Name',
            'Slug',
            'Parent Id',
            'Show at Tranding',
            'Status',
            'Action',
          ]"
        >
          <UiLoading v-if="loading" />
          <template v-else>
            <tr v-for="category in categories" :key="category.id">
              <td>{{ category.id }}</td>
              <td>{{ category.name }}</td>
              <td>{{ category.slug }}</td>
              <td>{{ category.parent_id }}</td>
              <td>
                <UiBadge
                  :text="category.show_at_tranding === 1 ? 'Yes' : 'No'"
                  :type="category.show_at_tranding === 1 ? 'success' : 'error'"
                />
              </td>
              <td>
                <UiBadge
                  :text="category.status === 1 ? 'Active' : 'Inactive'"
                  :type="category.status === 1 ? 'success' : 'error'"
                />
              </td>
              <td>
                <div class="d-flex gap-2">
                  <nuxt-link
                    :to="`/admin/courses/categories/edit/${category.id}`"
                    class="fa fa-edit text-primary"
                  >
                  </nuxt-link>
                  <span
                    @click="onDelete(category.id)"
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
