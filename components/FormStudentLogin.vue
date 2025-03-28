<script setup lang="ts">
const router = useRouter();
const form = ref({
  email: "",
  password: "",
  role: 'student'
});

const errors = ref();

async function submitForm() {
  try {
    const response = await axiosInstance.post("/login", form.value);
    localStorage.setItem("token", response.data.token);
    const cookie_user = useCookie("user");
    cookie_user.value = JSON.stringify(response.data.user);
    window.location.href = "/student/dashboard";
  } catch (error) {
    errors.value = error.response.data.errors;
  }
}
</script>

<template>
  <div class="form-student-login">
    <form action="#">
      <h2>Log in as student<span>!</span></h2>
      <p class="new_user">
        New Student ? <nuxt-link to="/register">Create an Account</nuxt-link>
      </p>
      <div class="row">
        <div class="col-xl-12">
          <div class="wsus__login_form_input">
            <InputComponent
              label="Email*"
              placeholder="Email"
              name="email"
              v-model:value="form.email"
              :errors="errors ? errors.email : []"
            />
          </div>
        </div>
        <div class="col-xl-12">
          <div class="wsus__login_form_input">
            <InputComponent
              label="Password*"
              placeholder="Password"
              name="password"
              type="password"
              v-model:value="form.password"
              :errors="errors ? errors.password : []"
            />
          </div>
        </div>
        <div class="col-xl-12">
          <div class="wsus__login_form_input">
            <button
              @click.prevent="submitForm"
              type="button"
              class="common_btn"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
