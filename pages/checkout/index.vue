<script setup lang="ts">
import { useUserStore } from "~/store/useUserStore";
import type { TOrder } from "~/types/TOrder";
definePageMeta({
  middleware: ["student"],
  layout: "student",
});

const router = useRouter();
const user_store = useUserStore();
const { user, cart } = storeToRefs(user_store);

const coupon = ref(false);

const form = ref<TOrder>({
  name: "",
  email: "",
});

const errors = ref({
  name: [],
  email: [],
});

function goToPayment() {
  if (!form.value.name) {
    errors.value.name = ["Name is required"];
  } else {
    errors.value.name = [];
  }

  if (!form.value.email) {
    errors.value.email = ["Email is required"];
  } else {
    errors.value.email = [];
  }

  if (
    errors.value.name.length || errors.value.email.length
  ) {
    return;
  }
  user_store.setOrder(form.value);
  router.push("/payment");
}

watch(
  () => user.value,
  (newUser) => {
    if (newUser) {
      form.value.name = newUser.name;
      form.value.email = newUser.email;
    }
  },
  { immediate: true }
);
</script>

<template>
  <div class="checkout">
    <UiBreadcrumb title="Checkout" image="/images/breadcrumb_bg.jpg" />
    <section class="p-6 checkout_area pt_115 xs_pt_95 pb_120 xs_pb_100">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 col-lg-7 wow fadeInUp">
            <div class="billing_details">
              <h4>Billing Details</h4>
              <form action="#">
                <div class="row">
                  <div class="col-xl-6">
                    <InputComponent
                      label="Name*"
                      v-model:value="form.name"
                      name="name"
                      :disabled="true"
                      :errors="errors ? errors.name : []"
                    />
                  </div>
                  <div class="col-xl-6">
                    <InputComponent
                      label="Email*"
                      type="email"
                      v-model:value="form.email"
                      name="email"
                      :disabled="true"
                      :errors="errors ? errors.email : []"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="col-xl-4 col-lg-5 wow fadeInUp">
            <div class="order_summary">
              <h6>Order Summary</h6>
              <div class="price">
                <h5>
                  Total:<span v-if="cart">${{ useCartTotal(cart) }}</span>
                </h5>
              </div>
              <form v-if="coupon" action="#" class="coupon_submit">
                <input type="text" placeholder="Enter coupon code" />
                <button class="common_btn">submit</button>
              </form>
              <a
                @click.prevent="goToPayment"
                class="common_btn"
                style="cursor: pointer"
                >Select Pay Method</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
