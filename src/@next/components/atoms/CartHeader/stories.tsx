import { storiesOf } from "@storybook/react";
import React from "react";
import { IntlProvider } from "react-intl";

import { CartHeader } from ".";

storiesOf("@components/atoms/CartHeader", module)
  .addParameters({ component: CartHeader })
  .add("default", () => (
    <IntlProvider locale="en">
      <CartHeader />
    </IntlProvider>
  ));
