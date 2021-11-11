import React from "react";
import styled from "styled-components";
import Flex from "../../../components/Box/Flex";
import Link from "../../../components/Link/Link";
import * as IconModule from "../../../components/Icon";
import { socials } from "../config";

const Icons = IconModule as unknown as { [key: string]: React.StatelessComponent<React.SVGAttributes<SVGElement>> };

interface Props {
  isMobile: boolean;
}

const StyledFlex = styled(Flex)`
  align-items: center;
  justify-content: center;

  > a {
    margin-right: 16px;
  }

  ${({ theme }) => theme.mediaQueries.mobile} {
    justify-content: space-between;
    padding: 0 40px;

    > a {
      margin-right: 0;
    }
  }
`;

const SocialLinks: React.FC<Props> = ({ isMobile }) => (
  <StyledFlex>
    {socials.map((social, index) => {
      const Icon = Icons[social.icon];
      const iconProps = { width: "24px", color: "textSubtle", style: { cursor: "pointer" } };
      return (
        <Link external key={social.label} href={social.href} aria-label={social.label}>
          <Icon {...iconProps} />
        </Link>
      );
    })}
  </StyledFlex>
);

export default React.memo(SocialLinks, () => true);
