import "jest-styled-components";

import { mount, shallow } from "enzyme";
import React from "react";
import { IntlProvider } from "react-intl";
import { components } from "react-select";

import { DropdownSelect } from ".";
import * as S from "./styles";

const DEFAULT_PROPS = {
  options: [
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
  ],
  value: null,

  onChange: jest.fn(),
};

describe("<DropdownSelect />", () => {
  it("exists", () => {
    const wrapper = shallow(
      <IntlProvider locale="en">
        <DropdownSelect {...DEFAULT_PROPS} />
      </IntlProvider>
    );

    expect(wrapper.exists()).toEqual(true);
  });

  it("should open select menu on click", () => {
    const wrapper = mount(
      <IntlProvider locale="en">
        <DropdownSelect {...DEFAULT_PROPS} />
      </IntlProvider>
    );

    wrapper.find(S.SortLine).at(0).simulate("click");

    expect(wrapper.find(components.Option).length).toEqual(3);
  });

  it("should close menu when clicking on option", () => {
    const wrapper = mount(
      <IntlProvider locale="en">
        <DropdownSelect {...DEFAULT_PROPS} />
      </IntlProvider>
    );

    wrapper.find(S.SortLine).at(0).simulate("click");
    wrapper.find(components.Option).at(0).simulate("click");

    expect(wrapper.find(components.Option).length).toEqual(0);
  });

  it("should close menu when clicking on option", () => {
    DEFAULT_PROPS.onChange.mockReset();

    const wrapper = mount(
      <IntlProvider locale="en">
        <DropdownSelect {...DEFAULT_PROPS} value={DEFAULT_PROPS.options[0]} />
      </IntlProvider>
    );

    wrapper.find(S.SortLine).at(0).simulate("click");
    wrapper.find(components.Option).at(0).simulate("click");

    expect(wrapper.text()).toContain(DEFAULT_PROPS.options[0].label);
    expect(DEFAULT_PROPS.onChange).toHaveBeenCalledTimes(1);
  });
});
