<script setup lang="ts">
const loading = ref<boolean>(false);
const code = `
const levels = [
  { id: 1, name: "Beginner", slug: "beginner" },
  { id: 2, name: "Intermediate", slug: "intermediate" },
  { id: 3, name: "Advanced", slug: "advanced" },
];

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
              :to="/admin/courses/levels/edit/{lang.id}"
              class="fa fa-edit text-primary"
            >
            </nuxt-link>
            <span
              class="cursor-pointer fa fa-trash text-danger"
            ></span>
          </div>
        </td>
      </tr>
    </template>
  </FormTable>
</UiCard>
`;

const elem_copy = `
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
              :to="/admin/courses/levels/edit/{lang.id}"
              class="fa fa-edit text-primary"
            >
            </nuxt-link>
            <span
              class="cursor-pointer fa fa-trash text-danger"
            ></span>
          </div>
        </td>
      </tr>
    </template>
  </FormTable>
</UiCard>
`;

const levels = [
  { id: 1, name: "Beginner", slug: "beginner" },
  { id: 2, name: "Intermediate", slug: "intermediate" },
  { id: 3, name: "Advanced", slug: "advanced" },
];

const source = `
const props = defineProps({
  headers: {
    type: Array,
    required: true,
  }
});

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
`;
</script>

<template>
  <div class="buttons">
    <StyleguidePreviewCode
      @emit_click="useCopyToClipboard(elem_copy)"
      :show_copy_btn="true"
    >
      <template #default>
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
                      class="cursor-pointer fa fa-trash text-danger"
                    ></span>
                  </div>
                </td>
              </tr>
            </template>
          </FormTable>
        </UiCard>
      </template>
      <template #code>
        {{ code }}
      </template>
      <template #source>
        {{ source }}
      </template>
    </StyleguidePreviewCode>
  </div>
</template>
