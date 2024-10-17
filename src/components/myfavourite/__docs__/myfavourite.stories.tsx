import type { Meta, StoryObj } from "@storybook/react";
import Example from "./example"; 
const meta: Meta<typeof Example> = {
    title: "MyFavourite",
    component: Example,
};
export default meta;
type Story = StoryObj<typeof Example>;
export const Primary: Story = {
    args: {
        iconColor: "success",
        disabled: false,
        onClick: () => alert("Favorite Icon one"),
    },
};
export const Secondary: Story = {
    args: {
        iconColor: "warning",
        disabled: true,
    },
}