export type TCategory = {
  id: number;
  name: string;
  slug: string;
  image?: string;
  icon?: string;
  parent_id?: number;
  show_at_tranding?: 1 | 0;
  status?: 1 | 0;
}
