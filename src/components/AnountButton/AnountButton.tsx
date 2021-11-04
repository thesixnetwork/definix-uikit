import React from "react";
import { AnountButtonProps } from "./types";
import { StyledAnountButton } from "./StyledAnountButton";

const AnountButton: React.FC<AnountButtonProps> = ({ onClick, children, ...props }) => {
  return <StyledAnountButton onClick={onClick} {...props}>{children}</StyledAnountButton>;
};
export default AnountButton;
