import { ref } from "vue";
import { defineStore } from "pinia";
export const useAuthStore = defineStore("auth", () => {
  type TUser = {
    id: number;
    name: string;
    email: string;
  };
  const user = ref<TUser | null>(null);
  function setUser(new_user: TUser | null) {
    user.value = new_user;
  }
  return {
    user,
    setUser,
  };
});
