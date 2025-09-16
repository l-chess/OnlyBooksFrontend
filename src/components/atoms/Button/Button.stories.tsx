import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["Button", "Label", "Dropdown"],
    },
    color: {
      control: { type: "radio" },
      options: ["Lilla", "Gray", "White"],
    },
    onClick: { action: "clicked" },
  },
  args: {
    text: "Profil ansehen",
    type: "Button",
    color: "Lilla",
    onClick: () => alert("Clicked!"),
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Label: Story = {
  args: {
    text: "Fantasy Romance",
    type: "Label",
    color: "Gray",
  },
};

export const Dropdown: Story = {
  args: {
    text: "Sprache",
    type: "Dropdown",
    color: "White",
    lang: true,
    dropdownOptions: [
      {
        text: "Deutsch",
        destination: "",
      },
      {
        text: "Englisch",
        destination: "",
      },
    ],
  },
};
