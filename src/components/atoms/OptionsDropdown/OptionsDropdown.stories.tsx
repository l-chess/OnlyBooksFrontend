import type { Meta, StoryObj } from "@storybook/react";
import { IoLogOutOutline } from "react-icons/io5";
import { OptionsDropdown } from "./OptionsDropdown";

const meta = {
  title: "Atoms/OptionsDropdown",
  component: OptionsDropdown,
  tags: ["autodocs"],
} satisfies Meta<typeof OptionsDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      {
        label: "Profile",
        href: "/",
      },
      {
        label: "Settings",
        href: "/",
      },
      {
        label: (
          <p className="flex items-center gap-1">
            <IoLogOutOutline /> Log out
          </p>
        ),
        href: "/",
      },
    ],
  },
};

export const Long: Story = {
  args: {
    options: [
      {
        label: "Option 1",
        href: "/",
      },
      {
        label: "Option 2",
        href: "/",
      },
      {
        label: "Option 3",
        href: "/",
      },
      {
        label: "Option 4",
        href: "/",
      },
      {
        label: "Option 5",
        href: "/",
      },
      {
        label: "Option 6",
        href: "/",
      },
      {
        label: "Option 7",
        href: "/",
      },
      {
        label: "Option 8",
        href: "/",
      },
      {
        label: "Option 9",
        href: "/",
      },
      {
        label: "Option 10",
        href: "/",
      },
    ],
  },
};
