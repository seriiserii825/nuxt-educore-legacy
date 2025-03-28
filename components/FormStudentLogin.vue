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
    router.push("/");
  } catch (error) {
    errors.value = error.response.data.errors;
  }
  console.log(form.value);
}
</script>

<template>
  <div class="form-student-login">
    <form action="#">
      <h2>Log in as student<span>!</span></h2>
      <p class="new_user">
        New Student ? <a href="sign_up.html">Create an Account</a>
      </p>
      <div class="row">
        <div class="col-xl-12">
          <div class="wsus__login_form_input">
            <InputComponent
              label="Email*"
              placeholder="Email or Username"
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
