import React from "react";
import Flex from "../../../components/Box/Flex";
import Link from "../../../components/Link/Link";
import { pxToRem } from "../../../style/mixin";
import * as IconModule from "../../../components/Icon";
import { socials } from "../config";

const Icons = (IconModule as unknown) as { [key: string]: React.StatelessComponent<React.SVGAttributes<SVGElement>> };

const SocialLinks: React.FC = () => (
  <Flex>
    {socials.map((social, index) => {
      const Icon = Icons[social.icon];
      const iconProps = { width: "24px", color: "textSubtle", style: { cursor: "pointer" } };
      const mr = index < socials.length - 1 ? pxToRem(16) : 0;
      return (
        <Link external key={social.label} href={social.href} aria-label={social.label} mr={mr}>
          <Icon {...iconProps} />
        </Link>
      );
    })}
  </Flex>
);

export default React.memo(SocialLinks, () => true);
