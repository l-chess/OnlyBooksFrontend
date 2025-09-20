import type { Meta, StoryObj } from "@storybook/react";
import Homepage from "./page";

const meta = {
  title: "Pages/Homepage",
  component: Homepage,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-screen">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Homepage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    languages: [
      { label: "Deutsch", href: "" },
      { label: "Englisch", href: "" },
    ],
    genres: [
      { label: "Dark Romance", href: "" },
      { label: "Manga", href: "" },
    ],
    offers: [
      {
        title: "The Song of Achilles",
        author: "Madeline Miller",
        tags: ["Englisch", "LGBTQ+"],
        postCode: "12345",
        city: "Hamburg",
        price: 5,
        condition: "Leichte Gebrauchsspuren",
        image: {
          src: "https://booklounge.co.za/wp-content/uploads/2022/08/the-song-of-achilles-1.jpg",
          alt: "The Song of Achilles Book Cover",
          className: "w-50",
        },
        size: "medium",
      },
      {
        title: "The Song of Achilles",
        author: "Madeline Miller",
        tags: ["Englisch", "LGBTQ+"],
        postCode: "12345",
        city: "Hamburg",
        price: 5,
        condition: "Leichte Gebrauchsspuren",
        image: {
          src: "https://booklounge.co.za/wp-content/uploads/2022/08/the-song-of-achilles-1.jpg",
          alt: "The Song of Achilles Book Cover",
          className: "w-50",
        },
        size: "medium",
      },
      {
        title: "The Song of Achilles",
        author: "Madeline Miller",
        tags: ["Englisch", "LGBTQ+"],
        postCode: "12345",
        city: "Hamburg",
        price: 5,
        condition: "Leichte Gebrauchsspuren",
        image: {
          src: "https://booklounge.co.za/wp-content/uploads/2022/08/the-song-of-achilles-1.jpg",
          alt: "The Song of Achilles Book Cover",
          className: "w-50",
        },
        size: "medium",
      },
      {
        title: "The Song of Achilles",
        author: "Madeline Miller",
        tags: ["Englisch", "LGBTQ+"],
        postCode: "12345",
        city: "Hamburg",
        price: 5,
        condition: "Leichte Gebrauchsspuren",
        image: {
          src: "https://booklounge.co.za/wp-content/uploads/2022/08/the-song-of-achilles-1.jpg",
          alt: "The Song of Achilles Book Cover",
          className: "w-50",
        },
        size: "medium",
      },
    ],
  },
};
