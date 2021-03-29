import {
  ProductList_products_edges_node_pricing,
  ProductList_products_edges_node_thumbnail,
  ProductList_products_edges_node_thumbnail2x,
} from "@saleor/sdk/lib/queries/gqlTypes/ProductList";

// import { ProductList_products_edges_node } from "./types";

export interface ProductList_products_edges_node {
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

export const PRODUCTS: ProductList_products_edges_node[] = [
  {
    __typename: "Product",
    id: "UHJvZHVjdDo3Mg==1",
    name: "Apple Juice",
    slug: "apple-juice",
    seoDescription: "Apple Juice Description",
    seoTitle: "Apple Juice",
    pricing: {
      __typename: "ProductPricingInfo",
      onSale: true,
      priceRange: {
        __typename: "TaxedMoneyRange",
        start: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 1.8,
            currency: "USD",
          },
          net: {
            __typename: "Money",
            amount: 1.8,
            currency: "USD",
          },
        },
        stop: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 4.2,
            currency: "USD",
          },
          net: {
            __typename: "Money",
            amount: 4.2,
            currency: "USD",
          },
        },
      },
      priceRangeUndiscounted: {
        __typename: "TaxedMoneyRange",
        start: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 3,
            currency: "USD",
          },
          net: {
            __typename: "Money",
            amount: 3,
            currency: "USD",
          },
        },
        stop: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 7,
            currency: "USD",
          },
          net: {
            __typename: "Money",
            amount: 7,
            currency: "USD",
          },
        },
      },
    },
    thumbnail: {
      __typename: "Image",
      alt: "",
      url:
        "http://localhost:8000/media/__sized__/products/saleordemoproduct_fd_juice_06_102xcfi-thumbnail-255x255.png",
    },
    thumbnail2x: {
      __typename: "Image",
      url:
        "http://localhost:8000/media/__sized__/products/saleordemoproduct_fd_juice_06_102xcfi-thumbnail-510x510.png",
    },
  },
  {
    __typename: "Product",
    id: "UHJvZHVjdDo3Mg==2",
    name: "Apple Juice",
    slug: "apple-juice",
    seoDescription: "Apple Juice Description",
    seoTitle: "Apple Juice",
    pricing: {
      __typename: "ProductPricingInfo",
      onSale: true,
      priceRange: {
        __typename: "TaxedMoneyRange",
        start: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 1.8,
            currency: "USD",
          },
          net: {
            __typename: "Money",
            amount: 1.8,
            currency: "USD",
          },
        },
        stop: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 4.2,
            currency: "USD",
          },
          net: {
            __typename: "Money",
            amount: 4.2,
            currency: "USD",
          },
        },
      },
      priceRangeUndiscounted: {
        __typename: "TaxedMoneyRange",
        start: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 3,
            currency: "USD",
          },
          net: {
            __typename: "Money",
            amount: 3,
            currency: "USD",
          },
        },
        stop: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 7,
            currency: "USD",
          },
          net: {
            __typename: "Money",
            amount: 7,
            currency: "USD",
          },
        },
      },
    },
    thumbnail: {
      __typename: "Image",
      alt: "",
      url:
        "http://localhost:8000/media/__sized__/products/saleordemoproduct_fd_juice_06_102xcfi-thumbnail-255x255.png",
    },
    thumbnail2x: {
      __typename: "Image",
      url:
        "http://localhost:8000/media/__sized__/products/saleordemoproduct_fd_juice_06_102xcfi-thumbnail-510x510.png",
    },
  },
  {
    __typename: "Product",
    id: "UHJvZHVjdDo3Mg==3",
    name: "Apple Juice",
    slug: "apple-juice",
    seoDescription: "Apple Juice Description",
    seoTitle: "Apple Juice",
    pricing: {
      __typename: "ProductPricingInfo",
      onSale: true,
      priceRange: {
        __typename: "TaxedMoneyRange",
        start: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 1.8,
            currency: "USD",
          },
          net: {
            __typename: "Money",
            amount: 1.8,
            currency: "USD",
          },
        },
        stop: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 4.2,
            currency: "USD",
          },
          net: {
            __typename: "Money",
            amount: 4.2,
            currency: "USD",
          },
        },
      },
      priceRangeUndiscounted: {
        __typename: "TaxedMoneyRange",
        start: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 3,
            currency: "USD",
          },
          net: {
            __typename: "Money",
            amount: 3,
            currency: "USD",
          },
        },
        stop: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 7,
            currency: "USD",
          },
          net: {
            __typename: "Money",
            amount: 7,
            currency: "USD",
          },
        },
      },
    },
    thumbnail: {
      __typename: "Image",
      alt: "",
      url:
        "http://localhost:8000/media/__sized__/products/saleordemoproduct_fd_juice_06_102xcfi-thumbnail-255x255.png",
    },
    thumbnail2x: {
      __typename: "Image",
      url:
        "http://localhost:8000/media/__sized__/products/saleordemoproduct_fd_juice_06_102xcfi-thumbnail-510x510.png",
    },
  },
  {
    __typename: "Product",
    id: "UHJvZHVjdDo3Mg==4",
    name: "Apple Juice",
    slug: "apple-juice",
    seoDescription: "Apple Juice Description",
    seoTitle: "Apple Juice",
    pricing: {
      __typename: "ProductPricingInfo",
      onSale: true,
      priceRange: {
        __typename: "TaxedMoneyRange",
        start: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 1.8,
            currency: "USD",
          },
          net: {
            __typename: "Money",
            amount: 1.8,
            currency: "USD",
          },
        },
        stop: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 4.2,
            currency: "USD",
          },
          net: {
            __typename: "Money",
            amount: 4.2,
            currency: "USD",
          },
        },
      },
      priceRangeUndiscounted: {
        __typename: "TaxedMoneyRange",
        start: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 3,
            currency: "USD",
          },
          net: {
            __typename: "Money",
            amount: 3,
            currency: "USD",
          },
        },
        stop: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 7,
            currency: "USD",
          },
          net: {
            __typename: "Money",
            amount: 7,
            currency: "USD",
          },
        },
      },
    },
    thumbnail: {
      __typename: "Image",
      alt: "",
      url:
        "http://localhost:8000/media/__sized__/products/saleordemoproduct_fd_juice_06_102xcfi-thumbnail-255x255.png",
    },
    thumbnail2x: {
      __typename: "Image",
      url:
        "http://localhost:8000/media/__sized__/products/saleordemoproduct_fd_juice_06_102xcfi-thumbnail-510x510.png",
    },
  },
  {
    __typename: "Product",
    id: "UHJvZHVjdDo3Mg==5",
    name: "Apple Juice",
    slug: "apple-juice",
    seoDescription: "Apple Juice Description",
    seoTitle: "Apple Juice",
    pricing: {
      __typename: "ProductPricingInfo",
      onSale: true,
      priceRange: {
        __typename: "TaxedMoneyRange",
        start: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 1.8,
            currency: "USD",
          },
          net: {
            __typename: "Money",
            amount: 1.8,
            currency: "USD",
          },
        },
        stop: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 4.2,
            currency: "USD",
          },
          net: {
            __typename: "Money",
            amount: 4.2,
            currency: "USD",
          },
        },
      },
      priceRangeUndiscounted: {
        __typename: "TaxedMoneyRange",
        start: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 3,
            currency: "USD",
          },
          net: {
            __typename: "Money",
            amount: 3,
            currency: "USD",
          },
        },
        stop: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 7,
            currency: "USD",
          },
          net: {
            __typename: "Money",
            amount: 7,
            currency: "USD",
          },
        },
      },
    },
    thumbnail: {
      __typename: "Image",
      alt: "",
      url:
        "http://localhost:8000/media/__sized__/products/saleordemoproduct_fd_juice_06_102xcfi-thumbnail-255x255.png",
    },
    thumbnail2x: {
      __typename: "Image",
      url:
        "http://localhost:8000/media/__sized__/products/saleordemoproduct_fd_juice_06_102xcfi-thumbnail-510x510.png",
    },
  },
  {
    __typename: "Product",
    id: "UHJvZHVjdDo3Mg==6",
    name: "Apple Juice",
    slug: "apple-juice",
    seoDescription: "Apple Juice Description",
    seoTitle: "Apple Juice",
    pricing: {
      __typename: "ProductPricingInfo",
      onSale: true,
      priceRange: {
        __typename: "TaxedMoneyRange",
        start: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 1.8,
            currency: "USD",
          },
          net: {
            __typename: "Money",
            amount: 1.8,
            currency: "USD",
          },
        },
        stop: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 4.2,
            currency: "USD",
          },
          net: {
            __typename: "Money",
            amount: 4.2,
            currency: "USD",
          },
        },
      },
      priceRangeUndiscounted: {
        __typename: "TaxedMoneyRange",
        start: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 3,
            currency: "USD",
          },
          net: {
            __typename: "Money",
            amount: 3,
            currency: "USD",
          },
        },
        stop: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 7,
            currency: "USD",
          },
          net: {
            __typename: "Money",
            amount: 7,
            currency: "USD",
          },
        },
      },
    },
    thumbnail: {
      __typename: "Image",
      alt: "",
      url:
        "http://localhost:8000/media/__sized__/products/saleordemoproduct_fd_juice_06_102xcfi-thumbnail-255x255.png",
    },
    thumbnail2x: {
      __typename: "Image",
      url:
        "http://localhost:8000/media/__sized__/products/saleordemoproduct_fd_juice_06_102xcfi-thumbnail-510x510.png",
    },
  },
];
