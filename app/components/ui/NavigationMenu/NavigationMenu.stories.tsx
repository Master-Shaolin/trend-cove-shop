import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";
import type { Meta, StoryObj } from "@storybook/react";
NavigationMenu;
const meta: Meta<typeof NavigationMenu> = {
  title: "ui/NavigationMenu",
  component: NavigationMenu,
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof NavigationMenu>;

export const AlignCenter: Story = {
  render: (args) => (
    <div className="flex items-start justify-center h-96 w-full">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  ),
  args: {},
};
