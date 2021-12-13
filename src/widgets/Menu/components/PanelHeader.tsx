import React, { useCallback } from "react";
import styled from "styled-components";
import { Flex } from "../../../components/Box";
import { PushedProps } from "../types";
import { MainDefinixImgTextIcon } from "../../../components/Icon";
import UserBlock from "./UserBlock";
import { hexToRGB } from "../../../style/mixin";
import { ColorStyles } from "../../../theme";
import { useMatchBreakpoints } from "../../../hooks";
import { useMenu } from "../MenuContext";

const MobileHeader = styled(Flex)`
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0 20px;
  border-bottom: 1px solid ${({ theme }) => hexToRGB(theme.colors[ColorStyles.LIGHTGREY], 0.5)};
`;

const StyledHeader = styled(Flex)`
  align-items: center;
  justify-content: center;
`;

const PanelHeader: React.FC = () => {
  const { isMaxLg } = useMatchBreakpoints();
  const { Link, links } = useMenu();
  const isMobile = isMaxLg;

  const link = links.find(({ label }) => label === 'Home')
  return isMobile ? (
    <MobileHeader>
      <UserBlock />
    </MobileHeader>
  ) : (
    <StyledHeader>
      <Link to={link && link.href ? link.href : '/'}>
        <MainDefinixImgTextIcon />
      </Link>
    </StyledHeader>
  );
};

export default PanelHeader;
