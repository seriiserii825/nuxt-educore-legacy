<script setup lang="ts">
const form = ref({
  email: "",
  password: "",
});
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
              :errors="[]"
            />
          </div>
        </div>
        <div class="col-xl-12">
          <div class="wsus__login_form_input">
            <InputComponent
              label="Password*"
              placeholder="Password"
              name="password"
              v-model:value="form.password"
              :errors="[]"
            />
          </div>
        </div>
        <div class="col-xl-12">
          <div class="wsus__login_form_input">
            <button type="submit" class="common_btn">Sign In</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
