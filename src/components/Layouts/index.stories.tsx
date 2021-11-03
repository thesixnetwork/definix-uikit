import React from "react";
import styled from "styled-components";
import GlobalStyle from "../../GlobalStyle";
import { BaseLayout, CardsLayout, ContainerLayout } from ".";
import Flex from "../Box/Flex";

export default {
  title: "Components/Layouts",
  argTypes: {},
};

const Stub = styled.div`
  width: 100%;
  height: 50px;
  background: #1fc7d4;
`;

export const Container: React.FC = () => {
  return (
    <ContainerLayout>
      <Flex flexDirection="column">
        {[...Array(12)].map((value) => (
          <Stub key={value}>Dummy</Stub>
        ))}
      </Flex>
    </ContainerLayout>
  );
};

export const Base: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <BaseLayout>
        {[...Array(12)].map((value) => (
          <Stub key={value} />
        ))}
      </BaseLayout>
    </>
  );
};

export const Cards: React.FC = () => {
  return (
    <CardsLayout>
      {[...Array(10)].map((value) => (
        <Stub key={value} />
      ))}
    </CardsLayout>
  );
};
