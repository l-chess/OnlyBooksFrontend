import type { Meta, StoryObj } from "@storybook/react";
import { ChatOptions } from "./ChatOptions";

const meta = {
  title: "Molecules/ChatOptions",
  component: ChatOptions,
  tags: ["autodocs"],
} satisfies Meta<typeof ChatOptions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
