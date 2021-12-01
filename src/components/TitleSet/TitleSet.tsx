import React from "react";
import { StyledTitleSet, StyledTitle, StyledHeading, StyledLink, StyledDescription } from "./StyledTitleSet";
import { TitleSetProps } from "./types";
import Flex from "../Box/Flex";
import { sizes } from "../Heading/types";

const TitleSet: React.FC<TitleSetProps> = ({ title, link, linkLabel, description, children, ...props }) => {
  return (
    <StyledTitleSet {...props}>
      <Flex flexDirection="column">
        <StyledTitle>
          <StyledHeading size={sizes.XL}>{title}</StyledHeading>
          {link && linkLabel && (
            <StyledLink href={link} target="_blank">
              {linkLabel}
            </StyledLink>
          )}
        </StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </Flex>
    </StyledTitleSet>
  );
};
export default TitleSet;
