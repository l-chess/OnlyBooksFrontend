import type { Meta, StoryObj } from "@storybook/react";
import { Image } from "./Image";

const meta = {
  title: "Atoms/Image",
  component: Image,
  tags: ["autodocs"],
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "https://booklounge.co.za/wp-content/uploads/2022/08/the-song-of-achilles-1.jpg",
    alt: "The Song of Achilles book cover",
    className: "w-80",
  },
};
