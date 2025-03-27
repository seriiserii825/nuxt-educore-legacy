<script setup lang="ts">
definePageMeta({
  layout: "auth",
});
</script>

<template>
  <div class="login">
    <section class="wsus__sign_in">
      <div class="row align-items-center">
        <div class="col-xxl-5 col-xl-6 col-lg-6 wow fadeInLeft">
          <div class="wsus__sign_img">
            <img
              src="/admin/images/login_img_1.jpg"
              alt="login"
              class="img-fluid"
            />
            <a href="index.html">
              <img
                src="/admin/images/logo.png"
                alt="EduCore"
                class="img-fluid"
              />
            </a>
          </div>
        </div>
        <div
          class="col-xxl-4 col-xl-5 col-lg-6 col-md-9 m-auto wow fadeInRight"
        >
          <div class="wsus__sign_form_area">
            <ul class="nav nav-pills" id="pills-tab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                >
                  Student
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                >
                  Instructor
                </button>
              </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
              <div class="tab-pane fade show active">
                <form action="#">
                  <h2>Log in<span>!</span></h2>
                  <p class="new_user">
                    New User ? <a href="sign_up.html">Create an Account</a>
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
                        <label
                          >Password* <a href="#">Forgot Password?</a></label
                        >
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
                          <label
                            class="form-check-label"
                            for="flexCheckDefault"
                          >
                            Remember Me
                          </label>
                        </div>
                        <button type="submit" class="common_btn">
                          Sign In
                        </button>
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
              <div class="tab-pane fade">
                <form action="#">
                  <h2>Log in<span>!</span></h2>
                  <p class="new_user">
                    New User ? <a href="sign_up.html">Create an Account</a>
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
                        <label
                          >Email or Username*
                          <a href="#">Forgot Password?</a></label
                        >
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
                            id="flexCheckDefault1"
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault1"
                          >
                            Remember Me
                          </label>
                        </div>
                        <button type="submit" class="common_btn">
                          Sign In
                        </button>
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
            </div>
          </div>
        </div>
      </div>
      <a class="back_btn" href="index.html">Back to Home</a>
    </section>
  </div>
</template>
