import React, { cloneElement, Children, ReactElement } from "react";
import StyledButtonMenu from "./StyledButtonMenu";
import { ButtonScales, ButtonVariants } from "../Button/types";
import { ButtonMenuProps } from "./types";

const ButtonMenu: React.FC<ButtonMenuProps> = ({
  activeIndex = 0,
  scale = ButtonScales.MD,
  variant = ButtonVariants.PRIMARY,
  onItemClick,
  children,
}) => {
  return (
    <StyledButtonMenu variant={variant}>
      {Children.map(children, (child: ReactElement, index) => {
        return cloneElement(child, {
          isActive: activeIndex === index,
          onClick: onItemClick ? () => onItemClick(index) : undefined,
          scale,
          variant,
        });
      })}
    </StyledButtonMenu>
  );
};

export default ButtonMenu;
