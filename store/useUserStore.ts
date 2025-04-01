import { ref } from "vue";
import { defineStore } from "pinia";
import type { TUser } from "~/types/TUser";
export const useUserStore = defineStore("user", () => {
  const user = ref<TUser | null>(null);
  return {
    user,
    setUser(newUser: TUser | null) {
      user.value = newUser;
    },
  };
});
