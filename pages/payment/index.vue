<script setup lang="ts">
import { useUserStore } from "~/store/useUserStore";
definePageMeta({
  middleware: ["student"],
});
const router = useRouter();
const user_store = useUserStore();
const { order, cart } = storeToRefs(user_store);
function emitClick(title: string) {
  if (!order.value) {
    router.push("/checkout");
    useSweetAlert("error", "CheckoutFields are empty");
  }
  if (order.value) {
    user_store.setOrder({
      ...order.value,
      payment_method: title,
    });
  }
}
function onSubmit() {
  if (!order.value) {
    router.push("/checkout");
    useSweetAlert("error", "CheckoutFields are empty");
  }
  if (order.value && !order.value.payment_method) {
    useSweetAlert("error", "Please select a payment method");
  } else if (order.value && order.value.payment_method) {
    useSweetAlert("success", "Payment method selected");
  }
}
</script>
<template>
  <div class="payment">
    <UiBreadcrumb title="Payment" image="/images/breadcrumb_bg.jpg" />
    <section class="p-6 payment pt_95 xs_pt_75 pb_120 xs_pb_100">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 col-lg-7 wow fadeInUp">
            <div class="payment_area">
              <div class="row">
                <div class="col-xl-3 col-6 col-md-4 wow fadeInUp">
                  <FrontOrderPayment
                    @emit_click="emitClick"
                    :active="order?.payment_method === 'Skrill'"
                    title="Skrill"
                    image="/images/payment_1.png"
                  />
                </div>
                <div class="col-xl-3 col-6 col-md-4 wow fadeInUp">
                  <FrontOrderPayment
                    @emit_click="emitClick"
                    :active="order?.payment_method === 'Paypal'"
                    title="Paypal"
                    image="/images/payment_2.png"
                  />
                </div>
                <div class="col-xl-3 col-6 col-md-4 wow fadeInUp">
                  <FrontOrderPayment
                    @emit_click="emitClick"
                    :active="order?.payment_method === 'Mastercard'"
                    title="Mastercard"
                    image="/images/payment_3.png"
                  />
                </div>
                <div class="col-xl-3 col-6 col-md-4 wow fadeInUp">
                  <FrontOrderPayment
                    @emit_click="emitClick"
                    :active="order?.payment_method === 'Stripe'"
                    title="Stripe"
                    image="/images/payment_4.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-5 wow fadeInUp">
            <div class="total_payment_price">
              <h4 v-if="cart">
                Total Cart <span>({{ cart.length }})</span>
              </h4>
              <ul>
                <li v-if="cart">
                  Subtotal :<span>${{ useCartTotal(cart) }}</span>
                </li>
              </ul>
              <a @click.prevent="onSubmit" href="#" class="common_btn"
                >now payment</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
