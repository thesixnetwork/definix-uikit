import React, { createContext, useState, useCallback, useContext } from "react";
import { links } from "./config";
import { Link } from "react-router-dom";
import { MenuProps } from "./types";

interface MenuState extends MenuProps {}

interface MenuContext extends MenuState {
  setState: (state: Partial<MenuState>) => void;
}

const Trans = ({ i18nKey }: { i18nKey: string }) => {
  return <div>{i18nKey}</div>;
};

export const Context = createContext<MenuContext>({
  account: undefined,
  version: '0.0.1',
  login: () => null,
  logout: () => null,
  Trans,
  langs: [],
  setLang: () => null,
  currentLang: "en",
  links,
  setDeadline: () => null,
  setUserslippageTolerance: () => null,
  userSlippageTolerance: 0,
  setState: () => null,
  deadline: 0,
  Link,
});

const MenuProvider: React.FC<MenuState> = ({ children, ...rest }) => {
  const [state, setState] = useState<MenuState>(rest);

  const updateState = useCallback((nextState: Partial<MenuState>) => {
    setState((prev) => {
      return {
        ...prev,
        ...nextState,
      };
    });
  }, []);

  return (
    <Context.Provider
      value={{
        ...state,
        setState: updateState,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useMenu = () => {
  return useContext(Context);
};

export default MenuProvider;
