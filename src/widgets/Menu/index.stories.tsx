import React, { useState } from "react";
import styled from "styled-components";
import noop from "lodash/noop";
import { BrowserRouter } from "react-router-dom";
import Menu from "./Menu";
import { LangType } from "./types";
import { links } from "./config";

export default {
  title: "Widgets/Menu",
  component: Menu,
  argTypes: {},
};

const Stub = styled.div`
  grid-column: 1/13;
`;

const langs: LangType[] = [{
  code: 'en',
  language: 'English'
}, {
  code: 'ko',
  language: '한국어'
}];

const Trans = ({ i18nKey }) => {
  return <span>{i18nKey}</span>;
};
const Link = ({ to, children }) => {
  return <a href={to}>{children}</a>;
};

// This hook is used to simulate a props change, and force a re rendering
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

    Link,

    links,
    // profile: null,
  });

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setProps({
  //       // account: "0xbdda50183d817c3289f895a4472eb475967dc980",
  //       // login: noop,
  //       // logout: noop,
  //       // isDark: false,
  //       // toggleTheme: noop,
  //       langs,
  //       setLang: noop,
  //       currentLang: "EN",
  //       finixPriceUsd: 0.023158668932877668,
  //       links,
  //       // profile: null,
  //     });
  //   }, 2000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  return props;
};

export const Connected: React.FC = () => {
  const props = useProps();
  return (
    <BrowserRouter>
      <Menu {...props}>
        <Stub>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </Stub>
      </Menu>
    </BrowserRouter>
  );
};

export const NotConnected: React.FC = () => {
  const props = useProps();
  const [account, setAccount] = useState(null);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setAccount('123123')
  //   }, 1000);
  // }, []);
  return (
    <BrowserRouter>
      <Menu {...props} account={account}>
        <div>
          <h1>Page body</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </div>
      </Menu>
    </BrowserRouter>
  );
};
