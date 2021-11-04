import React, { useState } from "react";
import Button from "../Button/Button";
import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";
import { ButtonScales } from "../Button";
import { TextStyles } from "../../theme/text";
import { ArrowBottomGIcon } from "../Icon";

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
            <Button
              onClick={() => setIsOpen(!isOpen)}
              scale="40"
              variant="line"
              textStyle={TextStyles.R_14M}
              minWidth={90}
              endIcon={<ArrowBottomGIcon />}
            >
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
            <Button
              onClick={() => setIsOpen(!isOpen)}
              scale="40"
              variant="line"
              textStyle={TextStyles.R_14M}
              minWidth={90}
              endIcon={<ArrowBottomGIcon />}
            >
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
