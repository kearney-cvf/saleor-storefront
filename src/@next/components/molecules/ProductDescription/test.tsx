import "jest-styled-components";

import { mount, shallow } from "enzyme";
import React from "react";
import { IntlProvider } from "react-intl";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import { defaultTheme } from "@styles";

import { ProductDescription } from ".";
import { attributes, descriptionJSON } from "./fixtures";
import * as S from "./styles";

describe("<ProductDescription />", () => {
  it("exists", () => {
    const wrapper = shallow(
      <IntlProvider locale="en">
        <ProductDescription
          attributes={attributes}
          description={descriptionJSON}
        />
      </IntlProvider>
    );

    expect(wrapper.exists()).toEqual(true);
  });

  it("renders correctly", () => {
    const tree = renderer
      .create(
        <IntlProvider locale="en">
          <ThemeProvider theme={defaultTheme}>
            <ProductDescription
              attributes={attributes}
              description={descriptionJSON}
            />
          </ThemeProvider>
        </IntlProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should show product attributes when clicking on attributes tab", () => {
    const wrapper = mount(
      <IntlProvider locale="en">
        <ProductDescription
          attributes={attributes}
          description={descriptionJSON}
        />
      </IntlProvider>
    );

    wrapper.find(S.TabTitle).at(1).simulate("click");

    attributes.forEach(attribute =>
      expect(wrapper.text()).toContain(attribute.attribute.name)
    );
  });
});
