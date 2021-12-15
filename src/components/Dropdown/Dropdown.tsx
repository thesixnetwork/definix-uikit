import React, { useState, useEffect, useRef, Children, ReactElement, cloneElement } from "react";
import styled from "styled-components";
import { layout, position as sPosition } from "styled-system";
import { DropdownProps, Position, Float } from "./types";

const DropdownContent = styled.div<{ position: Position; isOpen: boolean; float: Float }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};

  border-radius: 8px;
  box-shadow: 0 4px 4px 0 rgba(34, 34, 34, 0.1);
  border: solid 1px ${({ theme }) => theme.colors.lightgrey};
  background-color: ${({ theme }) => theme.colors.white};

  min-width: 100%;
  flex-direction: column;
  position: absolute;
  max-height: 400px;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: ${({ theme }) => theme.zIndices.dropdown};

  ::-webkit-scrollbar {
    width: 0px;
  }

  ${({ position }) => `
    ${position === "top" ? "bottom" : "top"}: 100%;
    margin-${position === "top" ? "bottom" : "top"}: 4px;
  `}
  ${({ float }) => `
    ${float}: 0;
  `}
  ${sPosition}
  ${layout}
`;

const Container = styled.div<{ width: string }>`
  position: relative;
  width: ${({ width }) => width ? width : 'max-content'};
  height: max-content;
`;

const Dropdown: React.FC<DropdownProps> = ({
  defaultIndex,
  isOpen,
  target,
  position = "bottom",
  float = "left",
  children,
  setIsOpen,
  onItemClick,
  width,
  ...props
}) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex || -1);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: Event) => {
      // e.stopImmediatePropagation();
      if (!e.target) return;
      if (!ref.current?.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);

    return () => {
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  return (
    <Container ref={ref} width={width ? width : 'auto'}>
      {cloneElement(target, {
        onClick: () => setIsOpen(!isOpen),
      })}
      <DropdownContent position={position} isOpen={isOpen} float={float} {...props}>
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
