<script setup lang="ts">
definePageMeta({
  layout: "admin",
  middleware: ["admin"],
});
</script>

<template>
  <div class="page-body">
    <div class="container-xl">
      <div class="card">
        <div class="row g-0">
          <div class="col-12 col-md-3 border-end">
            <SettingsSidebar />
          </div>
          <div class="col-12 col-md-9 d-flex flex-column">
            <SettingsBody />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
