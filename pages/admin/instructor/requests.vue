<script setup lang="ts">
import { FormTable } from "#components";
import type { TRequestsUser } from "~/types/TRequestUser";

definePageMeta({
  layout: "admin",
  middleware: ["admin"],
});

const users = ref<TRequestsUser[]>([]);

onMounted(async () => {
  try {
    const data = await axiosInstance.get("/admin/instructor/requests");
    users.value = data.data;
  } catch (error) {
    if(error.response.data.message) {
      console.log(error.response.data.message);
      useSweetAlert("error", "Error", error.response.data.message);
    }
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
          <FormTable
            :headers="['Id', 'Title', 'Approve Status', 'Download', 'Action']"
            >
            <template v-for="(user, index) in users" :key="index">
              <tr>
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td><span class="badge bg-yellow-lt">{{ user.approve_status }}</span></td>
                <td>
                  <a href="#" download>
                    <i class="fa fa-download"></i>
                  </a>
                </td>
                <td>
                  <button class="btn btn-outline-info">Approve</button>
                </td>
              </tr>
            </template>
          </FormTable>
        </div>
      </div>
    </div>
  </div>
</template>
