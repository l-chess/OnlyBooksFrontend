import type { Meta, StoryObj } from "@storybook/react";
import { DetailAccordion } from "./DetailAccordion";

const meta = {
  title: "Atoms/DetailAccordion",
  component: DetailAccordion,
  tags: ["autodocs"],
} satisfies Meta<typeof DetailAccordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Details anzeigen",
    content: (
      <>
        <b>Titel:</b> The Song of Achilles <br />
        <b>Autor:</b> Madeline Miller <br />
        <b>Sprache:</b> Englisch <br />
        <b>Zustand:</b> Leichte Gebrauchsspuren <br />
        <b>Verlag:</b> Bloomsbury <br />
      </>
    ),
  },
};
