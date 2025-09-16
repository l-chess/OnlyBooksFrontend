import type { Meta, StoryObj } from "@storybook/react";
import { ImageUpload } from "./ImageUpload";

const meta = {
  title: "Molecules/ImageUpload",
  component: ImageUpload,
  tags: ["autodocs"],
} satisfies Meta<typeof ImageUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = () => {
  return (
    <div className="flex gap-4">
      <ImageUpload variant="specific" label="Buchover" />
      <ImageUpload variant="specific" label="Buchrücken" />
      <ImageUpload variant="additional" />
    </div>
  );
};

export const Specific: Story = {
  args: {
    variant: "specific",
    label: "Buchover",
  },
};

export const Additional: Story = {
  args: {
    variant: "additional",
  },
};
