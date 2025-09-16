import type { Meta, StoryObj } from "@storybook/react";
import { UploadButton } from "./UploadButton";

const meta = {
  title: "Atoms/UploadButton",
  component: UploadButton,
  tags: ["autodocs"],
} satisfies Meta<typeof UploadButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: "/",
  },
};
