import React, { useState, useEffect, useRef } from "react";
import { StyledContentArea, Wrap } from "./StyledTabBox";
import { TabBoxProps } from "./types";
import Flex from "../Box/Flex";
import TabArea from "./TabArea";
import Tab from "./Tab";
import { isEqual } from "lodash";

const TabBox: React.FC<TabBoxProps> = ({ tabs, small, children, ...props }) => {
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
      <TabArea isSelected>
        <Flex>
          {tabs.map(({ name }, i) => (
            <Tab key={`tab-${name}`} small={small} isSelected={curTab === name} onClick={() => onClickTab(name)}>
              {name}
            </Tab>
          ))}
        </Flex>
      </TabArea>
      <StyledContentArea {...props}>
        {tabs.map(({ name, component }) => (curTab === name ? component : null))}
      </StyledContentArea>
    </Wrap>
  );
};
export default TabBox;
