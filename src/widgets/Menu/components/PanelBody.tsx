import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { SvgProps } from "../../../components/Svg";
import * as IconModule from "../../../components/Icon";
import Accordion from "./Accordion";
import { MenuEntry, LinkLabel } from "./MenuEntry";
import MenuLink from "./MenuLink";
import { PanelProps, PushedProps, TranslateProps } from "../types";

interface Props extends PanelProps, PushedProps, TranslateProps {
  isMobile: boolean;
}

const Icons = IconModule as unknown as { [key: string]: React.FC<SvgProps> };

const Container = styled.div<{ isMobile: boolean }>`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  margin-top: 47px;
  padding: 0 16px;

  ${({ isMobile }) =>
    isMobile &&
    `
    margin-top: 32px;
    padding: 0 20px;
  `}

  > div {
    margin-bottom: 8px;
  }
`;

const StyledMenuLink = styled(MenuLink)`
  padding-left: 30px;
`;

const PanelBody: React.FC<Props> = ({ isPushed, pushNav, isMobile, links }) => {
  const location = useLocation();

  // Close the menu when a user clicks a link on mobile
  const handleClick = isMobile ? () => pushNav(false) : undefined;

  return (
    <Container isMobile={isMobile}>
      {links.map((entry) => {
        const isActive = entry.href === location.pathname;
        const Icon = Icons[entry.icon];
        const ActiveIcon = Icons[entry.activeIcon];
        const iconElement = <Icon width="24px" />;
        const activeIconElement = <ActiveIcon width="24px" />;
        const calloutClass = entry.calloutClass ? entry.calloutClass : undefined;

        if (entry.items) {
          const itemsMatchIndex = entry.items.findIndex((item) => item.href === location.pathname);
          const initialOpenState = entry.initialOpenState === true ? entry.initialOpenState : itemsMatchIndex >= 0;
          return (
            <Accordion
              key={entry.label}
              isPushed={isPushed}
              pushNav={pushNav}
              icon={iconElement}
              activeIcon={activeIconElement}
              label={entry.label}
              initialOpenState={initialOpenState}
              className={calloutClass}
              isActive={entry.items.some((item) => item.href === location.pathname)}
            >
              {entry.items.map((item) => {
                return (
                  <MenuEntry key={item.href} secondary isActive={item.href === location.pathname} onClick={handleClick}>
                    <StyledMenuLink href={item.href}>
                      {item.label}
                    </StyledMenuLink>
                  </MenuEntry>
                );
              })}
            </Accordion>
          );
        }
        return (
          <MenuEntry key={entry.label} isActive={isActive}>
            <MenuLink href={entry.href} onClick={handleClick}>
              {isActive ? activeIconElement : iconElement}
              <LinkLabel isPushed={isPushed} ml="6px">
                {entry.label}
              </LinkLabel>
            </MenuLink>
          </MenuEntry>
        );
      })}
    </Container>
  );
};

export default PanelBody;
