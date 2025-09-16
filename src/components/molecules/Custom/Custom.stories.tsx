import type { Meta, StoryObj } from "@storybook/react";
import { Custom } from "./Custom";

const meta = {
  title: "Molecules/Custom",
  component: Custom,
  tags: ["autodocs"],
} satisfies Meta<typeof Custom>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Button: Story = {
  args: {
    label: "Button",
    type: "button",
    color: "lilla",
    size: "small",
  },
};

export const Dropdown: Story = {
  args: {
    label: "Dropdown",
    type: "dropdown",
    color: "white",
    size: "small",
  },
};
