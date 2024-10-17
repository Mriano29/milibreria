export interface MiguelRRProps {
    text: string;
    alignment: "center" | "inherit" | "justify" | "left" | "right";
    color: "primary" | "secondary" | "success" | "error" | "info" | "error" | "info" | "warning" | "textPrimary" | "textSecondary" | "textDisabled";
    bottomMargin?: boolean;
    variant: "body1" | "body2" | "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "inherit" | "overline" | "subtitle1" | "subtitle2";
}
declare function MiguelRR(props: MiguelRRProps): import("react/jsx-runtime").JSX.Element;
export default MiguelRR;
