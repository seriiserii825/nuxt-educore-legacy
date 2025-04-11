<script setup lang="ts">
import type { TOrder, TOrderResponse } from "~/types/TOrder";

definePageMeta({
  layout: "admin",
  middleware: ["admin"],
});
const loading = ref(false);

const orders = ref<TOrderResponse[]>([]);

async function getOrders() {
  loading.value = true;
  try {
    const data = await axiosInstance.get("/admin/orders");
    orders.value = data.data;
    loading.value = false;
  } catch (error) {
    console.error("Error fetching orders:", error);
    handleAxiosError(error);
    loading.value = false;
  } finally {
    loading.value = false;
  }
}
onMounted(() => {
  getOrders();
});
</script>

<template>
  <div class="page-body">
    <div class="container">
      <div class="wsus__dashboard_contant">
        <div class="wsus__invoice_top">
          <div class="wsus__invoice_logo">
            <img src="/images/logo.png" alt="logo" class="img-fluid w-100" />
          </div>
        </div>
        <div class="wsus__invoice_description">
          <h4>Invoice to:</h4>
          <div class="row justify-content-between">
            <div class="col-xl-6 col-sm-6">
              <div class="wsus__invoice_address">
                <h5>United States</h5>
                <p>7232 Broadway Suite 3087 Madison Heights, 57256</p>
              </div>
            </div>
            <div class="col-xl-4 col-sm-5">
              <div class="wsus__invoice_date">
                <h5>Invoice#<span>565487</span></h5>
                <h5 class="date">Date<span>04 / 05 / 2025</span></h5>
              </div>
            </div>
          </div>
        </div>
        <div class="wsus__invoice_table">
          <div class="row">
            <div class="col-12">
              <div class="table-responsive">
                <table class="table">
                  <tbody>
                    <tr>
                      <th class="serial">SL</th>
                      <th class="description">Item Description</th>
                      <th class="price">Price</th>
                      <th class="quantity">Quantity</th>
                      <th class="total">Total</th>
                    </tr>
                    <tr>
                      <td class="serial">
                        <p>1</p>
                      </td>
                      <td class="description">
                        <p>HTML Course</p>
                      </td>
                      <td class="price">
                        <p>$80.00</p>
                      </td>
                      <td class="quantity">
                        <p>2</p>
                      </td>
                      <td class="total">
                        <p>$160.00</p>
                      </td>
                    </tr>
                    <tr>
                      <td class="serial">
                        <p>2</p>
                      </td>
                      <td class="description">
                        <p>PHP Course</p>
                      </td>
                      <td class="price">
                        <p>$140.00</p>
                      </td>
                      <td class="quantity">
                        <p>1</p>
                      </td>
                      <td class="total">
                        <p>$140.00</p>
                      </td>
                    </tr>
                    <tr>
                      <td class="serial">
                        <p>3</p>
                      </td>
                      <td class="description">
                        <p>JAVA Course</p>
                      </td>
                      <td class="price">
                        <p>$160.00</p>
                      </td>
                      <td class="quantity">
                        <p>2</p>
                      </td>
                      <td class="total">
                        <p>$320.00</p>
                      </td>
                    </tr>
                    <tr>
                      <td class="serial">
                        <p>4</p>
                      </td>
                      <td class="description">
                        <p>C++ Course</p>
                      </td>
                      <td class="price">
                        <p>$220.00</p>
                      </td>
                      <td class="quantity">
                        <p>1</p>
                      </td>
                      <td class="total">
                        <p>$220.00</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="wsus__invoice_final_total">
          <div class="row">
            <div class="col-xl-6">
              <div class="wsus__invoice_final_total_left">
                <p>Thank you for your business</p>
              </div>
            </div>
            <div class="col-xl-6">
              <div class="wsus__invoice_final_total_right">
                <h6>Subtotal:<span>$840.00</span></h6>
                <h6>Tax:<span>$120.00</span></h6>
                <h5>Subtotal: <span>$960.00</span></h5>
              </div>
            </div>
          </div>
        </div>
        <div class="wsus__invoice_bottom">
          <p>7232 Broadway Suite 3087 <span>+880 458 321 457</span></p>
        </div>
      </div>
    </div>
  </div>
</template>
