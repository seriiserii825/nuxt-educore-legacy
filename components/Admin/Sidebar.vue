<script setup lang="ts"></script>

<template>
  <aside class="navbar navbar-vertical navbar-expand-lg" data-bs-theme="dark">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#sidebar-menu"
        aria-controls="sidebar-menu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <h1 class="navbar-brand navbar-brand-autodark">
        <nuxt-link to="/">
          <img
            src="/static/logo.svg"
            width="110"
            height="32"
            alt="Tabler"
            class="navbar-brand-image"
          />
        </nuxt-link>
      </h1>
      <div class="collapse navbar-collapse" id="sidebar-menu">
        <ul class="navbar-nav pt-lg-3">
          <UiMenuItem title="Dashboard" icon="fa fa-home" url="/admin" />
          <UiMenuItemDropdown
            title="Requests"
            icon="fa fa-cube"
            :items="[{ title: 'All', link: '/admin/instructor/requests' }]"
          />
          <UiMenuItemDropdown
            title="Course"
            icon="fa fa-cube"
            :items="[
              { title: 'Courses', link: '/admin/courses/courses' },
              { title: 'Languages', link: '/admin/courses/languages' },
              { title: 'Levels', link: '/admin/courses/levels' },
              { title: 'Categories', link: '/admin/courses/categories' },
            ]"
          />
          <UiMenuItem title="Orders" icon="fa fa-home" url="/admin/orders" />
        </ul>
      </div>
    </div>
  </aside>
</template>
