import { storiesOf } from "@storybook/react";
import React from "react";
import { IntlProvider } from "react-intl";

import { CartSummaryRow } from ".";
import { DEFAULT_PROPS } from "./fixtures";

storiesOf("@components/molecules/CartSummaryRow", module)
  .addParameters({ component: CartSummaryRow })
  .add("default", () => (
    <IntlProvider locale="en">
      <CartSummaryRow {...DEFAULT_PROPS} />
    </IntlProvider>
  ));
