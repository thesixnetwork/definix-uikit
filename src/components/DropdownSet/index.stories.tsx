import React, { useState } from "react";
import Button from "../Button/Button";
import DropdownSet from "./DropdownSet";

export default {
  title: "Components/DropdownSet",
  component: DropdownSet,
  argTypes: {},
};

export const Default: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const [isOpen2, setIsOpen2] = useState(false);
  const [activeIndex2, setActiveIndex2] = useState(0);
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div
        style={{
          position: "relative",
          marginTop: "100px",
          marginLeft: "100px",
        }}
      >
        <DropdownSet
          position="bottom"
          isOpen={isOpen}
          activeIndex={activeIndex}
          options={[
            {
              id: "six",
              label: "SIX",
            },
            {
              id: "finix",
              label: "FINIX",
            },
          ]}
          onOptionClick={(index) => {
            setActiveIndex(index);
            setIsOpen(false);
          }}
          onButtonClick={() => setIsOpen(!isOpen)}
        />
      </div>

      <div
        style={{
          position: "relative",
          marginTop: "100px",
          marginLeft: "100px",
          width: "200px",
        }}
      >
        <DropdownSet
          position="bottom"
          isOpen={isOpen2}
          activeIndex={activeIndex2}
          options={[
            {
              id: "six",
              label: "SIX",
            },
            {
              id: "finix",
              label: "FINIX",
            },
          ]}
          onOptionClick={(index) => {
            setActiveIndex2(index);
            setIsOpen2(false);
          }}
          onButtonClick={() => setIsOpen2(!isOpen2)}
        />
      </div>
    </div>
  );
};
