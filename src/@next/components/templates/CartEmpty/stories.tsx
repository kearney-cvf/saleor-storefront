import { storiesOf } from "@storybook/react";
import React from "react";
import { IntlProvider } from "react-intl";

import { CartEmpty } from ".";

storiesOf("@components/templates/CartEmpty", module)
  .addParameters({ component: CartEmpty })
  .add("default", () => (
    <IntlProvider locale="en">
      <CartEmpty />
    </IntlProvider>
  ));
