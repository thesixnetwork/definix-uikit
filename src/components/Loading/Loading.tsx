import React from "react";
import { GroupIcon } from "../Icon";
import styled, { keyframes, css } from "styled-components";
import {
  NAV_HEIGHT_PC,
  NAV_HEIGHT_MOBILE,
  INNER_MARGIN_PC,
  INNER_MARGIN_MOBILE,
  links as defaultLinks,
  SIDEBAR_WIDTH_FULL_PC,
  DIM_ZINDEX,
  INNTER_ZINDEX,
} from "../../widgets/Menu/config";
import { Flex } from "../Box";
import { pxToRem } from "src/style/mixin";

const FadeAnimation = keyframes`
  0%, 100% {
    opacity: 1;
  }
  60% {
    opacity: 0;
    
  }
`;

const bindAnimation = () => {
  const arr = Array(4)
    .fill(true)
    .map(
      (val, index) => `
    :nth-child(${index + 1}) {
      animation-delay: ${0.2 * index}s;
    }
  `
    );
  return css`
    ${arr.join("")}
  `;
};

const Wrap = styled(Flex)`
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 190px;
`;

const WrapCircle = styled.div`
  margin-bottom: 40px;
`;

const Circle = styled.div`
  display: inline-block;
  width: 14px;
  height: 14px;
  background-color: #fea948;
  border-radius: 100%;
  margin: 0 7px;

  animation-name: ${FadeAnimation};
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  ${bindAnimation()}
`;

const Loading: React.FC = () => {
  return (
    <Wrap>
      <WrapCircle>
        {Array(4)
          .fill(true)
          .map(() => (
            <Circle />
          ))}
      </WrapCircle>
      <GroupIcon />
    </Wrap>
  );
};

Loading.defaultProps = {};

export default Loading;
