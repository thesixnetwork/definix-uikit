import React, { useState } from "react";
import Button from "../Button/Button";
import Flex from "../Box/Flex";
import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";
import { ButtonScales } from "../Button";

export default {
  title: "Components/Dropdown[NEW]",
  component: Dropdown,
  argTypes: {},
};

export const Default: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div
        style={{
          position: "relative",
          left: "100px",
          top: "500px",
          marginLeft: "100px",
        }}
      >
        <Dropdown
          isOpen={isOpen}
          target={
            <Button onClick={() => setIsOpen(!isOpen)} scale={ButtonScales.S40}>
              Hover
            </Button>
          }
          position="top"
          onItemClick={(index) => console.log(index)}
        >
          {[...Array(30)].map((value, index) => (
            <DropdownItem key={index}>Content Content Content Content</DropdownItem>
          ))}
        </Dropdown>
      </div>
      <div
        style={{
          position: "relative",
          left: "100px",
          marginTop: "100px",
          marginLeft: "100px",
        }}
      >
        <Dropdown
          defaultIndex={2}
          isOpen={isOpen}
          target={
            <Button onClick={() => setIsOpen(!isOpen)} scale={ButtonScales.S40}>
              Hover
            </Button>
          }
          position="bottom"
          onItemClick={(index) => console.log(index)}
        >
          {[...Array(30)].map((value, index) => (
            <DropdownItem key={index}>Content</DropdownItem>
          ))}
        </Dropdown>
      </div>
    </div>
  );
};
