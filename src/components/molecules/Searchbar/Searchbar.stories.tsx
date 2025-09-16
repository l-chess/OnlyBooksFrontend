import type { Meta, StoryObj } from "@storybook/react";
import { Searchbar } from "./Searchbar";

const meta = {
  title: "Molecules/Searchbar",
  component: Searchbar,
  tags: ["autodocs"],
} satisfies Meta<typeof Searchbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
