import React, { useState, useEffect } from "react";
import { StyledContentArea, Wrap } from "./StyledTabBox";
import { TabBoxProps } from "./types";
import { isEqual } from "lodash";
import Tabs from "./Tabs";

const TabBox: React.FC<TabBoxProps> = ({ tabs, small, equal, children, ...props }) => {
  const [curTab, setCurTab] = useState<string>(tabs[0]?.name);

  const onClickTab = (id: string) => {
    setCurTab(id);
  };

  useEffect(() => {
    setCurTab(tabs[0].id);
  }, [tabs]);

  return (
    <Wrap>
      <Tabs tabs={tabs} curTab={curTab} setCurTab={onClickTab} small={small} equal={equal} />
      <StyledContentArea {...props}>
        {tabs.map(({ id, component }) => (curTab === id ? component : null))}
      </StyledContentArea>
    </Wrap>
  );
};
export default TabBox;
