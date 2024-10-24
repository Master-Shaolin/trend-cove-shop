"use client";

import { cn } from "@/libs/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";
import { IoIosArrowDown } from "react-icons/io";

interface NavbarProps {
  isScrolling: boolean;
}

const Navbar = ({ isScrolling }: NavbarProps) => {
  return (
    <div
      className={cn(
        "fixed z-20 w-full h-16 px-4 text-gray-700 transition duration-200 ease-in-out bg-white innerSticky body-font sm:h-20 lg:h-24 md:px-8 lg:px-6",
        {
          "shadow-[0px_2px_3px_0px_#00000014]": isScrolling,
        }
      )}
    >
      <div className="flex items-center justify-center mx-auto max-w-[1920px] h-full w-full">
        <NavigationMenu className="w-full h-full hidden lg:flex ltr:md:ml-6 rtl:md:mr-6 ltr:xl:ml-10 rtl:xl:mr-10">
          <NavigationMenuList className="flex h-full">
            <div className="relative">
              <NavigationMenuItem className="h-full relative group cursor-pointer py-0 after:content-[''] after:w-0 after:absolute after:bottom-0 after:left-full after:h-1 after:bg-black menu-item-transition hover:after:w-full hover:after:left-0">
                <NavigationMenuTrigger className="h-full group inline-flex items-center px-3 py-2 gap-1 text-gray-700 text-sm font-normal xl:text-base text-heading xl:px-4 hover:text-black">
                  Item One
                  <IoIosArrowDown className="text-gray-400 w-4 h-4 mt-1 transition duration-300 ease-in-out group group-hover:-rotate-180" />
                </NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-full absolute flex flex-col gap-2 top-full bg-zinc-300 py-5">
                  <NavigationMenuLink>Link</NavigationMenuLink>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Navbar;
