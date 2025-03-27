<script setup lang="ts"></script>

<template>
  <div class="form-student-login">
    <form action="#">
      <h2>Log in<span>!</span></h2>
      <p class="new_user">
        New Studet ? <a href="sign_up.html">Create an Account</a>
      </p>
      <div class="row">
        <div class="col-xl-12">
          <div class="wsus__login_form_input">
            <label>Email or Username*</label>
            <input type="text" placeholder="Email or Username" />
          </div>
        </div>
        <div class="col-xl-12">
          <div class="wsus__login_form_input">
            <label>Password* <a href="#">Forgot Password?</a></label>
            <input type="password" placeholder="Password" />
          </div>
        </div>
        <div class="col-xl-12">
          <div class="wsus__login_form_input">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Remember Me
              </label>
            </div>
            <button type="submit" class="common_btn">Sign In</button>
          </div>
        </div>
      </div>
    </form>
    <p class="or">or</p>
    <ul class="social_login d-flex flex-wrap">
      <li>
        <a href="#">
          <span
            ><img
              src="/admin/images/google_icon.png"
              alt="Google"
              class="img-fluid"
          /></span>
          Google
        </a>
      </li>
    </ul>
    <p class="create_account">
      Don't have an account?
      <a href="sign_up.html">Create free account</a>
    </p>
  </div>
</template>
