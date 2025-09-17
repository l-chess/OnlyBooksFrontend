import type { Meta, StoryObj } from "@storybook/react";
import { SearchFilter } from "./SearchFilter";

const meta = {
  title: "Molecules/SearchFilter",
  component: SearchFilter,
  tags: ["autodocs"],
} satisfies Meta<typeof SearchFilter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    languages: ["Deutsch", "Englisch"],
    condition: [
      { label: "Alle", href: "" },
      { label: "Wie neu", href: "" },
      { label: "Leichte Gebrauchsspuren", href: "" },
      { label: "Gebraucht", href: "" },
      { label: "Kaputt", href: "" },
    ],
  },
};
