import "jest-styled-components";

import { shallow } from "enzyme";
import React from "react";
import { IntlProvider } from "react-intl";

import { CartEmpty } from ".";

describe("<CartEmpty />", () => {
  it("exists", () => {
    const wrapper = shallow(
      <IntlProvider locale="en">
        <CartEmpty />
      </IntlProvider>
    );

    expect(wrapper.exists()).toEqual(true);
  });
});
