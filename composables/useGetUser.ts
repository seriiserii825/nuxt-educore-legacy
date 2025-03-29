import type { TUser } from "~/types/TUser";

export default function useGetUser() {
  const userCookie = useCookie<TUser | null>("user"); // Expect string
  let user: TUser | null = null;

  try {
    user = userCookie.value ? (userCookie.value as TUser) : null;
  } catch (error) {
    console.error("Failed to parse user cookie:", error);
  }

  return user
}
