<script setup lang="ts">
const props = defineProps({
  headers: {
    type: Array,
    required: true,
  }
});
</script>

<template>
  <div class="table-responsive">
    <table class="table table-vcenter card-table">
      <thead v-if="headers && headers.length">
        <tr>
          <th v-for="(header, index) in headers">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <slot />
      </tbody>
    </table>
  </div>
</template>
