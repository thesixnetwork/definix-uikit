import React, { useCallback, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { Flex } from "../Box";
import { Text } from "../Text";
import { HelpOnIcon } from "../Icon";
import { HelperProps } from "./types";
import { usePopperTooltip } from "react-popper-tooltip";

const HelperStyled = styled(Flex)`
  position: relative;
  width: fit-content;
  align-items: center;
`;

const StyledIcon = styled(HelpOnIcon)`
  cursor: pointer;
  &:hover {
    g {
      fill: currentColor;
    }
    rect {
      fill: #fff;
    }
    path {
      stroke: #fff;
    }
  }
`;

const PopoverStyled = styled(Text)`
  width: max-content;
  max-width: 280px;
  line-height: 1.5;
  padding: 8px 10px;
  border-radius: 8px;
  background: rgb(0, 0, 0, 0.6);
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.05);
  color: ${({ theme }) => theme.colors.white};
  word-break: keep-all;
`;

const Helper: React.FC<HelperProps> = ({ text, className, ...props }) => {
  const { getTooltipProps, setTooltipRef, setTriggerRef, visible } = usePopperTooltip({
    placement: "top-start",
    offset: [-12, 8],
  });

  return (
    <HelperStyled className={className} ref={setTriggerRef} {...props}>
      <StyledIcon width={16} height={16} />
      {visible &&
        createPortal(
          <div ref={setTooltipRef} {...getTooltipProps({ className: "tooltip-container" })}>
            <PopoverStyled textStyle="R_12R">{text}</PopoverStyled>
          </div>,
          document.body
        )}
    </HelperStyled>
  );
};

Helper.defaultProps = {
  color: "textSubtle",
};

export default Helper;
