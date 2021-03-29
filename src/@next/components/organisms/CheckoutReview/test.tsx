import "jest-styled-components";

import { shallow } from "enzyme";
import React from "react";
import { IntlProvider } from "react-intl";

import { CheckoutReview } from ".";

describe("<CheckoutReview />", () => {
  it("exists", () => {
    const wrapper = shallow(
      <IntlProvider locale="en">
        <CheckoutReview />
      </IntlProvider>
    );

    expect(wrapper.exists()).toEqual(true);
  });
});
