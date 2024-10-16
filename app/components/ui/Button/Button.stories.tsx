import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "ui/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: (args) => <Button {...args}>Button</Button>,
  args: {},
};
export const Disabled: Story = {
  render: (args) => <Button {...args}>Button</Button>,
  args: {
    disabled: true,
  },
};
export const Secondary: Story = {
  render: (args) => <Button {...args}>Button</Button>,
  args: {
    variant: "secondary",
  },
};
export const SecondaryDisabled: Story = {
  render: (args) => <Button {...args}>Button</Button>,
  args: {
    variant: "secondary",
    disabled: true,
  },
};

export const PrimarySmall: Story = {
  render: (args) => <Button {...args}>Button</Button>,
  args: {
    size: "sm",
  },
};

export const Rounded: Story = {
  render: (args) => <Button {...args} className="w-8 h-8 p-4 rounded-full">-</Button>,
  args: {
    variant: "secondary",
  },
};


export const Text: Story = {
  render: (args) => <Button {...args}>Button</Button>,
  args: {
    variant: "text",
  },
};
