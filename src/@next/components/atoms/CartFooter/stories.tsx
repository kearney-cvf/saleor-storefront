import { storiesOf } from "@storybook/react";
import React from "react";
import { IntlProvider } from "react-intl";

import { CartFooter } from ".";
import { ALL_POSSIBLE_COSTS, BASIC_COSTS } from "./fixtures";

storiesOf("@components/atoms/CartFooter", module)
  .addParameters({ component: CartFooter })
  .add("default", () => (
    <IntlProvider locale="en">
      <CartFooter {...BASIC_COSTS} />
    </IntlProvider>
  ))
  .add("full", () => (
    <IntlProvider locale="en">
      <CartFooter {...ALL_POSSIBLE_COSTS} />
    </IntlProvider>
  ));
