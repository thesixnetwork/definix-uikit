export interface ModalTheme {
  background: string;
}

export type Handler = (props?: any) => void;

export interface InjectedProps {
  onDismiss?: Handler;
}
