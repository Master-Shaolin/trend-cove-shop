"use client";

import { cn } from "@/libs/utils";
import { navBarItems } from "@/mock/MockData";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
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
        <nav className="w-full relative hidden lg:flex ltr:md:ml-6 rtl:md:mr-6 ltr:xl:ml-10 rtl:xl:mr-10">
          {navBarItems.map((navItem, index) => (
            <div
              key={index}
              className="group cursor-pointer py-7 relative after:content-[''] after:w-0 after:absolute after:bottom-0 after:left-full after:h-1 after:bg-black menu-item-transition hover:after:w-full hover:after:left-0"
            >
              <Link
                href={navItem.url}
                className="group relative inline-flex items-center px-3 py-2 gap-1 text-gray-700 text-sm font-normal xl:text-base text-heading xl:px-4 hover:text-black"
              >
                {navItem.title}
                {navItem.hasMenu ? (
                  <IoIosArrowDown className="text-gray-400 w-4 h-4 mt-1 transition duration-300 ease-in-out group group-hover:-rotate-180" />
                ) : (
                  ""
                )}
              </Link>
              {navItem.hasMenu ? (
                <div className="absolute flex items-start justify-center h-96 w-full">
                  <div className="relative w-full">
                  <DropdownMenu open={true}>
                  {navItem.menu?.map((menu, mIndex) => (
                    <DropdownMenuContent
                      key={mIndex}
                      className="bg-slate-50 w-56 rounded p-1 border border-zinc-300"
                      align="center"
                    >
                      <DropdownMenuLabel className="font-semibold">
                        {menu.title}
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator className="my-1 h-px bg-slate-300" />
                      <DropdownMenuItem className="cursor-pointer">
                        Profile
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">
                        Billing
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">
                        Team
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">
                        Subscription
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  ))}
                </DropdownMenu>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
