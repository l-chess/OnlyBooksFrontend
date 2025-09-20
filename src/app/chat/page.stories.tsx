import type { Meta, StoryObj } from "@storybook/react";
import Chat from "./page";

const meta = {
  title: "Pages/Chat",
  component: Chat,
  tags: ["autodocs"],
} satisfies Meta<typeof Chat>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
