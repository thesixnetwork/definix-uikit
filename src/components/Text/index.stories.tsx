import React from "react";
import { textStyle } from "../../theme/text";
import { ColorStyles } from "../../theme";
import Text from "./Text";

export default {
  title: "Components/Text",
  component: Text,
  argTypes: {
    bold: {
      name: "bold",
      table: {
        type: { summary: "bool", detail: "Bold the text" },
        defaultValue: { summary: false },
      },
      control: {
        type: null,
      },
    },
    fontSize: {
      name: "fontSize",
      table: {
        type: { summary: "string", detail: "Fontsize in px or em" },
        defaultValue: { summary: "16px" },
      },
      control: {
        type: null,
      },
    },
  },
};

export const Default: React.FC = () => {
  return (
    <div>
      <Text>Default</Text>
      {Object.keys(textStyle).map((key) => (
        <Text key={key} textStyle={key}>
          {key}
        </Text>
      ))}
      <Text backgroundColor={ColorStyles.RED} bold>
        Bold text
      </Text>
      <Text small>Small text</Text>
      <Text fontSize="24px">Custom fontsize</Text>
      <Text color="main.red">Custom color</Text>
      <Text color="main.red" textTransform="uppercase">
        with text transform
      </Text>
      <Text textAlign="center">center</Text>
    </div>
  );
};
