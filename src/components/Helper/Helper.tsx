import React, { useCallback, useLayoutEffect, useMemo, useRef } from "react";
import styled from "styled-components";
import { Box } from "../Box";
import { Text } from "../Text";
import { HelpOnIcon } from "../Icon";
import { HelperProps } from "./types";

const HelperStyled = styled(Box)`
  position: relative;
  width: fit-content;

  &:hover > div {
    opacity: 0.9;
    visibility: visible;
  }
`;

const PopoverStyled = styled(Text)<{ position: string }>`
  transition: 0.2s;
  width: max-content;
  max-width: 280px;
  position: absolute;
  top: ${({ position }) => (position === "top" ? "auto" : position === "bottom" ? "calc(100% + 8px)" : "auto")};
  left: ${({ position }) => (position === "left" ? "auto" : position === "right" ? "calc(100% + 8px)" : "-13px")};
  bottom: ${({ position }) => (position === "top" ? "calc(100% + 8px)" : "auto")};
  right: ${({ position }) => (position === "left" ? "calc(100% + 8px)" : "auto")};
  transform: ${({ position }) => (position === "top" || position === "bottom" ? "" : "translate(0, -50%)")};
  z-index: 1;
  font-size: 12px;
  padding: 12px;
  line-height: 1.5;
  padding: 8px 10px;
  border-radius: 16px;
  opacity: 0;
  visibility: hidden;
  background: rgb(0, 0, 0, 0.6);
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.05);
  color: ${({ theme }) => theme.colors.white};
`;

const Helper: React.FC<HelperProps> = ({ text, position = "left", className, ...props }) => {
  const popoverRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((target: HTMLDivElement) => {
    const { innerWidth, innerHeight } = window;
    const { x, right, y, bottom } = target.getBoundingClientRect();
    const { left: parentLeft, top: parentTop } = target.parentElement?.getBoundingClientRect() || {};
    const diffX = innerWidth - right;
    const left = (diffX > 0 ? Math.max(x, 10) : diffX + x - 10) - (parentLeft || 0);
    const diffY = innerHeight - bottom;
    const top = (diffY > 0 ? Math.max(y, 10) : diffY + y - 10) - (parentTop || 0);
    target.style.cssText = `left: ${left}px; top: ${top}px; bottom: auto`;
  }, []);

  const resetPosition = useCallback((target: HTMLDivElement) => {
    target.style.cssText = "";
  }, []);

  useLayoutEffect(() => {
    if (popoverRef.current) {
      updatePosition(popoverRef.current);
    }
  }, [text, position, popoverRef]);

  return (
    <HelperStyled className={className} {...props}>
      <HelpOnIcon
        width={16}
        height={16}
        onMouseEnter={() => popoverRef.current && updatePosition(popoverRef.current)}
        onMouseLeave={() => popoverRef.current && resetPosition(popoverRef.current)}
      />
      <PopoverStyled textStyle="R_12R" position={position} ref={popoverRef}>
        {text}
      </PopoverStyled>
    </HelperStyled>
  );
};

Helper.defaultProps = {
  position: "top",
  color: "textSubtle",
};

export default Helper;
