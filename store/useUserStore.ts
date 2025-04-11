import { ref } from "vue";
import { defineStore } from "pinia";
import type { TCart, TUser } from "~/types/TUser";
import type {TOrder} from "~/types/TOrder";
export const useUserStore = defineStore("user", () => {
  const user = ref<TUser | null>(null);
  const cart = ref<TCart[] | null>(null);
  const setCart = (new_cart: TCart[]) => {
    cart.value = new_cart;
  }
  const order = ref<TOrder | null>(null);
  function setOrder(new_order: TOrder | null) {
    order.value = new_order;
  }
  return {
    user,
    setUser(newUser: TUser | null) {
      user.value = newUser;
    },
    cart,
    setCart,
    order,
    setOrder,
  };
});
