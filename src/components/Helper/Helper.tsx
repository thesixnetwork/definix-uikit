import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Flex } from "../Box";
import { Text } from "../Text";
import { HelpOnIcon } from "../Icon";
import { HelperProps } from "./types";
import { usePopper } from "react-popper";

const HelperStyled = styled(Flex)`
  position: relative;
  width: fit-content;
  align-items: center;

  &:hover > div {
    display: block;
  }
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
  padding: 12px;
  line-height: 1.5;
  padding: 8px 10px;
  border-radius: 16px;
  background: rgb(0, 0, 0, 0.6);
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.05);
  color: ${({ theme }) => theme.colors.white};
  white-space: inherit;
`;

const Helper: React.FC<HelperProps> = ({ text, position = "auto", className, ...props }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const referenceElement = useRef(null);
  const popperElement = useRef(null);
  const { styles, attributes } = usePopper(referenceElement.current, popperElement.current, {
    placement: position,
    modifiers: [
      {
        name: "preventOverflow",
        options: {
          altAxis: true, // false by default
        },
      },
      {
        name: "offset",
        options: {
          offset: [-12, 8],
        },
      },
    ],
  });

  return (
    <HelperStyled
      className={className}
      ref={referenceElement}
      onMouseEnter={() => setIsPopoverOpen(true)}
      onMouseLeave={() => setIsPopoverOpen(false)}
      {...props}
    >
      <StyledIcon width={16} height={16} />
      <div ref={popperElement} style={styles.popper} {...attributes.popper}>
        {isPopoverOpen && <PopoverStyled textStyle="R_12R">{text}</PopoverStyled>}
      </div>
    </HelperStyled>
  );
};

Helper.defaultProps = {
  position: "top",
  color: "textSubtle",
};

export default Helper;
