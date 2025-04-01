<script setup lang="ts">
import {useUserStore} from '~/store/useUserStore';
const user_store = useUserStore();
const {user} = storeToRefs(user_store);
</script>

<template>
  <ul class="wsus__dashboard_sidebar_menu">
    <UiMenuLink
      v-if="user"
      :to="
        user.role === 'student' ? '/student/dashboard' : '/instructor/dashboard'
      "
      icon="fas fa-tachometer-alt"
      text="Dashboard"
    />
    <UiMenuLink to="/student/profile" icon="fas fa-user" text="Profile" />
    <UiMenuLink to="/logout" icon="fas fa-sign-out-alt" text="Logout" />
  </ul>
</template>
