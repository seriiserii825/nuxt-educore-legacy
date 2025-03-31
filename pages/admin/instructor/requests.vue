<script setup lang="ts">
import { FormTable } from "#components";
import type { TRequestsUser } from "~/types/TRequestUser";
import type { TSelectOption } from "~/types/TSelectOption";

definePageMeta({
  layout: "admin",
  middleware: ["admin"],
});

const runtimeConfig = useRuntimeConfig();
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

function onChange(value: string, id: number) {
  updateRequestStatus(id, value);
}

async function updateRequestStatus(id: number, status: string) {
  try {
    const data = await axiosInstance.put(`/admin/instructor/requests/${id}`, {
      approve_status: status,
    });
    useSweetAlert("success", "Success", data.data.message);
    await getRequests();
    stopLoading();
  } catch (error) {
    if (error.response.data.message) {
      console.log(error.response.data.message);
      useSweetAlert("error", "Error", error.response.data.message);
    }
    stopLoading();
  }
}

async function getRequests() {
  is_loading.value = true;
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
}

onMounted(async () => {
  await getRequests();
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
            :headers="[
              'Id',
              'Title',
              'Email',
              'Approve Status',
              'Download',
              'Action',
            ]"
          >
            <template v-for="user in users" :key="user.id">
              <tr>
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>
                  <span
                    v-if="user.approve_status === 'pending'"
                    class="badge bg-yellow-lt"
                    >{{ user.approve_status }}</span
                  >
                  <span
                    v-if="user.approve_status === 'rejected'"
                    class="badge bg-red-lt"
                    >{{ user.approve_status }}</span
                  >
                </td>
                <td>
                  <a
                    target="_blank"
                    :href="`${runtimeConfig.public.apiBase}${user.document}`"
                  >
                    <i class="fa fa-download"></i>
                  </a>
                </td>
                <td>
                  <FormSelect
                    name="approve_status"
                    :options="approve_status_options"
                    :value="user.approve_status"
                    @emit_select="onChange($event, user.id)"
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
