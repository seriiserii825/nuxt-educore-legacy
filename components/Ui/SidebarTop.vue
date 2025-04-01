<script setup lang="ts">
import {useUserStore} from '~/store/useUserStore';

const runtimeConfig = useRuntimeConfig();
const user_store = useUserStore();
</script>

<template>
  <div v-if="user_store.user" class="wsus__dashboard_sidebar_top">
    <div class="dashboard_banner">
      <img
        src="/images/single_topic_sidebar_banner.jpg"
        alt="img"
        class="img-fluid"
      />
    </div>
    <div class="img">
      <img
        :src="`${runtimeConfig.public.apiBase}/${user_store.user.image}`"
        alt="profile"
        class="img-fluid w-100"
      />
    </div>
    <h4>{{ user_store.user.name }}</h4>
    <p>{{ user_store.user.role }}</p>
  </div>
</template>
