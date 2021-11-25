import React from "react";
import { TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import Toast from "./Toast";
import { ToastContainerProps } from "./types";
import {
  NAV_HEIGHT_PC,
  NAV_HEIGHT_MOBILE,
  INNER_MARGIN_PC,
  INNER_MARGIN_MOBILE,
} from "../Menu/config";
import { pxToRem } from "../../style/mixin";

const ZINDEX = 1000;
const TOP_POSITION = 80; // Initial position from the top

// display: flex;
// flex-direction: row-reverse;
const StyledToastContainer = styled.div`
  .toast-group {
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - ${pxToRem(INNER_MARGIN_PC * 2)});
    height: 100%;
    margin: ${NAV_HEIGHT_PC}px ${pxToRem(INNER_MARGIN_PC)} 0;
  }

  .toast {
    position: absolute;
    top: 0;
    right: 0;

    padding-left: 16px;
    transition: transform 250ms, opacity 250ms ease-in;

    &.enter,
    &.appear {
      transform: translateX(50%);
      opacity: 0.01;
    }

    &.enter.enter-active,
    &.appear.appear-active,
    &.enter-done {
      opacity: 1;
      transform: translateX(0); 
    } 

    &.exit {
      opacity: 1;
    }

    &.exit.exit-active {
      opacity: 0.01;
      transition: opacity 250ms ease-out;
    }

    &:nth-child(2) {
      &.enter.enter-active,
      &.appear.appear-active,
      &.enter-done {
        opacity: 1;
        transform: translateX(-100%);
      }
    }
  }

  ${({ theme }) => theme.mediaQueries.mobileXl} {
    .toast-group {
      width: calc(100% - ${pxToRem(INNER_MARGIN_MOBILE * 2)});
      margin: ${NAV_HEIGHT_MOBILE}px ${pxToRem(INNER_MARGIN_MOBILE)} 0;
    }
  }

  ${({ theme }) => theme.mediaQueries.mobile} {
    .toast {
      padding-left: 0;
      padding-top: 16px;
      transition: opacity 250ms ease-in;

      &.enter {
        transform: translateX(0);
      }
      
      &.enter.enter-active,
      &.appear.appear-active {
        transition: opacity 250ms ease-in;
      }

      &.enter-done {
        transform: translateX(0);
      }

      &:nth-child(2) {
        &.enter.enter-active,
        &.appear.appear-active,
        &.enter-done {
          opacity: 1;
          transform: translateX(0) translateY(100%);
        }
      }
    }
  }
`;

const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, onRemove, ttl = 3000, stackSpacing = 24 }) => {
  return (
    <StyledToastContainer>
      <TransitionGroup className="toast-group">
        {toasts.map((toast, index) => {
          const zIndex = (ZINDEX - index).toString();
          return (
            <Toast key={toast.id} toast={toast} onRemove={onRemove} ttl={ttl} style={{ zIndex }} />
          );
        })}
      </TransitionGroup>
    </StyledToastContainer>
  );
};

export default ToastContainer;
