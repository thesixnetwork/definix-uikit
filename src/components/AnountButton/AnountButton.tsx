import React from "react";
import { AnountButtonProps } from "./types";
import { StyledAnountButton } from "./StyledAnountButton";

const AnountButton: React.FC<AnountButtonProps> = ({ children, ...props }) => {
  return <StyledAnountButton {...props}>{children}</StyledAnountButton>;
};
export default AnountButton;
