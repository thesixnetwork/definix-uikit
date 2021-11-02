import React, { useState } from "react";
import styled from "styled-components";
/* eslint-disable import/no-unresolved */
import { Meta } from "@storybook/react/types-6-0";
import ChainToggle from "./ChainToggle";
import ChainToggleItem from "./ChainToggleItem";
import ButtonMenu from "./ButtonMenu";
import ButtonMenuItem from "./ButtonMenuItem";
import { ChainBscIcon, ChainKlaytnIcon } from "../Icon";

const Row = styled.div`
  margin-bottom: 32px;

  & > button + button {
    margin-left: 16px;
  }
`;

export default {
  title: "Components/Button Menu[NEW]",
  component: ButtonMenu,
  argTypes: {},
} as Meta;

export const Default: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [index1, setIndex1] = useState(1);

  const handleClick = (newIndex) => setIndex(newIndex);
  const handleClick1 = (newIndex) => setIndex1(newIndex);

  return (
    <>
      <Row>
        <ButtonMenu activeIndex={index} onItemClick={handleClick}>
          <ButtonMenuItem>Button 1</ButtonMenuItem>
          <ButtonMenuItem>Button 2</ButtonMenuItem>
          <ButtonMenuItem>Button 3</ButtonMenuItem>
          <ButtonMenuItem>Button 4</ButtonMenuItem>
        </ButtonMenu>
      </Row>
      <Row>
        <ButtonMenu activeIndex={index1} onItemClick={handleClick1} scale="sm">
          <ButtonMenuItem>Button 1</ButtonMenuItem>
          <ButtonMenuItem>Button 2</ButtonMenuItem>
          <ButtonMenuItem>Button 3</ButtonMenuItem>
          <ButtonMenuItem>Button 4</ButtonMenuItem>
        </ButtonMenu>
      </Row>
      <Row>
        <ButtonMenu activeIndex={index} onItemClick={handleClick} variant="subtle">
          <ButtonMenuItem>Button 1</ButtonMenuItem>
          <ButtonMenuItem>Button 2</ButtonMenuItem>
          <ButtonMenuItem>Button 3</ButtonMenuItem>
          <ButtonMenuItem>Button 4</ButtonMenuItem>
        </ButtonMenu>
      </Row>
      <Row>
        <ButtonMenu activeIndex={index1} onItemClick={handleClick1} scale="sm" variant="subtle">
          <ButtonMenuItem>Button 1</ButtonMenuItem>
          <ButtonMenuItem>Button 2</ButtonMenuItem>
          <ButtonMenuItem>Button 3</ButtonMenuItem>
          <ButtonMenuItem>Button 4</ButtonMenuItem>
        </ButtonMenu>
      </Row>
    </>
  );
};

export const ChainButtonMenuNEW: React.FC = () => {
  const [index, setIndex] = useState(0);
  return (
    <Row>
      <ChainToggle activeIndex={index} onItemClick={setIndex}>
        <ChainToggleItem as="a" href="#d" startIcon={<ChainBscIcon />} label="Binance smart chain" />
        <ChainToggleItem as="a" href="#a" startIcon={<ChainKlaytnIcon />} label="Klaytn chain" />
      </ChainToggle>
    </Row>
  );
};
