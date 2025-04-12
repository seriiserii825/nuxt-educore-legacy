<script setup lang="ts">
import type { TOrderResponse } from "~/types/TOrder";
definePageMeta({
  layout: "admin",
  middleware: ["admin"],
});
const route = useRoute();
const router = useRouter();
const loading = ref(false);
const order = ref<TOrderResponse>();
async function getOrder() {
  loading.value = true;
  try {
    const data = await axiosInstance.get("/admin/orders/" + route.params.id);
    order.value = data.data;
    loading.value = false;
  } catch (error) {
    console.error("Error fetching orders:", error);
    handleAxiosError(error);
    loading.value = false;
  } finally {
    loading.value = false;
  }
}

function goBack() {
  router.back();
}

const total = computed(() => {
  if (order.value && order.value.order_items) {
    return order.value.order_items.reduce((acc, item) => {
      if (item.course) {
        return acc + (item.course.discount || item.course.price);
      }
      return acc;
    }, 0);
  }
  return 0;
});

onMounted(() => {
  getOrder();
});
</script>
<template>
  <div class="page-body">
    <div class="container" v-if="order">
      <div class="wsus__dashboard_contant">
        <div class="wsus__invoice_top d-flex justify-content-between">
          <div class="wsus__invoice_logo">
            <img src="/images/logo.png" alt="logo" class="img-fluid w-100" />
          </div>
          <FormBtn @emit_click="goBack">Back</FormBtn>
        </div>
        <div class="wsus__invoice_description">
          <h4>Invoice to:</h4>
          <div class="row justify-content-between">
            <div class="col-xl-6 col-sm-6">
              <div class="wsus__invoice_address">
                <h5>{{ order?.customer.name }}</h5>
                <p>{{ order?.customer.email }}</p>
              </div>
            </div>
            <div class="col-xl-4 col-sm-5">
              <div class="wsus__invoice_date">
                <h5>
                  Invoice#<span>{{ order?.invoice_id }}</span>
                </h5>
                <h5 class="date">
                  Date<span>{{
                    useFormatDate(new Date(order?.created_at))
                  }}</span>
                </h5>
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
                      <th class="serial">Image</th>
                      <th class="serial">Invoice ID</th>
                      <th class="serial">Title</th>
                      <th class="description">Instructor</th>
                      <th class="price">Price</th>
                    </tr>
                    <template
                      v-if="order.order_items && order.order_items.length"
                    >
                      <tr v-for="item in order.order_items">
                        <td class="serial" v-if="item.course">
                          <p>
                            <img
                              :src="item.course.thumbnail"
                              :width="60"
                              alt=""
                            />
                          </p>
                        </td>
                        <td class="serial" v-if="item.course">
                          <p>{{ item.id }}</p>
                        </td>
                        <td class="serial" v-if="item.course">
                          <p>{{ item.course.title }}</p>
                        </td>
                        <td class="description" v-if="item.course">
                          <p>{{ item.course.instructor.name }}</p>
                        </td>
                        <td class="price" v-if="item.course">
                          <p v-if="item.course?.discount">
                            ${{ item.course.discount }}
                          </p>
                          <p v-else>${{ item.course.price }}</p>
                        </td>
                      </tr>
                    </template>
                    <template v-else>
                      <tr>
                        <td colspan="5" class="text-center">
                          <p>No items found</p>
                        </td>
                      </tr>
                    </template>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <canvas
          class="GenerativePattern_Canvas__Gt6G3"
          width="1227"
          height="751"
        ></canvas>
        <div class="wsus__invoice_final_total">
          <div class="row">
            <div class="col-xl-6">
              <div class="wsus__invoice_final_total_left">
                <p>Thank you for your business</p>
              </div>
            </div>
            <div class="col-xl-6">
              <div class="wsus__invoice_final_total_right">
                <h5>
                  Subtotal: <span>${{ total }}</span>
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div class="wsus__invoice_bottom">
          <p>Chisinau, Nadejda Russo 8 <span>VAT: 328416890</span></p>
        </div>
      </div>
    </div>
  </div>
</template>
