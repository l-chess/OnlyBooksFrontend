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
