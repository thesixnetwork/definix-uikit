import React, { useState } from "react";
import Button from "../Button/Button";
import DropdownButton from "../Button/DropdownButton";
import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";
import { ButtonScales } from "../Button";
import { TextStyles } from "../../theme/text";
import { ArrowBottomGIcon } from "../Icon";

export default {
  title: "Components/Dropdown",
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
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          target={<DropdownButton onClick={() => setIsOpen(!isOpen)}>Hover</DropdownButton>}
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
          setIsOpen={setIsOpen}
          defaultIndex={2}
          isOpen={isOpen}
          target={<DropdownButton onClick={() => setIsOpen(!isOpen)}>Hover</DropdownButton>}
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
