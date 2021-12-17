import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { SvgProps } from "../../../components/Svg";
import { Coin } from "../../../components/Coin";
import * as IconModule from "../../../components/Icon";
import Accordion from "./Accordion";
import { MenuEntry, LinkLabel } from "./MenuEntry";
import MenuLink from "./MenuLink";
import { PushedProps } from "../types";
import { useMatchBreakpoints } from "../../../hooks";
import { useMenu } from "../MenuContext";

interface Props extends PushedProps {}

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
  height: auto;
`;

const V1MenuLink = styled(MenuLink)`
  > svg,
  div {
    flex-shrink: 0;
    flex-wrap: wrap;
  }

  > div {
    width: 110px;
  }
`;

const PanelBody: React.FC<Props> = ({ isPushed, pushNav }) => {
  const { isMobile } = useMatchBreakpoints();
  const { links, Trans } = useMenu();
  const location = useLocation();

  // Close the menu when a user clicks a link on mobile
  const handleClick = isMobile ? () => pushNav(false) : undefined;

  return (
    <Container>
      {links.map((entry) => {
        const isActive = entry.href === location.pathname || entry.href === "/" + location.pathname.split("/")[1];
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
              activeIcon={iconElement}
              label={entry.label}
              initialOpenState={initialOpenState}
              className={calloutClass}
              isActive={entry.items.some((item) => item.href === location.pathname)}
            >
              {entry.items.map(({ href, label, ...rest }) => {
                return (
                  <MenuEntry key={href} secondary isActive={href === location.pathname} onClick={handleClick}>
                    <StyledMenuLink href={href} {...rest}>
                      {label}
                    </StyledMenuLink>
                  </MenuEntry>
                );
              })}
            </Accordion>
          );
        }
        return (
          <MenuEntry key={entry.label} isActive={isActive}>
            <MenuLink
              href={entry.href}
              onClick={handleClick}
              {...(entry.target
                ? {
                    target: entry.target,
                  }
                : {})}
            >
              {isActive ? activeIconElement : iconElement}
              <LinkLabel isPushed={isPushed} ml="6px">
                {entry.label}
              </LinkLabel>
            </MenuLink>
          </MenuEntry>
        );
      })}
      <LineMenuEntry isActive={false}>
        <V1MenuLink href={"https://klaytn.definix.com/"} target="_blank">
          <Coin symbol="FINIX" size="16px" />
          <LinkLabel isPushed={isPushed} ml="8px">
            <Trans i18nKey="Switch to G1" />
          </LinkLabel>
        </V1MenuLink>
      </LineMenuEntry>
    </Container>
  );
};

export default PanelBody;
