import type { Meta, StoryObj } from "@storybook/react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./Dialog";

const meta: Meta<typeof Dialog> = {
  title: "ui/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: (args) => (
    <Dialog {...args}>
      <DialogTrigger className="px-4 py-2 rounded bg-dark text-white">Open</DialogTrigger>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  ),
  args: {},
};
