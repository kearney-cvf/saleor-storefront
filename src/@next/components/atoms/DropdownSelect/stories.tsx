import { storiesOf } from "@storybook/react";
import React from "react";
import { IntlProvider } from "react-intl";

import { DropdownSelect } from ".";

const options = [
  {
    label: "Alphabetically",
    value: { field: "NAME", direction: "ASC" },
  },
  {
    label: "Price - High to Low",
    value: { field: "PRICE", direction: "DESC" },
  },
  {
    label: "Price - Low to High",
    value: { field: "PRICE", direction: "ASC" },
  },
];

const Container = () => {
  const [value, setValue] = React.useState();
  return (
    <IntlProvider locale="en">
      <DropdownSelect options={options} value={value} onChange={setValue} />
    </IntlProvider>
  );
};

storiesOf("@components/atoms/DropdownSelect", module)
  .addParameters({ component: DropdownSelect })
  .add("default", () => <Container />);
