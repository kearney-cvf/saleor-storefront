import { storiesOf } from "@storybook/react";
import React from "react";
import { IntlProvider } from "react-intl";

import { CartCostsSummary } from ".";
import { ALL_POSSIBLE_COSTS, BASIC_COSTS } from "./fixtures";

storiesOf("@components/molecules/CartCostsSummary", module)
  .addParameters({ component: CartCostsSummary })
  .add("default", () => (
    <IntlProvider locale="en">
      <CartCostsSummary {...BASIC_COSTS} />
    </IntlProvider>
  ))
  .add("full", () => (
    <IntlProvider locale="en">
      <CartCostsSummary {...ALL_POSSIBLE_COSTS} />
    </IntlProvider>
  ));
