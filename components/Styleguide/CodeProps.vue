<script setup lang="ts">
import type { TCodeProps } from "~/types/TCodeProps";

const props = defineProps({
  code_props: {
    type: Array as PropType<TCodeProps[]>,
    required: true,
  },
});

const has_values = computed(() => {
  return props.code_props.some((prop) => prop.values && prop.values.length > 0);
});

function showValues(values: string[]) {
  console.log(values, "values");
  return values.length > 0 ? values.join(", ") : "N/A";
}
</script>

<template>
  <div class="code-props">
    <table>
      <thead>
        <tr>
          <th>Key</th>
          <th>Type</th>
          <th>Default</th>
          <th>Required</th>
          <th v-if="has_values">Values</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(prop, index) in code_props" :key="index">
          <td>{{ prop.key }}</td>
          <td>{{ prop.value }}</td>
          <td>{{ prop.default }}</td>
          <td>{{ prop.required ? "Yes" : "No" }}</td>
          <td v-if="has_values">
            <span v-if="prop.values">{{ showValues(prop.values) }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
th {
  color: #f1f1f1;
  background-color: #555;
}
th,
td {
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
}
tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}
</style>
