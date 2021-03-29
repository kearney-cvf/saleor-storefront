import { storiesOf } from "@storybook/react";
import React from "react";
import { IntlProvider } from "react-intl";

import { ProductList } from ".";
import { PRODUCTS } from "./fixtures";

storiesOf("@components/organisms/ProductList", module)
  .addParameters({ component: ProductList })
  .add("default", () => (
    <IntlProvider locale="en">
      <ProductList
        products={PRODUCTS}
        canLoadMore
        loading={false}
        onLoadMore={() => null}
        testingContextId="testCategory"
      />
    </IntlProvider>
  ));
