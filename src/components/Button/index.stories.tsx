import { capitalize } from "lodash";
import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import styled from "styled-components";
import Box from "../Box/Box";
import Flex from "../Box/Flex";
import Button from "./Button";
import { scales, variants } from "./types";

const viewScales = [scales.S_32, scales.S_36, scales.S_40];
const viewVariants = [variants.RED, variants.BROWN, variants.LIGHT_BROWN, variants.LINE];

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
        <Button mr="8px" disabled>
          Disabled
        </Button>
        <Button variant="line" disabled>
          Disabled
        </Button>
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

export const Variants: React.FC = () => {
  return (
    <Box width="640px">
      <BrowserRouter>
        <Row>
          <Button as={Link} to="/router-link" variant="red">
            As an React Router link
          </Button>
        </Row>
        <Row>
          <Button width="100%">Full size</Button>
        </Row>
        <Row>
          <Button variant="red" isLoading>
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
