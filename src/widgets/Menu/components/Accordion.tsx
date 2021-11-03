import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import { MENU_ENTRY_HEIGHT } from "../config";
import { LinkLabel, MenuEntry } from "./MenuEntry";
import { PushedProps } from "../types";
import { ArrowBottomGIcon, ArrowTopGIcon } from "../../../components/Icon";

interface Props extends PushedProps {
  label: string;
  icon: React.ReactElement;
  activeIcon: React.ReactElement;
  initialOpenState?: boolean;
  className?: string;
  children: ReactNode;
  isActive?: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  // Safari fix
  flex-shrink: 0;
`;

const AccordionContent = styled.div<{ isOpen: boolean; isPushed: boolean; maxHeight: number }>`
  max-height: ${({ isOpen, maxHeight }) => (isOpen ? `${maxHeight}px` : 0)};
  margin-top: 8px;
  transition: max-height 0.3s ease-out;
  overflow: hidden;
`;

const Accordion: React.FC<Props> = ({
  label,
  icon,
  activeIcon,
  isPushed,
  pushNav,
  initialOpenState = false,
  children,
  className,
  isActive,
}) => {
  const [isOpen, setIsOpen] = useState(initialOpenState);

  const handleClick = () => {
    if (isPushed) {
      setIsOpen((prevState) => !prevState);
    } else {
      pushNav(true);
      setIsOpen(true);
    }
  };

  return (
    <Container>
      <MenuEntry onClick={handleClick} className={className} isActive={false}>
        {isActive ? activeIcon : icon}
        <LinkLabel isPushed={isPushed} ml="6px">{label}</LinkLabel>
        {isOpen ? <ArrowTopGIcon /> : <ArrowBottomGIcon />}
      </MenuEntry>
      <AccordionContent
        isOpen={isOpen}
        isPushed={isPushed}
        maxHeight={React.Children.count(children) * MENU_ENTRY_HEIGHT}
      >
        {children}
      </AccordionContent>
    </Container>
  );
};

// export default React.memo(Accordion, (prev, next) => {
//   return prev.isPushed === next.isPushed && prev.isActive === next.isActive;
// });
export default Accordion;
