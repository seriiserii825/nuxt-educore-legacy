import {useUserStore} from "~/store/useUserStore";

export default async function useGetUserApi() {
  const user_store = useUserStore();
  try {
    const data = await axiosInstance.get("/user");
    const user = data.data;
    const user_cookie = useCookie("user");
    user_cookie.value = JSON.stringify(user);
    user_store.setUser(user);
  } catch (error: any) {
    console.log(error.status, "error.status");
    if (error.status === 401) {
      const user_cookie = useCookie("user");
      user_cookie.value = null;
    }
  }
}
