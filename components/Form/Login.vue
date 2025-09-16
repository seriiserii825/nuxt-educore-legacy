<script setup lang="ts">
import axios from "axios";
import { useUserStore } from "~/store/useUserStore";

const user_store = useUserStore();
const props = defineProps({
  title: String as PropType<"Student" | "Instructor">,
  role: {
    type: String as PropType<"student" | "instructor">,
    required: true,
  },
});
const router = useRouter();
const form = ref({
  email: "",
  password: "",
  role: props.role,
});

const errors = ref();

async function submitForm() {
  try {
    const response = await axiosInstance.post("/login", form.value);
    console.log("response", response);
    localStorage.setItem("token", response.data.token);
    const cookie_user = useCookie("user");
    cookie_user.value = JSON.stringify(response.data.user);
    user_store.setUser(response.data.user);
    await useGetCart();
    if (response.data.user.role === "student") {
      router.push("/student/dashboard");
    } else {
      router.push("/instructor/dashboard");
    }
  } catch (err: any) {
    if (axios.isAxiosError(err)) {
      const msg =
        err.response?.data?.message || err.response?.data?.errors || err.message || "Network error";
      console.error(msg);
    } else {
      console.error(err);
    }
  }
}
</script>

<template>
  <div class="form-student-login">
    <form action="#">
      <h2>
        Log in as {{ role }}
        <span>!</span>
      </h2>
      <p class="new_user">
        New {{ title }} ?
        <nuxt-link to="/register">Create an Account</nuxt-link>
      </p>
      <div class="row">
        <div class="col-xl-12">
          <div class="wsus__login_form_input">
            <InputComponent
              label="Email*"
              placeholder="Email"
              name="email"
              v-model:value="form.email"
              :errors="errors ? errors.email : []" />
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
              :errors="errors ? errors.password : []" />
          </div>
        </div>
        <div class="col-xl-12">
          <div class="wsus__login_form_input">
            <button @click.prevent="submitForm" type="button" class="common_btn">Sign In</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
