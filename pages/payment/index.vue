<script setup lang="ts">
import {useUserStore} from '~/store/useUserStore';

definePageMeta({
  middleware: ["student"],
});
const use_store = useUserStore();
const {user, cart} = storeToRefs(use_store);
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
                  <a
                    href="#"
                    class="payment_mathod"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <img
                      src="/images/payment_1.png"
                      alt="payment"
                      class="img-fluid w-100"
                    />
                  </a>
                </div>
                <div class="col-xl-3 col-6 col-md-4 wow fadeInUp">
                  <a
                    href="#"
                    class="payment_mathod"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <img
                      src="/images/payment_2.png"
                      alt="payment"
                      class="img-fluid w-100"
                    />
                  </a>
                </div>
                <div class="col-xl-3 col-6 col-md-4 wow fadeInUp">
                  <a
                    href="#"
                    class="payment_mathod"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <img
                      src="/images/payment_3.png"
                      alt="payment"
                      class="img-fluid w-100"
                    />
                  </a>
                </div>
                <div class="col-xl-3 col-6 col-md-4 wow fadeInUp">
                  <a
                    href="#"
                    class="payment_mathod"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <img
                      src="/images/payment_4.png"
                      alt="payment"
                      class="img-fluid w-100"
                    />
                  </a>
                </div>
                <div class="col-xl-3 col-6 col-md-4 wow fadeInUp">
                  <a
                    href="#"
                    class="payment_mathod"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <img
                      src="/images/payment_4.png"
                      alt="payment"
                      class="img-fluid w-100"
                    />
                  </a>
                </div>
                <div class="col-xl-3 col-6 col-md-4 wow fadeInUp">
                  <a
                    href="#"
                    class="payment_mathod"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <img
                      src="/images/payment_5.png"
                      alt="payment"
                      class="img-fluid w-100"
                    />
                  </a>
                </div>
                <div class="col-xl-3 col-6 col-md-4 wow fadeInUp">
                  <a
                    href="#"
                    class="payment_mathod"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <img
                      src="/images/payment_6.png"
                      alt="payment"
                      class="img-fluid w-100"
                    />
                  </a>
                </div>
                <div class="col-xl-3 col-6 col-md-4 wow fadeInUp">
                  <a
                    href="#"
                    class="payment_mathod"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <img
                      src="/images/payment_7.png"
                      alt="payment"
                      class="img-fluid w-100"
                    />
                  </a>
                </div>
                <div class="col-xl-3 col-6 col-md-4 wow fadeInUp">
                  <a
                    href="#"
                    class="payment_mathod"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <img
                      src="/images/payment_8.png"
                      alt="payment"
                      class="img-fluid w-100"
                    />
                  </a>
                </div>
                <div class="col-xl-3 col-6 col-md-4 wow fadeInUp">
                  <a
                    href="#"
                    class="payment_mathod"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <img
                      src="/images/payment_1.png"
                      alt="payment"
                      class="img-fluid w-100"
                    />
                  </a>
                </div>
                <div class="col-xl-3 col-6 col-md-4 wow fadeInUp">
                  <a
                    href="#"
                    class="payment_mathod"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <img
                      src="/images/payment_2.png"
                      alt="payment"
                      class="img-fluid w-100"
                    />
                  </a>
                </div>
                <div class="col-xl-3 col-6 col-md-4 wow fadeInUp">
                  <a
                    href="#"
                    class="payment_mathod"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <img
                      src="/images/payment_3.png"
                      alt="payment"
                      class="img-fluid w-100"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-5 wow fadeInUp">
            <div class="total_payment_price">
              <h4 v-if="cart">Total Cart <span>({{ cart.length }})</span></h4>
              <ul>
                <li v-if="cart">Subtotal :<span>${{ useCartTotal(cart) }}</span></li>
              </ul>
              <a href="#" class="common_btn">now payment</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
