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
  // profile?: Profile;
  logout: () => void;
  netWorth?: React.ReactElement;
}

export interface TranslateProps {
  Trans: React.FC<{
    i18nKey: string;
  }>;
}

export interface SlippageToleranceProps {
  userSlippageTolerance: number;
  setUserslippageTolerance: (value: number) => void;
}

export interface TransactionDeadLineProps {
  deadline: number;
  setDeadline: (value: number) => void;
}

export interface SettingsModalProps extends SlippageToleranceProps, TransactionDeadLineProps, TranslateProps {
  onDismiss?: () => void
}

export interface PanelProps extends BreakPointProps, LangProps, UserProps, TranslateProps, MenuEntryConfigProps, PushedProps {}

export interface NavProps extends BreakPointProps, UserProps, MenuEntryConfigProps, PushedProps, TranslateProps, SlippageToleranceProps, TransactionDeadLineProps {}

export interface MenuProps
  extends LangProps, UserProps, MenuEntryConfigProps,
    TranslateProps, SlippageToleranceProps, TransactionDeadLineProps {}
