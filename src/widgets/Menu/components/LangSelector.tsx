import React, { useState } from "react";
import Dropdown from "../../../components/Dropdown/Dropdown";
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
  return (
    <Dropdown
      defaultIndex={langs.findIndex(({ code }) => currentLang === code)}
      isOpen={isOpen}
      position="top"
      target={<DropdownButton onClick={() => setIsOpen(!isOpen)}>{currentLang.toUpperCase()}</DropdownButton>}
      onItemClick={(index) => {
        setLang(langs[index]);
        setIsOpen(!isOpen);
      }}
    >
      {langs.map((lang, index) => (
        <DropdownItem key={index}>{lang.language}</DropdownItem>
      ))}
    </Dropdown>
  );
};

export default React.memo(LangSelector, (prev, next) => prev.currentLang === next.currentLang);
