<script setup lang="ts">
const props = defineProps({
  title: String as PropType<"Student" | "Instructor">,
  role: String as PropType<"student" | "instructor">,
});
const router = useRouter();
const form = ref({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
  role: '',
});

const errors = ref();
const document = ref();

async function submitForm() {
  try {
    const role = props.role;
    const formData = new FormData();
    formData.append("name", form.value.name);
    formData.append("email", form.value.email);
    formData.append("password", form.value.password);
    formData.append("role", role as string);

    if (props.role === "instructor") {
      formData.append("document", document.value);
    }

    const response = await axiosInstance.post("/register", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    // const response = await axiosInstance.post("/register", form.value);
    localStorage.setItem("token", response.data.token);
    const cookie_user = useCookie("user");
    cookie_user.value = JSON.stringify(response.data.user);
    useSweetAlert("success", "Success", "You have successfully registered");
    router.push("/student/dashboard");
  } catch (error) {
    useSweetAlert("error", "Error", "Something went wrong");
    errors.value = error.response.data.errors;
  }
}
</script>

<template>
  <form action="#">
    <h2>Sign Up({{ title }})<span>!</span></h2>
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
      <div v-if="role === 'instructor'" class="col-xl-12">
        <div class="wsus__login_form_input">
          <FormFileUpload
            label="Document (pdf, doc, docx)"
            name="document"
            @emit_file="document = $event"
            :errors="errors ? errors.document : []"
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
          <button type="button" @click="submitForm" class="common_btn">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  </form>
</template>
