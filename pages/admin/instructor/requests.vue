<script setup lang="ts">
import { FormTable } from "#components";
import type { TRequestsUser } from "~/types/TRequestUser";
import type {TSelectOption} from "~/types/TSelectOption";

definePageMeta({
  layout: "admin",
  middleware: ["admin"],
});

const is_loading = ref<boolean>(true);
const users = ref<TRequestsUser[]>([]);
const approve_status_options: TSelectOption[] = [
  { key: "initial", value: "Initial" },
  { key: "pending", value: "Pending" },
  { key: "approved", value: "Approved" },
  { key: "rejected", value: "Rejected" },
];
function stopLoading() {
  setTimeout(() => {
    is_loading.value = false;
  }, 300);
}

onMounted(async () => {
  try {
    const data = await axiosInstance.get("/admin/instructor/requests");
    users.value = data.data;
    stopLoading();
  } catch (error) {
    if (error.response.data.message) {
      console.log(error.response.data.message);
      useSweetAlert("error", "Error", error.response.data.message);
    }
    stopLoading();
  }
});
</script>

<template>
  <div class="page-body">
    <div class="container-xl">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title">Form elements</h4>
        </div>
        <div class="card-body">
          <UiLoading v-if="is_loading" />
          <FormTable
            :headers="['Id', 'Title', 'Approve Status', 'Download', 'Action']"
          >
            <template v-for="(user, index) in users" :key="index">
              <tr>
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>
                  <span class="badge bg-yellow-lt">{{
                    user.approve_status
                  }}</span>
                </td>
                <td>
                  <a href="#" download>
                    <i class="fa fa-download"></i>
                  </a>
                </td>
                <td>
                  <FormSelect
                    name="approve_status"
                    :options="approve_status_options"
                    :value="user.approve_status"
                  />
                </td>
              </tr>
            </template>
          </FormTable>
        </div>
      </div>
    </div>
  </div>
</template>
