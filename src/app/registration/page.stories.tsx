import type { Meta, StoryObj } from "@storybook/react";
import Registration from "./page";

const meta = {
  title: "Pages/Registration",
  component: Registration,
  tags: ["autodocs"],
} satisfies Meta<typeof Registration>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
