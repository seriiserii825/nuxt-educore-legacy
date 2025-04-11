import type {TCourse} from "./TCourse";
import type {TUser} from "./TUser";

export type TOrder = {
  name: string;
  email: string;
  address: string;
  phone: string;
  company: string;
  payment_method?: string;
}

export type TOrderResponse = {
  id: number;
  invoice_id: string;
  buyer_id: number;
  status: string;
  total_amount: number;
  paid_amount: number;
  has_coupon: number;
  coupon_code: null;
  coupon_amount: null;
  transaction_id: null;
  payment_method: string;
  company: string;
  address: string;
  phone: string;
  created_at: string;
  updated_at: string;
  customer: TUser;
  order_items?: TOrderItem[];
}

export type TOrderItem = {
  id: number;
  order_id: number;
  course_id: number;
  qty: number;
  price: number;
  created_at: string;
  updated_at: string;
  course?: TCourse;
}
