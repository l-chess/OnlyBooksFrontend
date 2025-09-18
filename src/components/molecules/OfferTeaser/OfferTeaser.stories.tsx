import type { Meta, StoryObj } from "@storybook/react";
import { OfferTeaser } from "./OfferTeaser";

const meta = {
  title: "Molecules/OfferTeaser",
  component: OfferTeaser,
  tags: ["autodocs"],
} satisfies Meta<typeof OfferTeaser>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "The Song of Achilles",
    className: "w-50",
    href: "",
    author: "Madeline Miller",
    language: "Englisch",
    postCode: "12345",
    city: "Hamburg",
    price: 5,
    image: {
      src: "https://booklounge.co.za/wp-content/uploads/2022/08/the-song-of-achilles-1.jpg",
      alt: "The Song of Achilles Book Cover",
      className: "",
    },
  },
};
