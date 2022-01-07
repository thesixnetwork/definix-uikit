import React, { ChangeEvent } from "react";
import { InputProps } from "./types";
import Input from "./Input";

const BalanceInput = (props: InputProps): JSX.Element => {
  const { onChange, ...rest } = props;
  return (
    <Input
      textStyle="R_28M"
      color="black"
      isBorder={false}
      pattern="^[0-9]*[.,]?[0-9]*$"
      {...rest}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.validity.valid) {
          typeof onChange === "function" && onChange(e);
        }
      }}
    />
  );
};

export default BalanceInput;
