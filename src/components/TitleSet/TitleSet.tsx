import React from "react";
import { StyledTitleSet, StyledTitle, StyledHeading, StyledLink, StyledDescription } from "./StyledTitleSet";
import { TitleSetProps } from "./types";
import Flex from "../Box/Flex";
import { sizes } from "../Heading/types";

const TitleSet: React.FC<TitleSetProps> = ({ title, link, linkLabel, description, linkBottom, children, ...props }) => {
  return (
    <StyledTitleSet {...props}>
      <Flex flexDirection="column">
        <StyledTitle linkBottom={linkBottom}>
          <StyledHeading size={sizes.XL} linkBottom={linkBottom}>
            {title}
          </StyledHeading>
          {link && linkLabel && (
            <StyledLink href={link} target="_blank" linkBottom={linkBottom}>
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
