import { MouseEventHandler } from 'react';
export interface MyCustomButtonProps {
    text: string;
    txtcolor: string;
    bgcolor: string;
    borderColor: string;
    borderWidth?: "small" | "medium" | "large";
    size?: "small" | "medium" | "large";
    hoverTxtColor: string;
    hoverColor: string;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
declare function CustomButton(props: MyCustomButtonProps): import("react/jsx-runtime").JSX.Element;
export default CustomButton;
