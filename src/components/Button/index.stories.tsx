import { capitalize } from "lodash";
import React, { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import styled from "styled-components";
import { IconButton } from ".";
import Box from "../Box/Box";
import Flex from "../Box/Flex";
import { SettingIcon } from "../Icon";
import Button from "./Button";
import { ButtonScales, ButtonVariants } from "./types";
import DropdownButton from "./DropdownButton";
import ButtonGroup from "./ButtonGroup";
import DoubleArrowButtons from "./DoubleArrowButtons";
import { ColorStyles } from "../../theme";

const viewScales = [ButtonScales.XS, ButtonScales.SM, ButtonScales.MD, ButtonScales.LG];
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
        <Button scale={ButtonScales.SM} mr="8px" variant="red" disabled>
          Disabled
        </Button>
        <Button xs variant="line" disabled>
          Attribute
        </Button>
        <DropdownButton>Dropdown</DropdownButton>
      </Box>
    </>
  );
};

export const Icons: React.FC = () => {
  return (
    <Box width="640px">
      <Row>
        <IconButton>
          <SettingIcon />
        </IconButton>
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
      </BrowserRouter>
    </Box>
  );
};

const Buttons: React.FC = () => {
  const times = ["1D", "1W", "1M", "3M", "ALL"];
  const [state, setstate] = useState(times[0]);

  return (
    <>
      {times.map((t) => (
        <Button
          scale="sm"
          variant={t === state ? "primary" : "text"}
          onClick={() => {
            setstate(t);
          }}
        >
          {t}
        </Button>
      ))}
    </>
  );
};

export const Group: React.FC = () => {
  return (
    <>
      <ButtonGroup>
        <Buttons />
      </ButtonGroup>
      <ButtonGroup mt="S_20" r="20px">
        <Buttons />
      </ButtonGroup>
    </>
  );
};

export const DoubleArrow: React.FC = () => {
  return (
    <>
      <Box p={10}>
        <DoubleArrowButtons
          disableLeftArrow={true}
          disableRightArrow={false}
          onClickLeftArrow={() => alert("click left")}
          onClickRightArrow={() => alert("click right")}
        />
      </Box>
      <Box backgroundColor={ColorStyles.DEEPBROWN} p={10}>
        <DoubleArrowButtons
          type="dark"
          disableLeftArrow={true}
          disableRightArrow={false}
          onClickLeftArrow={() => alert("click left")}
          onClickRightArrow={() => alert("click right")}
        />
      </Box>
    </>
  );
};
