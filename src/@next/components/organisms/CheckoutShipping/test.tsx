import "jest-styled-components";

import { mount } from "enzyme";
import React from "react";
import { IntlProvider } from "react-intl";

import { CheckoutShipping } from ".";
import { DEFAULT_PROPS } from "./fixtures";

describe("<CheckoutShipping />", () => {
  it("renders shipping methods", () => {
    const selectShippingMethod = jest.fn();
    const wrapper = mount(
      <IntlProvider locale="en">
        <CheckoutShipping
          {...DEFAULT_PROPS}
          selectShippingMethod={selectShippingMethod}
        />
      </IntlProvider>
    );

    expect(wrapper.exists()).toEqual(true);
    const renderedText = wrapper.text();
    expect(renderedText.includes(DEFAULT_PROPS.shippingMethods[0].name)).toBe(
      true
    );
    expect(renderedText.includes(DEFAULT_PROPS.shippingMethods[1].name)).toBe(
      true
    );
  });

  it("simulates change and submit events", done => {
    const selectShippingMethod = jest.fn();
    const wrapper = mount(
      <IntlProvider locale="en">
        <CheckoutShipping
          {...DEFAULT_PROPS}
          selectShippingMethod={selectShippingMethod}
        />
      </IntlProvider>
    );

    const input = wrapper.find("input").at(0);
    const form = wrapper.find("form");
    const shippingMethodId = DEFAULT_PROPS.shippingMethods[0].id;

    input.simulate("change", {
      target: { value: shippingMethodId },
    });
    form.simulate("submit");

    // delay checking the assertion since Formik handler within component is evaluated asynchronously
    window.setTimeout(() => {
      expect(selectShippingMethod).toHaveBeenCalledWith(shippingMethodId);
      done();
    }, 0);
  });
});
