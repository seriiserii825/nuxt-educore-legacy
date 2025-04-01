<script setup lang="ts">
import type {TUser} from '~/types/TUser';
const user = ref<TUser | null>(null);

const runtimeConfig = useRuntimeConfig();

onMounted(() => {
  user.value = useGetUser();
});
</script>

<template>
  <div v-if="user" class="wsus__dashboard_sidebar_top">
    <div class="dashboard_banner">
      <img
        src="/images/single_topic_sidebar_banner.jpg"
        alt="img"
        class="img-fluid"
      />
    </div>
    <div class="img">
      <img
        :src="`${runtimeConfig.public.apiBase}/${user?.image}`"
        alt="profile"
        class="img-fluid w-100"
      />
    </div>
    <h4>{{ user.name }}</h4>
    <p>{{ user.role }}</p>
  </div>
</template>
