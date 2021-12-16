import React, { useState } from "react";
import styled from "styled-components";
import Slider from "./Slider";
import Flex from "../Box/Flex";

export default {
  title: "Components/Slider",
  component: Slider,
  argTypes: {},
};

const Col = styled(Flex)`
  flex-direction: column;
  width: 500px;
`;

const SliderVariant: React.FC<{ initialValue: number }> = ({ initialValue }) => {
  const [value, setValue] = useState<number>(initialValue);
  const min = 0;
  const max = 100;
  const percentage = (value / max) * 100;

  return (
    <Slider
      min={min}
      max={max}
      value={value}
      onValueChanged={setValue}
      valueLabel={value === max ? "MAX" : `${percentage}%`}
    />
  );
};

export const Default: React.FC = () => {
  const [value, setValue] = useState<number>(30);
  const min = 0;
  const max = 100;
  const percentage = (value / max) * 100;
  return (
    <Col>
      {/* <SliderVariant initialValue={5} /> */}
      <Slider
        min={min}
        max={max}
        value={value}
        onValueChanged={setValue}
        // valueLabel={value === max ? "MAX" : `${percentage}%`}
      />
    </Col>
  );
};

export const Variants: React.FC = () => {
  return (
    <Col>
      {/* <SliderVariant initialValue={0} />
      <SliderVariant initialValue={10} /> */}
    </Col>
  );
};
