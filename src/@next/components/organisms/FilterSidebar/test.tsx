import "jest-styled-components";

import { shallow } from "enzyme";
import React from "react";
import { IntlProvider } from "react-intl";

import { FilterSidebar } from ".";
import { DEFAULT_PROPS } from "./testData";

const hide = jest.fn();
const onAttributeFiltersChange = jest.fn();
describe("<FilterSidebar />", () => {
  it("exists", () => {
    const wrapper = shallow(
      <IntlProvider locale="en">
        <FilterSidebar
          {...DEFAULT_PROPS}
          hide={hide}
          onAttributeFiltersChange={onAttributeFiltersChange}
        />
      </IntlProvider>
    );

    expect(wrapper.exists()).toEqual(true);
  });
});
