import type { Meta, StoryObj } from "@storybook/react";
import Upload from "./page";

const meta = {
  title: "Pages/Upload",
  component: Upload,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="h-screen w-screen">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Upload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
