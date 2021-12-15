import { InputHTMLAttributes } from "react";
import { ColorStyles } from "src";
import styled from "styled-components";
import { Box } from "../Box";

export const SliderContainer = styled(Box)`
  position: relative;
  height: 48px;
`;

interface SliderLabelProps {
  progress: number;
}
export const SliderLabel = styled.label<SliderLabelProps>`
  position: absolute;
  bottom: 0;
  margin-left: 16px; // offset the bunny butt width
  left: calc(${({ progress }) => progress}%);
`;

export const StyledSlider = styled.div`
  position: absolute;
  left: 14px;
  width: 100%;
`;

interface StyledInputProps extends InputHTMLAttributes<HTMLInputElement> {
  isCurrentValueMaxValue: boolean;
}

export const StyledInput = styled.input<StyledInputProps>`
  height: 33px;
  position: relative;
  cursor: pointer;
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 22px;
    height: 22px;
    border: 5px solid #ff6828;
    background-color: ${ColorStyles.WHITE};
    border-radius: 50%;
    cursor: pointer;
    transform: translate(-2px, 1px);
  }
  ::-moz-range-thumb {
    -webkit-appearance: none;
    width: 22px;
    height: 22px;
    border: 5px solid #ff6828;
    background-color: ${ColorStyles.WHITE};
    border-radius: 50%;
    cursor: pointer;
    transform: translate(-2px, 1px);
  }
  ::-ms-thumb {
    -webkit-appearance: none;
    width: 22px;
    height: 22px;
    border: 5px solid #ff6828;
    background-color: ${ColorStyles.WHITE};
    border-radius: 50%;
    cursor: pointer;
    transform: translate(-2px, 1px);
  }
`;

export const BarBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 5px;
  top: 18px;
  border-radius: 2.5px;
  background-color: ${ColorStyles.LIGHTGREY};
`;

export const BarProgress = styled.div<{ progress: number; isCurrentValueMaxValue: boolean }>`
  position: absolute;
  width: ${({ progress, isCurrentValueMaxValue }) => (isCurrentValueMaxValue ? "calc(100% - 16px)" : `${progress}%`)};
  height: 5px;
  top: 18px;
  background-color: #ff6828;
  border-radius: 2.5px;
`;
