import type {TCart} from "~/types/TUser";

export default function useCartTotal(cart: TCart[]) {
  let total = 0;
  if (!cart) return total;
  cart.forEach((item: TCart) => {
    total += item.course.discount ? item.course.discount : item.course.price;
  });
  return total;
}
