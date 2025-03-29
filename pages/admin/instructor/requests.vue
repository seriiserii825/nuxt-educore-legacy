<script setup lang="ts">
import { FormTable } from "#components";

definePageMeta({
  layout: "admin",
  middleware: ["admin"],
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
          />
        </div>
      </div>
    </div>
  </div>
</template>
