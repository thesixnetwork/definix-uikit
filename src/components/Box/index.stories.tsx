import React from "react";
import BoxComponent from "./Box";
import FlexComponent from "./Flex";
import GridComponent from "./Grid";
import Text from "../Text/Text";
import { Link } from "../Link";

export default {
  title: "Components/Primitives[NEW]",
  component: BoxComponent,
  argTypes: {},
};

export const Box: React.FC = () => {
  return (
    <div>
      <BoxComponent as="p">
        Contains background, border, layout, position, and space from{" "}
        <Link href="https://styled-system.com/api" target="_blank">
          Styled System&lsquo;s API
        </Link>
      </BoxComponent>
    </div>
  );
};

export const Flex: React.FC = () => {
  return (
    <div>
      <Text>Based on the Box component. You can apply any flexbox properties on the Flex component.</Text>
      <Link href="https://styled-system.com/api#flexbox" target="_blank">
        List of applicable props
      </Link>
      <FlexComponent justifyContent="space-between" mt="40px">
        <span>Left</span>
        <span>right</span>
      </FlexComponent>
      <FlexComponent justifyContent="center" mt="8px">
        <span>center</span>
      </FlexComponent>
    </div>
  );
};

export const Grid: React.FC = () => {
  return (
    <div>
      <Text>Grid layout</Text>
      <GridComponent gridTemplateColumns="1fr 2fr 3fr">
        <BoxComponent backgroundColor="coral">1fr</BoxComponent>
        <BoxComponent backgroundColor="pink">2fr</BoxComponent>
        <BoxComponent backgroundColor="indianred">3fr</BoxComponent>
      </GridComponent>
    </div>
  );
};
