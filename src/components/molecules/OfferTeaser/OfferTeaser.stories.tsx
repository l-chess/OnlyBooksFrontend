import type { Meta, StoryObj } from "@storybook/react";
import { OfferTeaser } from "./OfferTeaser";

const meta = {
  title: "Molecules/OfferTeaser",
  component: OfferTeaser,
  tags: ["autodocs"],
} satisfies Meta<typeof OfferTeaser>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    id: 1,
    title: "The Song of Achilles",
    className: "w-50",
    author: "Madeline Miller",
    genre: "LGBTQ+",
    language: "Englisch",
    postCode: "12345",
    city: "Hamburg",
    price: 5,
    condition: "Leichte Gebrauchsspuren",
    image: {
      src: "https://booklounge.co.za/wp-content/uploads/2022/08/the-song-of-achilles-1.jpg",
      alt: "The Song of Achilles Book Cover",
    },
    imageClassname: "w-50",
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    id: 1,
    title: "The Song of Achilles",
    className: "w-screen",
    author: "Madeline Miller",
    genre: "LGBTQ+",
    language: "Englisch",
    postCode: "12345",
    city: "Hamburg",
    price: 5,
    condition: "Leichte Gebrauchsspuren",
    image: {
      src: "https://booklounge.co.za/wp-content/uploads/2022/08/the-song-of-achilles-1.jpg",
      alt: "The Song of Achilles Book Cover",
    },
    imageClassname: "w-50",
    size: "medium",
  },
};
