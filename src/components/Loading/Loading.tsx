import React from "react";
import { GroupIcon } from "../Icon";
import styled, { keyframes, css } from "styled-components";
import { Flex } from "../Box";

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

  ${({ theme }) => theme.mediaQueries.mobileXl} {
    top: 180px;
  }
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

  ${({ theme }) => theme.mediaQueries.mobileXl} {
    width: 10px;
    height: 10px;
    margin: 0 5px;
  }

  animation-name: ${FadeAnimation};
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  ${bindAnimation()}
`;

const WrapIcon = styled(Flex)`
  width: 166px;
  height: 102px;
  ${({ theme }) => theme.mediaQueries.mobileXl} {
    width: 134px;
    height: 82px;
  }
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
      <WrapIcon>
        <GroupIcon viewBox="0 0 166 102" width="100%" height="100%" />
      </WrapIcon>
    </Wrap>
  );
};

Loading.defaultProps = {};

export default Loading;
