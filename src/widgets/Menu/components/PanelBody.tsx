import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { SvgProps } from "../../../components/Svg";
import * as IconModule from "../../../components/Icon";
import Accordion from "./Accordion";
import { MenuEntry, LinkLabel } from "./MenuEntry";
import MenuLink from "./MenuLink";
import { PanelProps, PushedProps } from "../types";
import { useMatchBreakpoints } from "../../../hooks";

interface Props extends PanelProps, PushedProps {}

const Icons = IconModule as unknown as { [key: string]: React.FC<SvgProps> };

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  margin-top: 47px;
  padding: 0 16px;

  ${({ theme }) => theme.mediaQueries.mobile} {
    margin-top: 32px;
    padding: 0 20px;
    flex: 1;
    padding-bottom: 100px;
  }

  > div {
    margin-bottom: 8px;
  }
`;

const StyledMenuLink = styled(MenuLink)`
  padding-left: 30px;
`;

const LineMenuEntry = styled(MenuEntry)`
  margin-top: 24px;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const PanelBody: React.FC<Props> = ({ isPushed, pushNav, links, Trans }) => {
  const { isMobile } = useMatchBreakpoints();
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
                    <StyledMenuLink href={item.href}>{item.label}</StyledMenuLink>
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
      <LineMenuEntry isActive={false}>
        <MenuLink href="#" onClick={() => window.open("https://klaytn.definix.com/", "_blank")}>
          <IconModule.TokenFinixIcon viewBox="0 0 24 24" width="16" height="16" />
          <LinkLabel isPushed={isPushed} ml="8px">
            <Trans i18nKey="Switch to V1" />
          </LinkLabel>
          <IconModule.ArrowRightGIcon />
        </MenuLink>
      </LineMenuEntry>
    </Container>
  );
};

export default PanelBody;
