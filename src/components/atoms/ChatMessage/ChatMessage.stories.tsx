import type { Meta, StoryObj } from "@storybook/react";
import { ChatMessage } from "./ChatMessage";

const meta = {
  title: "Atoms/ChatMessage",
  component: ChatMessage,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="flex w-screen items-center justify-center">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ChatMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Self: Story = {
  args: {
    message: "Hi, ist das Buch noch zu haben?",
    self: true,
  },
};

export const Incoming: Story = {
  args: {
    message: "Ja, ist noch zu haben.",
    self: false,
  },
};

export const Long: Story = {
  args: {
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel euismod nibh, vel lacinia velit. Nam lobortis rhoncus lacinia. Nullam laoreet sit amet dui in pellentesque. Ut at est vel nulla feugiat interdum nec ornare leo. Mauris fringilla hendrerit justo sed sollicitudin. Aenean non felis purus. Mauris nec luctus orci.",
    self: true,
  },
};
