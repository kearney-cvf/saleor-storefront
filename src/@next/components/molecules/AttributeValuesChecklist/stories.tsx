import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";
import { IntlProvider } from "react-intl";

import { styled } from "@styles";

import { AttributeValuesChecklist } from ".";
import { DEFAULT_PROPS } from "./testData";

const Container = styled.div`
  width: 350px;
`;

storiesOf("@components/molecules/AttributeValuesChecklist", module)
  .addParameters({ component: AttributeValuesChecklist })
  .add("default", () => (
    <IntlProvider locale="en">
      <Container>
        <AttributeValuesChecklist
          {...DEFAULT_PROPS}
          onValueClick={action("click")}
        />
      </Container>
    </IntlProvider>
  ));
