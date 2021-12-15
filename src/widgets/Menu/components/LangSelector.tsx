import React, { useState } from "react";
import Dropdown from "../../../components/Dropdown/Dropdown";
import { Text } from "../../../components/Text";
import { LangType } from "../types";
import DropdownItem from "../../../components/Dropdown/DropdownItem";
import DropdownButton from "../../../components/Button/DropdownButton";

interface Props {
  currentLang: string;
  langs: LangType[];
  setLang: (lang: LangType) => void;
}

const LangSelector: React.FC<Props> = ({ currentLang, langs, setLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const currentLangObj = langs.find(({ code }) => code === currentLang);
  return (
    <Dropdown
      width="94px"
      defaultIndex={langs.findIndex(({ code }) => currentLang === code)}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      position="top"
      target={<DropdownButton>{currentLangObj ? currentLangObj.language : currentLang.toUpperCase()}</DropdownButton>}
      onItemClick={(index) => {
        setLang(langs[index]);
        setIsOpen(!isOpen);
      }}
    >
      {langs.map((lang, index) => (
        <DropdownItem key={index}><Text textStyle="R_14M">{lang.language}</Text></DropdownItem>
      ))}
    </Dropdown>
  );
};

export default React.memo(LangSelector, (prev, next) => prev.currentLang === next.currentLang);
