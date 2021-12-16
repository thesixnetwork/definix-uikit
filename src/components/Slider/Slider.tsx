import React, { ChangeEvent, useCallback, useMemo } from "react";
import { SliderContainer, StyledSlider, BarBackground, BarProgress, StyledInput } from "./styles";
import { SliderProps } from "./types";

const Slider: React.FC<SliderProps> = ({ min, max, value, onValueChanged, valueLabel, ...props }) => {
  const handleChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      if (onValueChanged) {
        onValueChanged(parseInt(target.value, 10));
      }
    },
    [onValueChanged]
  );
  const progressPercentage = useMemo(() => (value / max) * 100, [value, max]);
  const isCurrentValueMaxValue = useMemo(() => value === max, [value, max]);

  return (
    <SliderContainer>
      <StyledSlider>
        <BarBackground />
        <BarProgress isCurrentValueMaxValue={isCurrentValueMaxValue} progress={progressPercentage} />
        <StyledInput
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={handleChange}
          isCurrentValueMaxValue={isCurrentValueMaxValue}
        />
      </StyledSlider>
    </SliderContainer>
  );
};

export default Slider;
