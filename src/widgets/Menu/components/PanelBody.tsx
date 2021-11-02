import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { SvgProps } from "../../../components/Svg";
import * as IconModule from "../../../components/Icon";
import Accordion from "./Accordion";
import { MenuEntry, LinkLabel } from "./MenuEntry";
import MenuLink from "./MenuLink";
import { PanelProps, PushedProps } from "../types";

interface Props extends PanelProps, PushedProps {
  isMobile: boolean;
  
}

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

const Container = styled.div`
  display: flex;
  margin-top: 47px;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  padding: 0 16px;

  > div {
    margin-bottom: 8px;
  }
`;

const StyledMenuLink = styled(MenuLink)`
  padding-left: 30px;
`

const PanelBody: React.FC<Props> = ({ isPushed, pushNav, isMobile, links }) => {
  const location = useLocation();

  // Close the menu when a user clicks a link on mobile
  const handleClick = isMobile ? () => pushNav(false) : undefined;

  return (
    <Container>
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
              isPushed={true}
              pushNav={pushNav}
              icon={iconElement}
              activeIcon={activeIconElement}
              label={entry.label}
              initialOpenState={initialOpenState}
              className={calloutClass}
              isActive={entry.items.some((item) => item.href === location.pathname)}
            >
              {entry.items.map((item) => (
                <MenuEntry key={item.href} secondary isActive={item.href === location.pathname} onClick={handleClick}>
                  <StyledMenuLink href={item.href}>{item.label}</StyledMenuLink>
                </MenuEntry>
              ))}
            </Accordion>
          );
        }
        return (
          <MenuEntry key={entry.label} isActive={isActive} className={calloutClass}>
            <MenuLink href={entry.href} onClick={handleClick}>
              {isActive ? activeIconElement : iconElement}
              <LinkLabel isPushed={isPushed} ml="6px">{entry.label}</LinkLabel>
            </MenuLink>
          </MenuEntry>
        );
      })}
    </Container>
  );
};

export default PanelBody;
