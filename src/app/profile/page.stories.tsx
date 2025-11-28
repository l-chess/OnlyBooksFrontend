import type { Meta, StoryObj } from "@storybook/react";
import Profile from "./page";

const meta = {
  title: "Pages/Profile",
  component: Profile,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-screen">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Profile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Johanna Brotkernmehl",
    creationDate: "04.06.2024",
    totalOffers: 3,
    offers: [
      {
        id: 1,
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
        id: 1,
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
        id: 1,
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
