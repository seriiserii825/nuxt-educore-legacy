export default async function useGetUserApi() {
  try {
    const data = await axiosInstance.get("/user");
    const user = data.data;
    const user_cookie = useCookie("user");
    user_cookie.value = JSON.stringify(user);
  } catch (error: any) {
    console.log(error.status, "error.status");
    if (error.status === 401) {
      const user_cookie = useCookie("user");
      user_cookie.value = null;
      localStorage.removeItem("token");
    }
  }
}
