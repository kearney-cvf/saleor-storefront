import { OrderStatus } from "@saleor/sdk";
import { storiesOf } from "@storybook/react";
import React from "react";
import { IntlProvider } from "react-intl";

import { ThankYou } from ".";

storiesOf("@components/organisms/ThankYou", module)
  .addParameters({ component: ThankYou })
  .add("default", () => (
    <IntlProvider locale="en">
      <ThankYou
        orderStatus={OrderStatus.UNFULFILLED}
        orderNumber="#341414"
        continueShoppingUrl="/"
        orderDetailsUrl="/order/xyz"
      />
    </IntlProvider>
  ))
  .add("with order unfulfilled", () => (
    <IntlProvider locale="en">
      <ThankYou
        orderStatus={OrderStatus.UNFULFILLED}
        orderNumber="#341414"
        continueShoppingUrl="/"
        orderDetailsUrl="/order/xyz"
      />
    </IntlProvider>
  ))
  .add("with order unconfirmed", () => (
    <IntlProvider locale="en">
      <ThankYou
        orderStatus={OrderStatus.UNCONFIRMED}
        orderNumber="#341414"
        continueShoppingUrl="/"
        orderDetailsUrl="/order/xyz"
      />
    </IntlProvider>
  ));
