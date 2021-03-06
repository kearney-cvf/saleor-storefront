import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";
import { IntlProvider } from "react-intl";

import { CheckoutShipping } from ".";
import { DEFAULT_PROPS } from "./fixtures";

storiesOf("@components/organisms/CheckoutShipping", module)
  .addParameters({ component: CheckoutShipping })
  .add("default", () => (
    <IntlProvider locale="en">
      <CheckoutShipping
        {...DEFAULT_PROPS}
        selectShippingMethod={action("selectShippingMethod has been called")}
      />
    </IntlProvider>
  ));
