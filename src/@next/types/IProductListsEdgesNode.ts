import {
  ProductList_products_edges_node_pricing,
  ProductList_products_edges_node_thumbnail,
  ProductList_products_edges_node_thumbnail2x,
} from "@saleor/sdk/lib/queries/gqlTypes/ProductList";

export interface IProductList_products_edges_node {
  __typename: "Product";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  slug: string;
  seoDescription: string | null;
  /**
   * Whether the product is available for purchase.
   */
  // isAvailableForPurchase: boolean | null;
  /**
   * Date when product is available for purchase.
   */
  // availableForPurchase: any | null;
  seoTitle: string | null;
  /**
   * The main thumbnail for a product.
   */
  thumbnail: ProductList_products_edges_node_thumbnail | null;
  /**
   * The main thumbnail for a product.
   */
  thumbnail2x: ProductList_products_edges_node_thumbnail2x | null;
  /**
   * Lists the storefront product's pricing, the current price and discounts, only meant for displaying.
   */
  pricing: ProductList_products_edges_node_pricing | null;
}
