## Getting Started
This project uses pnpm and NextJS. If you want to see the preview of this project, run `pnpm build` first.
You can see the live preview of NextJS by running `pnpm dev` and a static preview by running `pnpm start`.

To see the preview of individual components in Storybook, run `pnpm build-storybook` and then `pnpm storybook`.

## Development
This project uses React and Typescript together with Storybook. Each component receives a Storybook implementation.
For the .tsx component files, code should follow this structure:
```typescript
export type ComponentProps = {
  ...
}

export const Component = ({...}: ComponentProps) => {
  ...
}
```
All functions are declared as arrow functions, all variables and types declared outside of a component should be exported, all component specific functions are declared inside the component.
For the Storybook files, code should follow this structure:
```typescript
import type { Meta, StoryObj } from "@storybook/react";
import { Component } from "./Component";

const meta = {
  title: "Atoms/Component", // "Atoms" may respectively be replaced with "Molecules" or "Pages"
  component: Component,
  tags: ["autodocs"],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...
  }
}
```