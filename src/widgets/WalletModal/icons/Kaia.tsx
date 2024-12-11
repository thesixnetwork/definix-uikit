import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 96 96" {...props}>
      <rect width="96" height="96" fill="#F0F4F8" />
      <path d="M24 32h48c4.42 0 8 3.58 8 8v24c0 4.42-3.58 8-8 8H24c-4.42 0-8-3.58-8-8V40c0-4.42 3.58-8 8-8z" fill="#3B82F6" />
      <path d="M24 32h48v8H24z" fill="#1E40AF" />
      <circle cx="72" cy="48" r="4" fill="#E5E7EB" />
    </Svg>
  );
};

export default Icon;
