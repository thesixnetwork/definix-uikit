/// <reference types="react" />
import { Link } from "react-router-dom";
import { Login } from "../WalletModal/types";
export interface LangType {
    code: string;
    language: string;
}
export interface Profile {
    username?: string;
    image?: string;
    profileLink: string;
    noProfileLink: string;
    showPip?: boolean;
}
export interface PushedProps {
    isPushed: boolean;
    pushNav: (isPushed: boolean) => void;
}
export interface NavTheme {
    background: string;
    hover: string;
}
export interface MenuSubEntry {
    label: string;
    href: string;
    calloutClass?: string;
}
export interface MenuEntry {
    label: string;
    icon: string;
    activeIcon: string;
    items?: MenuSubEntry[];
    href?: string;
    target?: string;
    calloutClass?: string;
    initialOpenState?: boolean;
}
export interface MenuEntryConfigProps {
    links: Array<MenuEntry>;
}
export interface BreakPointProps {
    isMobile: boolean;
}
export interface LangProps {
    currentLang: string;
    langs: LangType[];
    setLang: (lang: LangType) => void;
}
export interface UserProps {
    account?: string;
    login: Login;
    logout: () => void;
    netWorth?: React.ReactElement;
}
export interface TranslateProps {
    Trans: React.FC<{
        i18nKey: string;
        components?: any;
    }>;
}
export interface LinkProps {
    Link: typeof Link;
}
export interface PanelProps extends PushedProps {
}
export interface NavProps extends PushedProps {
    price?: string | number;
}
export interface MenuProps extends LangProps, UserProps, MenuEntryConfigProps, TranslateProps, LinkProps {
    onPresentSettingModal: () => void;
    version: string;
    finixPrice?: string | number;
    isWrongNetwork: boolean;
}
