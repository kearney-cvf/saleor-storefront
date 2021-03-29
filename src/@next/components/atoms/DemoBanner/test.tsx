import "jest-styled-components";

import { shallow } from "enzyme";
import React from "react";
import { IntlProvider } from "react-intl";

import { DemoBanner } from ".";

describe("<DemoBanner />", () => {
  it("exists", () => {
    const wrapper = shallow(
      <IntlProvider locale="en">
        <DemoBanner />
      </IntlProvider>
    );

    expect(wrapper.exists()).toEqual(true);
  });
});
