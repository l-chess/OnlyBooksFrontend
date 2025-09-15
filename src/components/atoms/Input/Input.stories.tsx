import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta = {
  title: "Atoms/Input",
  component: Input,
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Underlined: Story = {
  args: {
    variant: "underlined",
    size: "small",
    placeholder: "Input",
  },
};

export const Framed: Story = {
  args: {
    variant: "framed",
    size: "small",
    placeholder: "Input",
  },
};
