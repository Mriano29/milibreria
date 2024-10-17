import type { Meta, StoryObj } from "@storybook/react";
import Example from "./example"; 
const meta: Meta<typeof Example> = {
    title: "MyFavouriteBorder",
    component: Example,
};
export default meta;
type Story = StoryObj<typeof Example>;
export const Primary: Story = {
    args: {
        iconColor: "success",
        disabled: false,
        onClick: () => alert("Favorite Icon Border one"),
    },
};
export const Secondary: Story = {
    args: {
        iconColor: "warning",
        disabled: true,
    },
}