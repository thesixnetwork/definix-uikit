import React, { useEffect } from "react";
import { TabsProps } from "./types";
import Flex from "../Box/Flex";
import TabArea from "./TabArea";
import Tab from "./Tab";

const Tabs: React.FC<TabsProps> = ({ tabs, curTab, setCurTab, equal, small, ...props }) => {
  useEffect(() => {
    setCurTab(tabs[0]);
  }, [tabs]);

  return (
    <TabArea isSelected>
      <Flex>
        {tabs.map((name: string) => (
          <Tab
            key={`tab-${name}`}
            small={small}
            isSelected={curTab === name}
            onClick={() => setCurTab(name)}
            {...(equal && { style: { flex: "1 1 0px", paddingLeft: 0, paddingRight: 0 } })}
            {...props}
          >
            {name}
          </Tab>
        ))}
      </Flex>
    </TabArea>
  );
};
export default Tabs;
