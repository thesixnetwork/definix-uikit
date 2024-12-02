import React from "react";
import { DropdownProps } from "../../../components/Dropdown";
import { TranslateProps } from "../types";
interface Props extends Partial<DropdownProps>, TranslateProps {
    account: string;
    logout: () => void;
    target: React.ReactElement;
}
declare const WalletDropdown: React.FC<Props>;
export default WalletDropdown;
