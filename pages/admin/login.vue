<script setup lang="ts">
definePageMeta({
  layout: "admin-auth",
});

const router = useRouter();
const form = ref({
  email: "",
  password: "",
  role: "admin",
});

const errors = ref();
async function submitForm() {
  try {
    const response = await axiosInstance.post("/admin/login", form.value);
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user", JSON.stringify(response.data.user));
    router.push("/");
  } catch (error) {
    errors.value = error.response.data.errors;
  }
  console.log(form.value);
}
</script>

<template>
  <div class="admin-login">
    <div class="page page-center">
      <div class="container py-4 container-tight">
        <div class="mb-4 text-center">
          <a href="." class="navbar-brand navbar-brand-autodark">
            <img
              src="/static/logo.svg"
              width="110"
              height="32"
              alt="Tabler"
              class="navbar-brand-image"
            />
          </a>
        </div>
        <div class="card card-md">
          <div class="card-body">
            <h2 class="mb-4 text-center h2">Login to your account</h2>
            <form action="./" method="get" autocomplete="off" novalidate>
              <div class="mb-3">
                <InputComponent
                  label="Email*"
                  placeholder="Email or Username"
                  name="email"
                  v-model:value="form.email"
                  :errors="errors ? errors.email : []"
                />
              </div>
              <div class="mb-2">
                <InputComponent
                  label="Password*"
                  placeholder="Password"
                  name="password"
                  type="password"
                  v-model:value="form.password"
                  :errors="errors ? errors.password : []"
                />
              </div>
              <div class="form-footer">
                <button type="button" @click="submitForm"  class="btn btn-primary w-100">
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="mt-3 text-center text-secondary">
          Go <nuxt-link to="/" tabindex="-1">Back to Home</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
