import "jest-styled-components";

import { shallow } from "enzyme";
import React from "react";
import { IntlProvider } from "react-intl";

import { CartHeader } from ".";

describe("<CartHeader />", () => {
  it("exists", () => {
    const wrapper = shallow(
      <IntlProvider locale="en">
        <CartHeader />
      </IntlProvider>
    );

    expect(wrapper.exists()).toEqual(true);
  });
});
