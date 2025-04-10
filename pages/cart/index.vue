<script setup lang="ts">
import { useUserStore } from "~/store/useUserStore";

const user_store = useUserStore();
const { cart } = storeToRefs(user_store);
</script>

<template>
  <div class="cart">
    <UiBreadcrumb image="/images/breadcrumb_bg.jpg" title="Shopping Cart" />
    <section class="p-6 wsus__cart_view mt_120 xs_mt_100 pb_120 xs_pb_100">
      <div class="container">
        <div class="row">
          <div class="col-12 wow fadeInUp">
            <div class="cart_list">
              <div class="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th class="pro_img">Product</th>
                      <th class="pro_name"></th>
                      <th class="pro_tk">Price</th>
                      <th class="pro_icon">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    <template v-if="cart && cart.length">
                      <tr v-for="item in cart" :key="item.id">
                        <td class="pro_img">
                          <img
                            :src="item.course.thumbnail"
                            alt="product"
                            class="img-fluid w-100"
                          />
                        </td>
                        <td class="pro_name">
                          <nuxt-link :to="`/courses/${item.course.slug}`">{{
                            item.course.title
                          }}</nuxt-link>
                        </td>
                        <td class="pro_tk">
                          <h6>
                            ${{
                              item.course.discount
                                ? item.course.discount
                                : item.course.price
                            }}
                          </h6>
                        </td>
                        <td class="pro_icon">
                          <a href="#"
                            ><i class="fal fa-times" aria-hidden="true"></i
                          ></a>
                        </td>
                      </tr>
                    </template>
                    <tr v-else>
                      <td colspan="6" class="text-center">
                        <h4 class="text-danger p-8">Your cart is empty</h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-between" v-if="cart && cart.length">
          <div
            class="col-xxl-7 col-md-5 col-lg-6 wow fadeInUp"
            style="visibility: visible; animation-name: fadeInUp"
          >
            <div class="continue_shopping">
              <a href="#" class="common_btn">continue shopping</a>
            </div>
          </div>
          <div
            class="col-xxl-4 col-md-7 col-lg-6 wow fadeInUp"
            style="visibility: visible; animation-name: fadeInUp"
          >
            <div class="total_price">
              <h4>total<span>$999.00</span></h4>
              <div class="subtotal_area">
                <h5>Subtotal<span>$999.00</span></h5>
                <h6>Shipping Address</h6>
                <p>2801 Lafayette Blvd, Norfolk, Vermont 23509, united state</p>
                <h5>Subtotal<span>$999.00</span></h5>
                <a href="checkout.html" class="common_btn">proceed checkout</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss"></style>
