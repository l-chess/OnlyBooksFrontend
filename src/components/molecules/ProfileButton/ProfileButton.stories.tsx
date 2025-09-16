import type { Meta, StoryObj } from "@storybook/react";
import { ProfileButton } from "./ProfileButton";

const meta = {
  title: "Molecules/ProfileButton",
  component: ProfileButton,
  tags: ["autodocs"],
} satisfies Meta<typeof ProfileButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    authenticated: true,
  },
};

export const LoggedOut: Story = {
  args: {
    authenticated: false,
  },
};
