import { storiesOf } from "@storybook/react";
import React from "react";
import { IntlProvider } from "react-intl";

import { AddNewTile } from ".";

storiesOf("@components/atoms/AddNewTile", module)
  .addParameters({ component: AddNewTile })
  .add("default", () => (
    <IntlProvider locale="en">
      <AddNewTile type="card" />
    </IntlProvider>
  ));
