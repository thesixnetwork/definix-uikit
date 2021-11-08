import React from "react";
import Flex from "../../../components/Box/Flex";
import Link from "../../../components/Link/Link";
import { pxToRem } from "../../../style/mixin";
import * as IconModule from "../../../components/Icon";
import { socials } from "../config";

const Icons = IconModule as unknown as { [key: string]: React.StatelessComponent<React.SVGAttributes<SVGElement>> };

interface Props {
  isMobile: boolean;
}

const SocialLinks: React.FC<Props> = ({ isMobile }) => (
  <Flex alignItems="center" justifyContent={isMobile ? "space-between" : "center"} px={isMobile ? pxToRem(40) : 0}>
    {socials.map((social, index) => {
      const Icon = Icons[social.icon];
      const iconProps = { width: "24px", color: "textSubtle", style: { cursor: "pointer" } };
      const mr = index < socials.length - 1 ? pxToRem(isMobile ? 20 : 16) : 0;
      return (
        <Link external key={social.label} href={social.href} aria-label={social.label} mr={mr}>
          <Icon {...iconProps} />
        </Link>
      );
    })}
  </Flex>
);

export default React.memo(SocialLinks, () => true);
