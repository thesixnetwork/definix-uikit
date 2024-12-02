import React from "react";
import { MenuProps } from "./types";
interface MenuState extends MenuProps {
}
interface MenuContext extends MenuState {
    setState: (state: Partial<MenuState>) => void;
}
export declare const Context: React.Context<MenuContext>;
declare const MenuProvider: React.FC<MenuState>;
export declare const useMenu: () => MenuContext;
export default MenuProvider;
