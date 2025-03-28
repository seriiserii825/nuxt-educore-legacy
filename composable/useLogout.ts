export default function useLogout() {
  const router = useRouter();
  axiosInstance
    .post("/logout")
    .then(() => {
      const cookie_user = useCookie("user");
      cookie_user.value = "";
      window.location.href = "/";
    })
    .catch(() => {
      localStorage.removeItem("token");
      const cookie_user = useCookie("user");
      cookie_user.value = "";
      window.location.href = "/";
    });
}
