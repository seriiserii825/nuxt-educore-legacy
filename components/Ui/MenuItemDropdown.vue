<script setup lang="ts">
type TMenuItemDropdown = {
  title: string;
  link: string;
};

const route = useRoute();

const props = defineProps({
  title: String,
  icon: String,
  items: {
    type: Array as PropType<TMenuItemDropdown[]>,
    required: true,
  },
});

const is_opened = ref(false);

onMounted(() => {
  const currentPath = route.path;
  const is_active = props.items.some((item) => item.link === currentPath);
  if (is_active) {
    is_opened.value = true;
  }
});
</script>

<template>
  <li class="nav-item dropdown">
    <a
      class="nav-link dropdown-toggle"
      @click.prevent="is_opened = !is_opened"
      href="#"
      aria-expanded="false">
      <span class="nav-link-icon d-md-none d-lg-inline-block">
        <i :class="icon"></i>
      </span>
      <span class="nav-link-title">{{ title }}</span>
    </a>
    <div class="dropdown-menu" :class="{ show: is_opened }">
      <div class="dropdown-menu-columns">
        <div class="dropdown-menu-column"></div>
        <nuxt-link v-for="item in items" :key="item.title" class="dropdown-item" :to="item.link">
          {{ item.title }}
        </nuxt-link>
      </div>
    </div>
  </li>
</template>
