import React, { useState, Children, ReactElement, cloneElement } from "react";
import styled from "styled-components";
import { DropdownProps, PositionProps, Position } from "./types";

const DropdownContent = styled.div<{ position: Position; isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};

  border-radius: 8px;
  box-shadow: 0 4px 4px 0 rgba(34, 34, 34, 0.1);
  border: solid 1px ${({ theme }) => theme.colors.lightgrey};
  background-color: ${({ theme }) => theme.colors.white};

  min-width: 100%;
  flex-direction: column;
  position: absolute;
  left: 0;
  max-height: 400px;
  overflow-y: auto;
  z-index: ${({ theme }) => theme.zIndices.dropdown};

  ::-webkit-scrollbar {
    width: 0px;
  }

  ${({ position }) => `
    ${position === "top" ? "bottom" : "top"}: 100%;
    margin-${position === "top" ? "bottom" : "top"}: 4px;
  `}
`;

const Container = styled.div`
  position: relative;
  width: max-content;
  height: max-content;
`;

const Dropdown: React.FC<DropdownProps> = ({
  defaultIndex,
  isOpen,
  target,
  position = "bottom",
  children,
  onItemClick,
}) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex || 0);
  return (
    <Container>
      {target}
      <DropdownContent position={position} isOpen={isOpen}>
        {Children.map(children, (child: ReactElement, index) => {
          return cloneElement(child, {
            isActive: activeIndex === index,
            onClick: () => {
              setActiveIndex(index);
              onItemClick && onItemClick(index);
            },
          });
        })}
      </DropdownContent>
    </Container>
  );
};
Dropdown.defaultProps = {
  position: "bottom",
};

export default Dropdown;
