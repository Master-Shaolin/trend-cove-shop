import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@radix-ui/react-dropdown-menu";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button/Button";

const meta: Meta<typeof DropdownMenu> = {
  title: "ui/DropdownMenu",
  component: DropdownMenu,
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof DropdownMenu>;

export const AlignCenter: Story = {
  render: (args) => (
    <div className="flex items-start justify-center h-96 w-full">
      <DropdownMenu {...args}>
        <DropdownMenuTrigger><Button variant="secondary">Open</Button></DropdownMenuTrigger>
        <DropdownMenuContent className="bg-slate-50 w-56 rounded p-1 border border-zinc-300" align="center">
          <DropdownMenuLabel className="font-semibold">My Account</DropdownMenuLabel>
          <DropdownMenuSeparator className="my-1 h-px bg-slate-300"/>
          <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">Billing</DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">Team</DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  ),
  args: {},
};

export const AlignStart: Story = {
  render: (args) => (
    <div className="flex items-start justify-center h-96 w-full">
      <DropdownMenu {...args}>
        <DropdownMenuTrigger><Button variant="secondary">Open</Button></DropdownMenuTrigger>
        <DropdownMenuContent className="bg-slate-50 w-56 rounded p-1 border border-zinc-300" align="start">
          <DropdownMenuLabel className="font-semibold">My Account</DropdownMenuLabel>
          <DropdownMenuSeparator className="my-1 h-px bg-slate-300"/>
          <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">Billing</DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">Team</DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  ),
  args: {},
};

export const AlignEnd: Story = {
  render: (args) => (
    <div className="flex items-start justify-center h-96 w-full">
      <DropdownMenu {...args}>
        <DropdownMenuTrigger><Button variant="secondary">Open</Button></DropdownMenuTrigger>
        <DropdownMenuContent className="bg-slate-50 w-56 rounded p-1 border border-zinc-300" align="end">
          <DropdownMenuLabel className="font-semibold">My Account</DropdownMenuLabel>
          <DropdownMenuSeparator className="my-1 h-px bg-slate-300"/>
          <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">Billing</DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">Team</DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  ),
  args: {},
};
