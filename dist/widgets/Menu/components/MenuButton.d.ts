/// <reference types="react" />
declare const MenuButton: import("styled-components").StyledComponent<{
    <E extends import("react").ElementType<any> = "button">(props: import("../../../components/Button/types").PolymorphicComponentProps<E, import("../../..").BaseButtonProps>): JSX.Element;
    defaultProps: {
        isLoading: boolean;
        external: boolean;
        variant: import("../../..").ButtonVariants;
        disabled: boolean;
    };
}, import("styled-components").DefaultTheme, {}, never>;
export default MenuButton;
