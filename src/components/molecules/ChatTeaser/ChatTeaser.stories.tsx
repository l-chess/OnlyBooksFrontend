import type { Meta, StoryObj } from "@storybook/react";
import { ChatTeaser } from "./ChatTeaser";

const meta = {
  title: "Molecules/ChatTeaser",
  component: ChatTeaser,
  tags: ["autodocs"],
  decorators: (Story) => (
    <div className="w-80">
      <Story />
    </div>
  ),
} satisfies Meta<typeof ChatTeaser>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Compact: Story = {
  args: {
    cover: {
      src: "https://booklounge.co.za/wp-content/uploads/2022/08/the-song-of-achilles-1.jpg",
      alt: "The Song of Achilles",
    },
    title: "The Song of Achilles",
    variant: "compact",
    messages: [
      {
        message: "Hi, ist das Buch noch zu haben?",
        self: true,
        timeStamp: "1h",
      },
    ],
  },
};

export const Header: Story = {
  args: {
    cover: {
      src: "https://booklounge.co.za/wp-content/uploads/2022/08/the-song-of-achilles-1.jpg",
      alt: "The Song of Achilles",
    },
    title: "The Song of Achilles",
    variant: "header",
    postalCode: "20144 Hamburg",
  },
};
