import { useUserStore } from "~/store/useUserStore";

export default function useLogout() {
  const router = useRouter();
  const user_store = useUserStore();
  axiosInstance
    .post("/logout")
    .then(() => {
      const cookie_user = useCookie("user");
      cookie_user.value = "";
      user_store.setUser(null);
      router.push("/");
    })
    .catch(() => {
      localStorage.removeItem("token");
      const cookie_user = useCookie("user");
      cookie_user.value = "";
      user_store.setUser(null);
      router.push("/");
    });
}
