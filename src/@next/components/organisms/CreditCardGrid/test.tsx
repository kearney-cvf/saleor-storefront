import "jest-styled-components";

import { mount, shallow } from "enzyme";
import React from "react";
import { IntlProvider } from "react-intl";

import { AddNewTile, CCProviders, TileGrid } from "@components/atoms";

import { CreditCardGrid } from "./CreditCardGrid";

describe("<CreditCardGrid/>", () => {
  it("exists", () => {
    const creditCardGrid = shallow(
      <IntlProvider locale="en">
        <CreditCardGrid creditCards={[]} />
      </IntlProvider>
    );
    expect(creditCardGrid.exists()).toEqual(true);
  });

  it("should contain only AddNewTile if no credit cards provider", () => {
    const creditCardGrid = mount(
      <IntlProvider locale="en">
        <CreditCardGrid creditCards={[]} />
      </IntlProvider>
    );
    expect(creditCardGrid.find(TileGrid).props().elements.length).toBe(1);
    const firstTile = creditCardGrid.find(TileGrid).props().elements[0];
    expect((firstTile as any).type).toBe(AddNewTile);
  });
  it("should contain AddNewTile and 3 credit cards tiles for provided array with credit card details", () => {
    const visa: CCProviders = "visa";
    const ccData = {
      creditCardProvider: visa,
      expirationDate: "05/2019",
      last4Digits: 9876,
      nameOnCard: "John Doe",
    };

    const ccArray = [ccData, ccData, ccData];
    const creditCardGrid = shallow(
      // <IntlProvider locale="en">
      <CreditCardGrid creditCards={ccArray} />
      // </IntlProvider>
    );
    expect(creditCardGrid.find(TileGrid).props().elements.length).toEqual(4);
  });
});
