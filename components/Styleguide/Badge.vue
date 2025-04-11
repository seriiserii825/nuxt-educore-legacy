<script setup lang="ts">
const btn_code = `
<UiBadge
  :text="category.show_at_tranding === 1 ? 'Yes' : 'No'"
  :type="category.show_at_tranding === 1 ? 'success' : 'error'"
/>
`;

const badge_success = `
<UiBadge text="Badge" :type="'success'"/>
`
const badge_error = `
<UiBadge text="Badge" :type="'error'"/>
`

const badge_warning = `
<UiBadge text="Badge" :type="'warning'"/>
`

const badge_info = `
<UiBadge text="Badge" :type="'info'"/>
`

const btn_source = `
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  type: {
    type: String as () => "success" | "error" | "warning" | "info",
    required: true,
  },
});
const class_name = ref("");

onMounted(() => {
  switch (props.type) {
    case "success":
      class_name.value = "success";
      break;
    case "error":
      class_name.value = "error";
      break;
    case "warning":
      class_name.value = "warning";
      break;
    case "info":
      class_name.value = "info";
      break;
  }
});

  <span class="custom-badge" :class="class_name">{{ text }}</span>

.custom-badge {
  justify-content: center;
  align-items: center;
  padding: 0.4em 0.8em;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: white;
  border-radius: 0.25em;
}
.custom-badge.success {
  background-color: green;
}
.custom-badge.error {
  background-color: red;
}
.custom-badge.warning {
  background-color: orange;
}
.custom-badge.info {
  background-color: blue;
}
`;
</script>

<template>
  <div class="buttons">
    <StyleguidePreviewCode>
      <template #default>
        <div @click="useCopyToClipboard(badge_success)">
        <UiBadge
          text="Badge"
          :type="'success'"
        />
        </div>
        <div @click="useCopyToClipboard(badge_error)">
        <UiBadge
          text="Badge"
          :type="'error'"
        />
        </div>
        <div @click="useCopyToClipboard(badge_warning)">
        <UiBadge
          text="Badge"
          :type="'warning'"
        />
        </div>
        <div @click="useCopyToClipboard(badge_info)">
        <UiBadge
          text="Badge"
          :type="'info'"
        />
        </div>
      </template>
      <template #code>
        {{ btn_code }}
      </template>
      <template #source>
        {{ btn_source }}
      </template>
    </StyleguidePreviewCode>
  </div>
</template>
