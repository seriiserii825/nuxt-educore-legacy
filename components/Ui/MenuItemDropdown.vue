<script setup lang="ts">
type TMenuItemDropdown = {
  title: string;
  link: string;
};

const props = defineProps({
  title: String,
  icon: String,
  items: Array as PropType<TMenuItemDropdown[]>,
});
</script>

<template>
  <li class="nav-item dropdown">
    <a
      class="nav-link dropdown-toggle"
      href="#navbar-base"
      data-bs-toggle="dropdown"
      data-bs-auto-close="false"
      role="button"
      aria-expanded="false"
    >
      <span class="nav-link-icon d-md-none d-lg-inline-block">
        <i :class="icon"></i>
      </span>
      <span class="nav-link-title">{{ title }}</span>
    </a>
    <div class="dropdown-menu">
      <div class="dropdown-menu-columns">
        <div class="dropdown-menu-column"></div>
        <nuxt-link
          v-for="item in items"
          :key="item.title"
          class="dropdown-item"
          :to="item.link"
        >
          {{ item.title }}
        </nuxt-link>
      </div>
    </div>
  </li>
</template>
