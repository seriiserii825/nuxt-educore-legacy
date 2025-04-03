<script setup lang="ts">
definePageMeta({
  layout: "admin",
  middleware: ["admin"],
});

const router = useRouter();

const form = ref({
  name: "",
  show_at_tranding: 0,
  status: 1,
  image: null as File | null,
  icon: null as File | null,
});

const errors = ref();

function emitImage(file: File) {
  form.value.image = file;
}
function emitIcon(file: File) {
  form.value.icon = file;
}

function emitTrending(checked: boolean) {
  form.value.show_at_tranding = checked ? 1 : 0;
}

function emitStatus(checked: boolean) {
  form.value.status = checked ? 1 : 0;
}
async function submitForm() {
  const formData = new FormData();
  formData.append("name", form.value.name);
  if (form.value.image) {
    formData.append("image", form.value.image);
  }
  if (form.value.icon) {
    formData.append("icon", form.value.icon);
  }
  formData.append("show_at_tranding", form.value.show_at_tranding);
  formData.append("status", form.value.status);

  try {
    await axiosInstance.post("/admin/courses/categories", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    useSweetAlert("success", "Success", "Language created successfully");
    router.push("/admin/courses/categories");
  } catch (error) {
    errors.value = error.response.data.errors;
    for (const key in errors.value) {
      useSweetAlert("error", "Error", errors.value[key][0]);
    }
  }
}
</script>

<template>
  <div class="page-body">
    <div class="container-xl">
      <UiCard
        title="Create Category"
        link_text="back"
        link_url="/admin/courses/categories"
      >
        <div class="row">
          <div class="mb-3 col-xl-6">
            <div class="wsus__login_form_input">
              <InputComponent
                label="Name"
                placeholder="name"
                name="name"
                v-model:value="form.name"
                :errors="errors ? errors.name : []"
              />
            </div>
          </div>
          <div class="mb-3 col-xl-3">
            <div class="wsus__login_form_input">
              <FormFileUpload
                label="Image"
                name="image"
                @emit_file="emitImage"
                :errors="errors ? errors.image : []"
              />
            </div>
          </div>
          <div class="mb-3 col-xl-3">
            <div class="wsus__login_form_input">
              <FormFileUpload
                label="Icon"
                name="icon"
                @emit_file="emitIcon"
                :errors="errors ? errors.icon : []"
              />
            </div>
          </div>
          <div class="mb-3 col-xl-3">
            <div class="wsus__login_form_input">
              <FormSwitch
                label="Show at trending"
                name="show_at_tranding"
                :checked="Boolean(form.show_at_tranding)"
                :errors="errors ? errors.show_at_tranding : []"
                @emit_checked="emitTrending"
              />
            </div>
          </div>
          <div class="mb-3 col-xl-3">
            <div class="wsus__login_form_input">
              <FormSwitch
                label="Status"
                name="status"
                :checked="Boolean(form.status)"
                :errors="errors ? errors.status : []"
                @emit_checked="emitStatus"
              />
            </div>
          </div>
        </div>
        <div class="col-xl-12">
          <button @click="submitForm" class="btn btn-primary">Create</button>
        </div>
      </UiCard>
    </div>
  </div>
</template>
