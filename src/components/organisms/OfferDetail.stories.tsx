import type { Meta, StoryObj } from "@storybook/react";
import { OfferDetail } from "./OfferDetail";

const meta = {
  title: "Molecules/OfferTeaser",
  component: OfferDetail,
  tags: ["autodocs"],
} satisfies Meta<typeof OfferDetail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "The Song of Achilles",
    className: "w-4/6",
    author: "Madeline Miller",
    postCode: "12345",
    city: "Hamburg",
    price: 5,
    image: {
      src: "https://booklounge.co.za/wp-content/uploads/2022/08/the-song-of-achilles-1.jpg",
      alt: "The Song of Achilles Book Cover",
      className: "",
    },
    state: "Leichte Gebrauchsspuren",
    sellerName: "JohannaBrotkernmehl",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    details:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    viewProfileLink: "/",
  },
};
