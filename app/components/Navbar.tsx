"use client";

import { cn } from "@/libs/utils";
import { navBarItems } from "@/mock/MockData";
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
          <NavigationMenuList className="flex w-full h-full">
            <div className="flex relative">
              {navBarItems.map((navItem, navIndex) => (
                <NavigationMenuItem
                  key={navIndex}
                  className="h-full relative group cursor-pointer py-0 after:content-[''] after:w-0 after:absolute after:bottom-0 after:left-full after:h-1 after:bg-black menu-item-transition hover:after:w-full hover:after:left-0"
                >
                  <NavigationMenuTrigger className="h-full group inline-flex items-center px-3 py-2 gap-1 text-gray-700 text-sm font-normal xl:text-base text-heading xl:px-4 hover:text-black">
                    {navItem.title}
                    {navItem.hasMenu ? (
                      <IoIosArrowDown className="text-gray-400 w-4 h-4 mt-1 transition duration-300 ease-in-out group group-hover:-rotate-180" />
                    ) : (
                      ""
                    )}
                  </NavigationMenuTrigger>
                  {navItem.hasMenu ? (
                    <NavigationMenuContent className="min-w-full absolute flex top-full bg-zinc-50">
                      {navItem.menus?.map((menu, menuIndex) => (
                        <div
                          key={menuIndex}
                          className="flex flex-col min-w-60 even:bg-gray-100 py-5"
                        >
                          <NavigationMenuLink className="flex items-center py-2 ltr:pl-5 rtl:pr-5 ltr:xl:pl-7 rtl:xl:pr-7 ltr:pr-3 rtl:pl-3 ltr:xl:pr-3.5 rtl:xl:pl-3.5 hover:text-heading hover:bg-gray-300">
                            <span className="text-dark font-semibold">
                              {menu.title}
                            </span>
                          </NavigationMenuLink>
                          {menu.childs &&
                            menu.childs.map((mChild, mChildIndex) => (
                              <NavigationMenuLink
                                key={mChildIndex}
                                className="flex items-center py-2 ltr:pl-5 rtl:pr-5 ltr:xl:pl-7 rtl:xl:pr-7 ltr:pr-3 rtl:pl-3 ltr:xl:pr-3.5 rtl:xl:pl-3.5 hover:text-heading hover:bg-gray-300"
                              >
                                {mChild.title}
                              </NavigationMenuLink>
                            ))}
                        </div>
                      ))}
                    </NavigationMenuContent>
                  ) : (
                    ""
                  )}
                </NavigationMenuItem>
              ))}
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Navbar;
