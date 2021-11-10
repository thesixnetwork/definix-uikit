import React from "react";
import { StyledTitleSet, StyledLink, StyledDescription } from "./StyledTitleSet";
import { TitleSetProps } from "./types";
import Flex from "../Box/Flex";
import { Heading } from "../Heading";
import { sizes } from "../Heading/types";

const TitleSet: React.FC<TitleSetProps> = ({ title, link, linkLabel, description, children, ...props }) => {
  return (
    <StyledTitleSet {...props}>
      <Flex flexDirection="column">
        <Flex alignItems="flex-end" mb="16px">
          <Heading size={sizes.XL} mr="16px">
            {title}
          </Heading>
          {link && linkLabel && (
            <StyledLink href={link} target="_blank">
              {linkLabel}
            </StyledLink>
          )}
        </Flex>
        <StyledDescription>{description}</StyledDescription>
      </Flex>
    </StyledTitleSet>
  );
};
export default TitleSet;
