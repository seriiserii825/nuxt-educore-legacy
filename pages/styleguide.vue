<script setup lang="ts">
import {
  StyleguideBadge,
  StyleguideButtons,
  StyleguideCheckbox,
  StyleguideColors,
  StyleguideFileUpload,
  StyleguideInput,
  StyleguideRadio,
  StyleguideSelect,
  StyleguideSelectGroup,
  StyleguideSwitch,
  StyleguideTable,
  StyleguideTextarea,
} from "#components";

const router = useRouter();

const current_active = ref(0);
const layout = ref<HTMLElement | null>(null);

const components = [
  { name: "Colors", component: StyleguideColors },
  { name: "Button", component: StyleguideButtons },
  { name: "Badge", component: StyleguideBadge },
  { name: "Input", component: StyleguideInput },
  { name: "Textarea", component: StyleguideTextarea },
  { name: "Checkbox", component: StyleguideCheckbox },
  { name: "Radio", component: StyleguideRadio },
  { name: "Switch", component: StyleguideSwitch },
  { name: "Select", component: StyleguideSelect },
  { name: "Select Group", component: StyleguideSelectGroup },
  { name: "File upload", component: StyleguideFileUpload },
  { name: "Table", component: StyleguideTable },
];

function goBack() {
  router.back();
}

onMounted(() => {
  if (layout.value) {
    layout.value.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
});
</script>

<template>
  <div class="layout pt-10 pb-10" ref="layout">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <div class="d-flex gap-4 flex-wrap">
            <button
              v-for="(component, index) in components"
              :key="index"
              :class="{ active: current_active === index }"
              class="btn"
              @click="current_active = index"
            >
              {{ component.name }}
            </button>
          </div>
        </div>
        <div class="col-md-9">
          <div class="d-flex justify-content-end p-4">
            <FormBtn @emit_click="goBack">Back</FormBtn>
          </div>
          <component :is="components[current_active].component" />
        </div>
      </div>
    </div>
  </div>
</template>
