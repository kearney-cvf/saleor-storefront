// import { ProductList_products_edges_node } from "@saleor/sdk/lib/queries/gqlTypes/ProductList";
import { IProductList_products_edges_node } from "./IProductListsEdgesNode";

type WithOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type IProduct = WithOptional<
  IProductList_products_edges_node,
  "slug" | "seoTitle" | "seoDescription"
>;
