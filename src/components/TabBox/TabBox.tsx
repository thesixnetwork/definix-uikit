import React, {useState, useEffect} from "react";
import { StyledContentArea, StyledTabArea, StyledTab, Wrap, StyledBorderBottom } from "./StyledTabBox";
import { TabBoxProps, TabAreaProps, TabProps } from "./types";
import Flex from '../Box/Flex'
import { Card } from "../Card";

const TabArea: React.FC<TabAreaProps> = ({children}) => {
  return (
    <StyledTabArea>
      {children}
      <StyledBorderBottom isSelected={false}/>
    </StyledTabArea>
  )
}

const Tab: React.FC<TabProps> = ({onClick, isSelected, children}) => {
  return (
    <StyledTab onClick={onClick} isSelected={isSelected}>
      {children}
      <StyledBorderBottom isSelected={isSelected} style={{zIndex: 1}}/>
    </StyledTab>
  )
}

const TabBox: React.FC<TabBoxProps> = ({ tabs, children, ...props }) => {
  const [curTab, setCurTab] = useState<string>();

  const onClickTab = (name: string) => {
    setCurTab(name);
  }

  useEffect(() => {
    setCurTab(tabs[0].name);
  }, [tabs])

  return (
    <Wrap>
      <TabArea isSelected>
        <Flex>
          {tabs.map(({name}, i) => <Tab isSelected={curTab === name} onClick={() => onClickTab(name)}>{name}</Tab>)}
        </Flex>
      </TabArea>
      <StyledContentArea {...props}>
        {tabs.map(({name, component}) => curTab === name ? component : null)}
      </StyledContentArea>
    </Wrap>
  );
};
export default TabBox;
