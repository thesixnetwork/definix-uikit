import React, { useState } from "react";
import styled from "styled-components";
import noop from "lodash/noop";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
/* eslint-disable import/no-unresolved */
import { Meta } from "@storybook/react/types-6-0";
import ErrorBlock from "./ErrorBlock";
import Menu from "../../widgets/Menu/Menu";
import { LangType } from "../../widgets/Menu/types";
import { links } from "../../widgets/Menu/config";

const langs: LangType[] = [...Array(20)].map((_, i) => ({ code: `en${i}`, language: `English${i}` }));

const Trans = ({ i18nKey }) => {
  return <div>{i18nKey}</div>;
};

const useProps = () => {
  const [userSlippageTolerance, setUserslippageTolerance] = useState(0.5);
  const [deadline, setDeadline] = useState(0.5);
  const [props, setProps] = useState({
    userSlippageTolerance,
    setUserslippageTolerance,

    deadline,
    setDeadline,

    account: "0xbdda50183d817c3289f895a4472eb475967dc980",
    login: noop,
    logout: noop,

    Trans,
    // isDark: false,
    // toggleTheme: noop,
    currentLang: "EN",
    setLang: noop,
    langs,

    links,
    // profile: null,
  });
  return props;
};

export default {
  title: "Components/ErrorPage[NEW]",
  component: ErrorBlock,
  argTypes: {},
} as Meta;

export const Default: React.FC = () => {
  const props = useProps();
  return (
    <BrowserRouter>
      <Menu {...props}>
        <ErrorBlock message={`알 수 없는 오류로 일시적인 문제가 발생하였습니다.
        잠시 후에 다시 시도해주시길 바랍니다.`} label="Home" onBack={() => console.log('back')} />
      </Menu>
    </BrowserRouter>
  );
};
