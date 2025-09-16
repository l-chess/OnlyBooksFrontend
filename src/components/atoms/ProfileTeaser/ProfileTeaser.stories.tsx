import type { Meta, StoryObj } from "@storybook/react";
import { ProfileTeaser } from "./ProfileTeaser";

const meta = {
  title: "Atoms/ProfileTeaser",
  component: ProfileTeaser,
  tags: ["autodocs"],
} satisfies Meta<typeof ProfileTeaser>;

export default meta;
type Story = StoryObj<typeof meta>;

export const External: Story = {
  args: {
    name: "Renate M.",
    variant: "external",
  },
};

export const Profile: Story = {
  args: {
    name: "Renate M.",
    variant: "profile",
  },
};
