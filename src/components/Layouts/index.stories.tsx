import React from "react";
import styled from "styled-components";
import GlobalStyle from "../../style/global";
import { BaseLayout, CardsLayout, ContainerLayout } from ".";

export default {
  title: "Components/Layouts",
  argTypes: {},
};

const Stub = styled.div`
  width: 100%;
  background: #1fc7d4;
  height: 600px;
`;

export const Container: React.FC = () => {
  return (
    <ContainerLayout>
      {[...Array(12)].map((value) => (
        <Stub key={value} />
      ))}
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
