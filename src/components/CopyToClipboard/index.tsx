import React, { useState } from "react";
import styled from "styled-components";
import copy from "copy-to-clipboard";
import { CopyToClipboardProps } from "./types";
import { CopyIcon } from "../Icon";
import { IconButton } from "../Button";
import { Text } from "../Text";

const StyleButton = styled(IconButton)<{ color: string }>`
  margin-left: ${({ theme }) => theme.spacing.S_6}px;
  padding: 0;
  height: fit-content;
  color: ${({ color, theme }) => theme.colors[color]};
`;

const Tooltip = styled(Text)<{ isTooltipDisplayed: boolean }>`
  display: ${({ isTooltipDisplayed }) => (isTooltipDisplayed ? "block" : "none")};
  position: absolute;
  top: -34px;
  left: -2px;
  text-align: center;
  border-radius: 16px;
  opacity: 0.9;
  background: rgb(0, 0, 0, 0.6);
  padding: 8px 10px;
  border-radius: 8px;
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.05);
  color: ${({ theme }) => theme.colors.textInvert};
`;

const CopyToClipboard: React.FC<CopyToClipboardProps> = ({
  color = "textSubtle",
  toCopy = "Copied",
  doneMessage,
  children,
  ...props
}) => {
  const [isTooltipDisplayed, setIsTooltipDisplayed] = useState(false);

  return (
    <StyleButton
      onClick={() => {
        if (copy(toCopy)) {
          setIsTooltipDisplayed(true);
          setTimeout(() => {
            setIsTooltipDisplayed(false);
          }, 1000);
        }
      }}
      color={color}
      {...props}
    >
      {children}
      <CopyIcon width="20px" />
      <Tooltip textStyle="R_12R" isTooltipDisplayed={isTooltipDisplayed}>
        {doneMessage}
      </Tooltip>
    </StyleButton>
  );
};

export default CopyToClipboard;
