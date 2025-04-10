<script setup lang="ts">
import { useUserStore } from "~/store/useUserStore";

const user_store = useUserStore();
const { user } = storeToRefs(user_store);
const dashboard_link = ref("");

onMounted(() => {
  dashboard_link.value =
    user.value && user.value.role === "student"
      ? "/student/dashboard"
      : "/instructor/dashboard";
});
</script>

<template>
  <div class="main-menu">
    <nav class="navbar navbar-expand-lg main_menu main_menu_3">
      <nuxt-link class="navbar-brand" to="/">
        <img src="/images/logo.png" alt="EduCore" class="img-fluid" />
      </nuxt-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav m-auto">
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/">Home</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/courses">Courses</nuxt-link>
          </li>
        </ul>

        <div class="right_menu">
          <div class="menu_search_btn">
            <img src="/images/search_icon.png" alt="Search" class="img-fluid" />
          </div>
          <ul class="d-flex gap-3">
            <li if="user">
              <nuxt-link class="menu_signin" to="/cart">
                <span>
                  <img
                    src="/images/cart_icon_black.png"
                    alt="user"
                    class="img-fluid"
                    />
                </span>
                <b v-if="user">{{ user.cart.length }}</b>
              </nuxt-link>
            </li>
            <li if="user && user.email">
              <span class="admin d-flex">
                <span style="text-transform: lowercase; width: auto">{{
                  user && user.email
                }}</span>
              </span>
            </li>
            <li v-if="user && user.email">
              <nuxt-link class="common_btn" :to="dashboard_link"
                >Dashboard</nuxt-link
              >
            </li>
            <li v-if="user && user.role === 'admin'">
              <nuxt-link class="common_btn_2" to="/admin">Admin</nuxt-link>
            </li>
            <li v-if="user && user.email">
              <nuxt-link class="common_btn" to="/logout">Logout</nuxt-link>
            </li>
            <li v-else>
              <nuxt-link class="common_btn" to="/login">Sign in</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="wsus__menu_3_search_area">
      <form action="#">
        <input type="text" placeholder="Search School, Online....." />
        <button class="common_btn" type="submit">Search</button>
        <span class="close_search"><i class="far fa-times"></i></span>
      </form>
    </div>
  </div>
</template>
<style>
.main-menu .nav-link {
  position: relative;
}
.main-menu .nav-link::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 4px;
  background: blue;
  opacity: 0;
}
.main-menu .router-link-active.router-link-exact-active {
  position: relative;
  color: var(--colorPrimary) !important;
  background: transparent;
}
.main-menu .router-link-active.router-link-exact-active::before {
  opacity: 1;
}
</style>
