import { ArrowBottomGIcon } from "../Icon";
import { TextStyles } from "@/theme";
import React from "react";
import Button from "./Button";
import { ButtonVariants, ButtonScales } from "./types";

const DropdownButton: React.FC = ({ children }) => {
  return (
    <Button textStyle={TextStyles.R_14M} minWidth={90} endIcon={<ArrowBottomGIcon />}>
      {children}
    </Button>
  );
};

DropdownButton.defaultProps = {
  scale: ButtonScales.S40,
  variant: ButtonVariants.LINE,
};

export default DropdownButton;
