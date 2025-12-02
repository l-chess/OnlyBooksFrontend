import type { Meta, StoryObj } from "@storybook/react";
import OfferPage from "./page";

const meta = {
  title: "Pages/OfferPage",
  component: OfferPage,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-screen">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof OfferPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    offer: {
      image: {
        src: "https://booklounge.co.za/wp-content/uploads/2022/08/the-song-of-achilles-1.jpg",
        alt: "The Song of Achilles Book Cover",
        className: "",
      },
      title: "The Song of Achilles",
      author: "Madeline Miller",
      tags: ["Englisch"],
      postCode: "12345",
      city: "Hamburg",
      price: 5,
      condition: "Leichte Gebrauchsspuren",
      size: "medium",
    },
    sellerName: "Johanna Brotkernmehl",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    content:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
  },
};
