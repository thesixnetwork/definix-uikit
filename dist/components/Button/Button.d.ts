import React from "react";
import { ButtonProps, ButtonVariants } from "./types";
declare const Button: {
    <E extends React.ElementType<any> = "button">(props: import("./types").PolymorphicComponentProps<E, import("./types").BaseButtonProps>): JSX.Element;
    defaultProps: {
        isLoading: boolean;
        external: boolean;
        variant: ButtonVariants;
        disabled: boolean;
    };
};
export default Button;
