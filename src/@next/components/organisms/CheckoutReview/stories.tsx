import { storiesOf } from "@storybook/react";
import React from "react";
import { IntlProvider } from "react-intl";

import { CheckoutReview } from ".";

storiesOf("@components/organisms/CheckoutReview", module)
  .addParameters({ component: CheckoutReview })
  .add("default", () => (
    <IntlProvider locale="en">
      <CheckoutReview />
    </IntlProvider>
  ));
