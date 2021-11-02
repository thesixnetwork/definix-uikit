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
  calloutClass?: string;
  initialOpenState?: boolean;
}

export interface PanelProps {
  isMobile: boolean;
  // isDark: boolean;
  // toggleTheme: (isDark: boolean) => void;
  currentLang: string;
  langs: LangType[];
  setLang: (lang: LangType) => void;
  links: Array<MenuEntry>;
}

export interface UserProps {
  account?: string;
  login: Login;
  profile?: Profile;
  logout: () => void;
}

export interface NavProps extends UserProps {
  isMobile: boolean;
  links?: Array<MenuEntry>;
}

export interface MenuProps extends Pick<PanelProps, 'langs' | 'setLang' | 'currentLang'>, NavProps {}
