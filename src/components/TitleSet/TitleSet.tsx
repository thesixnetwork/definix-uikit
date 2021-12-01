import React from "react";
import { StyledTitleSet, StyledLink, StyledDescription, Title } from "./StyledTitleSet";
import { TitleSetProps } from "./types";
import Flex from "../Box/Flex";
import { Text } from "../Text";
import { sizes } from "../Heading/types";

const TitleSet: React.FC<TitleSetProps> = ({ title, link, linkLabel, description, children, ...props }) => {
  return (
    <StyledTitleSet {...props}>
      <Flex flexDirection="column">
        <Flex alignItems="flex-end" mb="16px">
          <Title mr="16px">
            {title}
          </Title>
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
