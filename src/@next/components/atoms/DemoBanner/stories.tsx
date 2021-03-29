import { storiesOf } from "@storybook/react";
import React from "react";
import { IntlProvider } from "react-intl";

import { DemoBanner } from ".";

storiesOf("@components/atoms/DemoBanner", module).add("default", () => (
  <IntlProvider locale="en">
    <DemoBanner />
  </IntlProvider>
));
