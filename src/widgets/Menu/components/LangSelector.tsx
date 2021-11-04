import React, { useState } from "react";
import Dropdown from "../../../components/Dropdown/Dropdown";
import Button from "../../../components/Button/Button";
import { ArrowBottomGIcon } from "../../../components/Icon";
import { LangType } from "../types";
import { TextStyles } from "../../../theme";
import DropdownItem from "../../../components/Dropdown/DropdownItem";

interface Props {
  currentLang: string;
  langs: LangType[];
  setLang: (lang: LangType) => void;
}

const LangSelector: React.FC<Props> = ({ currentLang, langs, setLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dropdown
      isOpen={isOpen}
      position="top"
      target={
        <Button
          onClick={() => setIsOpen(!isOpen)}
          scale="40"
          variant="line"
          textStyle={TextStyles.R_14M}
          minWidth={90}
          endIcon={<ArrowBottomGIcon />}
        >
          EN
        </Button>
      }
    >
      {langs.map((lang, index) => (
        <DropdownItem key={index}>{lang.language}</DropdownItem>
      ))}
    </Dropdown>
  );
};

export default React.memo(LangSelector, (prev, next) => prev.currentLang === next.currentLang);
