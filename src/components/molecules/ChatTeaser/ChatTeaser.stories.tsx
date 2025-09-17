import type { Meta, StoryObj } from "@storybook/react";
import { ChatTeaser } from "./ChatTeaser";

const meta = {
  title: "Molecules/ChatTeaser",
  component: ChatTeaser,
  tags: ["autodocs"],
} satisfies Meta<typeof ChatTeaser>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cover: {
      src: "https://booklounge.co.za/wp-content/uploads/2022/08/the-song-of-achilles-1.jpg",
      alt: "The Song of Achilles",
    },
    title: "The Song of Achilles",
    latestMessage: "Ja, ist noch zu haben.",
    timeStamp: "1h",
  },
};
