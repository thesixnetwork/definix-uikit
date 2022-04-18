import React, { useEffect, useMemo } from "react";
import { TabsProps } from "./types";
import Flex from "../Box/Flex";
import TabArea from "./TabArea";
import Tab from "./Tab";

const Tabs: React.FC<TabsProps> = ({ tabs, curTab, setCurTab, equal, initTab = true, small, theme, ...props }) => {
  useEffect(() => {
    if (initTab) {
      setCurTab(tabs[0].id);
    }
  }, [tabs]);

  const isDark = useMemo(() => theme === "dark", [theme]);

  return (
    <TabArea isSelected isDark={isDark}>
      <Flex>
        {tabs.map(({ id, name }) => (
          <Tab
            key={`tab-${id}`}
            small={small}
            isSelected={curTab === id}
            onClick={() => setCurTab(id)}
            {...(equal && { style: { flex: "1 1 0px", paddingLeft: 0, paddingRight: 0 } })}
            isDark={isDark}
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
