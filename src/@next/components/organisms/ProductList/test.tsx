import "jest-styled-components";

import { mount, shallow } from "enzyme";
import React from "react";
import { IntlProvider } from "react-intl";

import { ProductList } from ".";
import { PRODUCTS } from "./fixtures";

describe("<ProductList />", () => {
  it("exists", () => {
    const wrapper = shallow(
      <IntlProvider locale="en">
        <ProductList
          products={PRODUCTS}
          canLoadMore
          loading={false}
          onLoadMore={jest.fn()}
        />
      </IntlProvider>
    );

    expect(wrapper.exists()).toEqual(true);
  });
  it("show loading", () => {
    const wrapper = mount(
      <IntlProvider locale="en">
        <ProductList
          products={PRODUCTS}
          canLoadMore
          loading
          onLoadMore={jest.fn()}
        />
      </IntlProvider>
    );

    expect(wrapper.text()).not.toContain("More +");
  });
  it("may load more", () => {
    const handleLoadMore = jest.fn();

    const wrapper = mount(
      <IntlProvider locale="en">
        <ProductList
          products={PRODUCTS}
          canLoadMore
          loading={false}
          onLoadMore={handleLoadMore}
        />
      </IntlProvider>
    );

    expect(wrapper.text()).toContain("More +");

    wrapper.find("button").simulate("click");

    expect(handleLoadMore).toHaveBeenCalled();
  });
});
