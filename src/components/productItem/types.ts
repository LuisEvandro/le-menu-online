export type ProductCategory = {
  id: number;
  name: string;
}

export type ProductItemProps = {
  title: string;
  description: string;
  image?: string;
  price: number;
  oldPrice?: number;
  handle: string;
  categories: ProductCategory[];
};