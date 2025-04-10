import { ref } from "vue";
import { defineStore } from "pinia";
import type { TCart, TUser } from "~/types/TUser";
export const useUserStore = defineStore("user", () => {
  const user = ref<TUser | null>(null);
  const cart = ref<TCart[] | null>(null);
  const setCart = (new_cart: TCart[]) => {
    cart.value = new_cart;
  }
  return {
    user,
    setUser(newUser: TUser | null) {
      user.value = newUser;
    },
    cart,
    setCart
  };
});
