import { ColorStyles } from "../../theme";
import styled, { DefaultTheme } from "styled-components";
import { ButtonVariants } from "../Button/types";

type StyledButtonMenuProps = {
  variant: ButtonVariants;
  theme: DefaultTheme;
};

const getBackgroundColor = ({ theme }: StyledButtonMenuProps) => {
  return theme.colors[ColorStyles.WHITE];
};

const StyledButtonMenu = styled.div<{ variant: ButtonVariants }>`
  background-color: ${getBackgroundColor};
  border-radius: 16px;
  display: inline-flex;

  & > button + button,
  & > a + a {
    margin-left: 2px; // To avoid focus shadow overlap
  }
`;

export default StyledButtonMenu;
