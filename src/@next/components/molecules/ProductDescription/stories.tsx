import { storiesOf } from "@storybook/react";
import React from "react";
import { IntlProvider } from "react-intl";

import { ProductDescription } from ".";
import { attributes, descriptionJSON } from "./fixtures";

storiesOf("@components/molecules/ProductDescription", module)
  .addParameters({ component: ProductDescription })
  .add("default", () => (
    <IntlProvider locale="en">
      <ProductDescription
        attributes={attributes}
        description={descriptionJSON}
      />
    </IntlProvider>
  ));
