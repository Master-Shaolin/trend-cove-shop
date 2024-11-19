import { footerItems, paymentMethods } from "@/mock/MockData";
import Image from "next/image";
import Link from "next/link";
import IconSocial from "./IconSocial";

const Footer = () => {
  return (
    <footer className="border-b-4 border-heading mt-9 md:mt-11 lg:mt-16 3xl:mt-20 pt-2.5 lg:pt-0 2xl:pt-2">
      <div className="mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-9 xl:gap-5  pb-9 md:pb-14 lg:pb-16 2xl:pb-20 3xl:pb-24 lg:mb-0.5 2xl:mb-0 3xl:-mb-1 xl:grid-cols-6">
          {footerItems.map((footerItem, index) => (
            <div key={index} className="pb-3 md:pb-0">
              <h4 className="mb-5 text-sm font-semibold text-heading md:text-base xl:text-lg 2xl:mb-6 3xl:mb-7">
                {footerItem.title}
              </h4>
              <ul className="text-xs lg:text-sm text-body flex flex-col space-y-3 lg:space-y-3.5">
                {footerItem.childs?.map((fChild, index) => (
                  <li key={index} className="flex items-baseline gap-2">
                    {fChild.icon ? (
                      <span className="relative top-0.5 lg:top-1 text-sm lg:text-base">
                        <IconSocial iconName={fChild.icon} />
                      </span>
                    ) : (
                      ""
                    )}

                    <Link
                      className="transition-colors duration-200 hover:text-black text-[15px]"
                      href={fChild.url}
                    >
                      {fChild.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-5 pb-16 mb-2 border-t border-gray-300 sm:pb-20 md:pb-5 sm:mb-0">
        <div className="flex flex-col-reverse md:flex-row text-center md:justify-between mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16">
          <p className="text-body text-sm lg:text-base leading-6">
            Copyright © 2024 All rights reserved
          </p>
          <ul className="flex-wrap items-center justify-center hidden mx-auto mb-1 md:flex gap-x-4 xs:gap-x-5 lg:gap-x-7 md:mb-0 md:mx-0">
            {paymentMethods.map((pm, index) => (
              <li
                key={index}
                className="mb-2 transition md:mb-0 hover:opacity-80"
              >
                <Link href={pm.url}>
                  <Image
                    src={`${pm.image.src}`}
                    alt={pm.title}
                    width={pm.image.width}
                    height={pm.image.height}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
