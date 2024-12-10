"use client";

import { SignInModal } from "@/(pages)/dashboard/_components/SingIn/SignInModal";
import { useSignInContext } from "@/(pages)/dashboard/_components/SingIn/SignUpContext";
import { cn } from "@/libs/utils";
import { navBarItems } from "@/mock/MockData";
import NiceModal from "@ebay/nice-modal-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { LuSearch } from "react-icons/lu";
import { PiShoppingBag } from "react-icons/pi";
import { Button } from "./ui/Button/Button";
import logo from "/public/images/logo.png";

interface NavbarProps {
  isScrolling: boolean;
}

const Navbar = ({ isScrolling }: NavbarProps) => {
  const { handleSetIsModalOpen } = useSignInContext();

  const handleSubscribeModal = () => {
    handleSetIsModalOpen(true);
    NiceModal.show(SignInModal);
  };

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
        <Link
          href={""}
          className="flex justify-center relative overflow-hidden w-40"
        >
          <img className="object-cover w-full rounded-md" src={logo.src} />
        </Link>
        <NavigationMenu className="w-full h-full hidden lg:flex ltr:md:ml-4 rtl:md:mr-4 ltr:xl:ml-6 rtl:xl:mr-6">
          <NavigationMenuList className="flex w-full h-full">
            <div className="flex relative">
              {navBarItems.map((navItem, navIndex) => (
                <NavigationMenuItem
                  key={navIndex}
                  className="h-full relative group cursor-pointer py-0 after:content-[''] after:w-0 after:absolute after:bottom-0 after:left-full after:h-1 after:bg-black menu-item-transition hover:after:w-full hover:after:left-0"
                >
                  <NavigationMenuTrigger className="h-full group inline-flex items-center px-3 py-2 gap-1 text-gray-700 text-sm font-normal xl:text-base xl:px-4 hover:text-black">
                    {navItem.title}
                    {navItem.hasMenu ? (
                      <IoIosArrowDown className="text-gray-400 w-4 h-4 mt-1 transition duration-300 ease-in-out group group-hover:-rotate-180" />
                    ) : (
                      ""
                    )}
                  </NavigationMenuTrigger>
                  {navItem.hasMenu ? (
                    <NavigationMenuContent
                      className={`
                        min-w-full absolute flex top-full bg-zinc-50 opacity-0 
                        data-[state=open]:animate-fadeInUpMenu
                      `}
                    >
                      {navItem.menus?.map((menu, menuIndex) => (
                        <div
                          key={menuIndex}
                          className="flex flex-col min-w-60 even:bg-gray-100 py-5"
                        >
                          {menu.submenus.map((submenu, sIndex) => (
                            <div key={sIndex}>
                              <NavigationMenuLink className="flex items-center py-2 ltr:pl-5 rtl:pr-5 ltr:xl:pl-7 rtl:xl:pr-7 ltr:pr-3 rtl:pl-3 ltr:xl:pr-3.5 rtl:xl:pl-3.5 hover:text-dark hover:bg-gray-300">
                                <span className="text-dark font-semibold">
                                  {submenu.title}
                                </span>
                              </NavigationMenuLink>
                              {submenu.childs &&
                                submenu.childs.map((sChild, sChildIndex) => (
                                  <NavigationMenuLink
                                    key={sChildIndex}
                                    className="flex items-center py-2 ltr:pl-5 rtl:pr-5 ltr:xl:pl-7 rtl:xl:pr-7 ltr:pr-3 rtl:pl-3 ltr:xl:pr-3.5 rtl:xl:pl-3.5 hover:text-dark hover:bg-gray-300"
                                  >
                                    {sChild.title}
                                  </NavigationMenuLink>
                                ))}
                              {submenu.childs ? <hr /> : ""}
                            </div>
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
        <div className="items-center justify-end flex-shrink-0 hidden lg:flex gap-x-6 lg:gap-x-5 xl:gap-x-8 2xl:gap-x-10 ltr:ml-auto rtl:mr-auto">
          <Button
            variant={"text"}
            size="text"
            className="relative flex items-center justify-center flex-shrink-0 h-auto transform focus:outline-none"
          >
            <LuSearch className="w-6 h-6" />
          </Button>
          <div className="-mt-0.5 flex-shrink-0">
            <Button
              variant={"text"}
              size="text"
              className="text-sm font-semibold xl:text-base text-dark"
              onClick={() => handleSubscribeModal()}
            >
              Sign in
            </Button>
          </div>
          <Button
            variant={"text"}
            size="text"
            className="relative flex items-center justify-center flex-shrink-0 h-auto font-normal transform focus:outline-none"
          >
            <div className="flex items-center justify-center bg-dark text-white font-bold w-5 h-5 absolute text-[10px] rounded-full -top-2 left-4">
              0
            </div>
            <PiShoppingBag className="w-7 h-7" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
