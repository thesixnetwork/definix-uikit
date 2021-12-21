import React, { useState, useMemo } from "react";
import { LangType } from "../types";
import { DropdownSet } from "../../../components/DropdownSet";
import { Box } from "../../../components/Box";

interface Props {
  currentLang: string;
  langs: LangType[];
  setLang: (lang: LangType) => void;
}

const LangSelector: React.FC<Props> = ({ currentLang, langs, setLang }) => {
  console.log(langs)
  const [isOpen, setIsOpen] = useState(false);
  const currentLangObj = langs.find(({ code }) => code === currentLang);
  const options = useMemo(() => {
    return langs.map((lang) => {
      return {
        id: lang.code,
        label: lang.language
      }
    })
  }, [langs])
  const currentLangIndex = useMemo(() => {
    return Math.max(options.findIndex(({ id }) => id === currentLang), 0)
  }, [currentLang, options])
  return (
    <Box width="100px">
      <DropdownSet
        position="top"
        isOpen={isOpen}
        activeIndex={currentLangIndex}
        options={options}
        onOptionClick={(index: number) => {
          setLang(langs[index]);
          setIsOpen(!isOpen);
        }}
        onButtonClick={() => setIsOpen(!isOpen)}
      />
    </Box>
  );
};

export default React.memo(LangSelector, (prev, next) => prev.currentLang === next.currentLang);
