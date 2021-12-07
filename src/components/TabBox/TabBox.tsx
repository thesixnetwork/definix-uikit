import React, { useState, useEffect, useRef } from "react";
import { StyledContentArea, Wrap } from "./StyledTabBox";
import { TabBoxProps } from "./types";
import { isEqual } from "lodash";
import Tabs from "./Tabs";

const TabBox: React.FC<TabBoxProps> = ({ tabs, small, equal, children, ...props }) => {
  const [curTab, setCurTab] = useState<string>(tabs[0]?.name);
  const tabNames = useRef(tabs.map(({ name }) => name));

  const onClickTab = (name: string) => {
    setCurTab(name);
  };

  useEffect(() => {
    const names = tabs.map(({ name }) => name);
    if (isEqual(tabNames.current, names)) {
      return;
    }
    tabNames.current = names;
    setCurTab(tabs[0].name);
  }, [tabs]);

  return (
    <Wrap>
      <Tabs tabs={tabNames.current} curTab={curTab} setCurTab={onClickTab} small={small} equal={equal} />
      <StyledContentArea {...props}>
        {tabs.map(({ name, component }) => (curTab === name ? component : null))}
      </StyledContentArea>
    </Wrap>
  );
};
export default TabBox;
