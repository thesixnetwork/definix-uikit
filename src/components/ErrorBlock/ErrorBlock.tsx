import React, { MouseEvent } from "react";
import styled from "styled-components";
import { Text } from '../Text';
import { Button } from "../Button";
import { ErrorBlockProps } from "./types";
import { ErrorIcon } from '../Icon';
import { NAV_HEIGHT_MOBILE } from "src/widgets/Menu/config";

const Wrap = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 212px;
  justify-content: center;

  ${({ theme }) => theme.mediaQueries.mobile} {
    height: 660px;
    padding-bottom: 28px;
    margin-top: 0;
  }
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 629px;
  height: 429px;
  padding: 85px 44px 80px 53px;
  border-radius: 16px;
  box-shadow: 0 12px 12px 0 rgba(254, 169, 72, 0.2);
  border: solid 1px ${({ theme }) => theme.colors.yellowBg2};
  background-color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.mediaQueries.mobile} {
    width: 100%;
    height: 100%;
    padding: 0 40px;
  }
`

const LabelText = styled(Text)`
  white-space: pre-line;
  margin-top: 28px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.mobile} {
    margin-top: 40px;
  }
`

const BackButton = styled(Button)`
  margin-top: 24px;
  ${({ theme }) => theme.mediaQueries.mobile} {
    margin-top: 32px;
  }
`

const ErrorBlock: React.FC<ErrorBlockProps> = ({ message, label, onBack }) => {
  return (
    <Wrap>
      <Box>
        <ErrorIcon />
        <LabelText textStyle="R_14R" color="deepgrey">{message}</LabelText>
        <BackButton lg width="128px" variant="brown" onClick={(e: MouseEvent) => {
          e.preventDefault();
          onBack && onBack();
        }}>{label}</BackButton>
      </Box>
    </Wrap>)
};

export default ErrorBlock;
