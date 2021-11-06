import { capitalize } from "lodash";
import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import styled from "styled-components";
import { IconButton } from ".";
import Box from "../Box/Box";
import Flex from "../Box/Flex";
import { Text } from "../Text";
import { ArrowBottomGIcon, SettingIcon } from "../Icon";
import Button from "./Button";
import { ButtonScales, ButtonVariants } from "./types";
import { TextStyles } from "../../theme/text";
import DropdownButton from "./DropdownButton";

const viewScales = [ButtonScales.S_32, ButtonScales.S_36, ButtonScales.S_40, ButtonScales.S_48];
const viewVariants = [ButtonVariants.RED, ButtonVariants.BROWN, ButtonVariants.LIGHTBROWN, ButtonVariants.LINE];

export default {
  title: "Components/Button[NEW]",
  component: Button,
  argTypes: {},
};

const Row = styled(Flex)`
  margin-bottom: 32px;
  & > button + button,
  & > a + a {
    margin-left: 16px;
  }
`;

export const Default: React.FC = () => {
  return (
    <>
      <Box mb="32px">
        <button type="button">Unstyled Button</button>
      </Box>
      <Box mb="32px">
        {viewVariants.map((variant) => {
          return (
            <Box key={variant} mb="32px">
              {viewScales.map((scale) => {
                return (
                  <Button key={scale} variant={variant} scale={scale} mr="8px">
                    {`${capitalize(variant)} ${scale.toUpperCase()}`}
                  </Button>
                );
              })}
            </Box>
          );
        })}
      </Box>
      <Box>
        <Button scale={ButtonScales.S_32} mr="8px" variant="red" disabled>
          Disabled
        </Button>
        <Button scale="40" variant="line" disabled>
          Disabled
        </Button>
        <DropdownButton>Dropdown</DropdownButton>
      </Box>
    </>
  );
};

// export const Anchors: React.FC = () => {
//   return (
//     <>
//       <Box mb="32px">
//         {Object.values(variants).map((variant) => {
//           return (
//             <Box key={variant} mb="32px">
//               {Object.values(scales).map((scale) => {
//                 return (
//                   <Button
//                     as="a"
//                     href="https://pancakeswap.finance"
//                     key={scale}
//                     variant={variant}
//                     scale={scale}
//                     external
//                     mr="8px"
//                   >
//                     {`${capitalize(variant)} anchor ${scale.toUpperCase()}`}
//                   </Button>
//                 );
//               })}
//             </Box>
//           );
//         })}
//       </Box>
//       <Box>
//         <Button as="a" href="https://pancakeswap.finance" mr="8px" external disabled>
//           Disabled
//         </Button>
//         <Button as="a" href="https://pancakeswap.finance" variant="secondary" external disabled>
//           Disabled
//         </Button>
//       </Box>
//     </>
//   );
// };

export const Icons: React.FC = () => {
  return (
    <Box width="640px">
      <Row>
        <IconButton variant="transparent" startIcon={<SettingIcon />} />
      </Row>
    </Box>
  );
};

export const Extends: React.FC = () => {
  return (
    <Box width="640px">
      <BrowserRouter>
        <Row>
          <Button as={Link} to="/router-link" variant="red" scale="40">
            As an React Router link
          </Button>
        </Row>
        <Row>
          <Button width="100%" scale="40">
            Full size
          </Button>
        </Row>
        <Row>
          <Button variant="red" isLoading scale="40">
            Loading
          </Button>
        </Row>
        {/* <Row>
          <Button startIcon={<GnbHomeNIcon />}>Start Icon</Button>
          <Button endIcon={<GnbHomeNIcon />}>End Icon</Button>
          <Button startIcon={<GnbHomeNIcon />} endIcon={<GnbHomeNIcon />}>
            Start & End Icon
          </Button>
        </Row>
        <Row>
          <IconButton>
            <GnbHomeNIcon />
          </IconButton>
          <IconButton variant="secondary">
            <GnbHomeNIcon />
          </IconButton>
        </Row>
        <Row>
          <IconButton scale="sm" variant="danger">
            <GnbHomeNIcon />
          </IconButton>
        </Row> */}
      </BrowserRouter>
    </Box>
  );
};
