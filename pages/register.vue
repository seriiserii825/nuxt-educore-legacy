<script setup lang="ts">
definePageMeta({
  layout: "auth",
});

const router = useRouter();
const form = ref({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
  role: "student",
});

const errors = ref();

async function submitForm() {
  try {
    const response = await axiosInstance.post("/register", form.value);
    localStorage.setItem("token", response.data.token);
    const cookie_user = useCookie("user");
    cookie_user.value = JSON.stringify(response.data.user);
    router.push("/");
  } catch (error) {
    errors.value = error.response.data.errors;
  }
}
</script>
<template>
  <section class="wsus__sign_in sign_up">
    <div class="row align-items-center">
      <div class="col-xxl-5 col-xl-6 col-lg-6 wow fadeInLeft">
        <div class="wsus__sign_img">
          <img
            src="/admin/images/login_img_2.jpg"
            alt="login"
            class="img-fluid"
          />
          <a href="index.html">
            <img src="/admin/images/logo.png" alt="EduCore" class="img-fluid" />
          </a>
        </div>
      </div>
      <div class="m-auto col-xxl-4 col-xl-5 col-lg-6 col-md-9 wow fadeInRight">
        <div class="wsus__sign_form_area">
          <div class="tab-content" id="pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
              tabindex="0"
            >
              <form action="#">
                <h2>Sign Up<span>!</span></h2>
                <p class="new_user">
                  Already have an account?
                  <nuxt-link href="/login">Sign In</nuxt-link>
                </p>
                <div class="row">
                  <div class="col-xl-12">
                    <div class="wsus__login_form_input">
                      <InputComponent
                        label="Full name"
                        placeholder="Full name"
                        name="name"
                        v-model:value="form.name"
                        :errors="errors ? errors.name : []"
                      />
                    </div>
                  </div>
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
                      <InputComponent
                        label="Confirm Password*"
                        placeholder="Confirm Password"
                        name="password_confirmation"
                        type="password"
                        v-model:value="form.password_confirmation"
                        :errors="[]"
                      />
                    </div>
                  </div>
                  <div class="col-xl-12">
                    <div class="wsus__login_form_input">
                      <button type="button" @click="submitForm" class="common_btn">Sign Up</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div
              class="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
              tabindex="0"
            >
              <form action="#">
                <h2>Sign Up<span>!</span></h2>
                <p class="new_user">
                  Already have an account? <a href="sign_in.html">Sign In</a>
                </p>
                <div class="row">
                  <div class="col-xl-12">
                    <div class="wsus__login_form_input">
                      <label>First name</label>
                      <input type="text" placeholder="First name" />
                    </div>
                  </div>
                  <div class="col-xl-12">
                    <div class="wsus__login_form_input">
                      <label>Last name</label>
                      <input type="text" placeholder="Last name" />
                    </div>
                  </div>
                  <div class="col-xl-12">
                    <div class="wsus__login_form_input">
                      <label>Your email</label>
                      <input type="email" placeholder="Your email" />
                    </div>
                  </div>
                  <div class="col-xl-12">
                    <div class="wsus__login_form_input">
                      <label>Password</label>
                      <input type="password" placeholder="Your password" />
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
                        <label class="form-check-label" for="flexCheckDefault1">
                          By clicking Create account, I agree that I have read
                          and accepted the <a href="#">Terms of Use</a> and
                          <a href="#">Privacy Policy.</a>
                        </label>
                      </div>
                      <button type="submit" class="common_btn">Sign Up</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a class="back_btn" href="index.html">Back to Home</a>
  </section>
</template>
