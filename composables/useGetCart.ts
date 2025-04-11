import { useUserStore } from "~/store/useUserStore";

export default async function useGetCart() {
  const user_store = useUserStore();
  try {
    const data = await axiosInstance.get("/cart");
    if (data.data) {
      user_store.setCart(data.data);
    } else {
      user_store.setCart([]);
    }
  } catch (error) {
    user_store.setCart([]);
    // handleAxiosError(error);
  }
}
