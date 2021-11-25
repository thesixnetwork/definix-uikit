import React from "react";
import { HelpOnIcon } from "src";
import styled from "styled-components";

const Wrap = styled.div``;

const Tooltip: React.FC = ({}) => {
  return (
    <Wrap>
      <HelpOnIcon />
    </Wrap>
  );
};

Tooltip.defaultProps = {};

export default Tooltip;
