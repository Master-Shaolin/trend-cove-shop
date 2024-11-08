"use client";

import { IProductCardDetails } from "@/types";
import { CSSProperties } from "react";


const CarouselFlashCard = ({product} :{product: IProductCardDetails}) => {
  return (
    <>
      <div className="w-full mb-5 sm:mb-7 lg:mb-8 2xl:mb-10 3xl:mb-12">
        <div className="w-full h-52 flex bg-zinc-50 rounded-md">
          <div className="flex flex-shrink-0 w-32 sm:w-44 md:w-36 lg:w-48 xl:w-40 2xl:w-44 3xl:w-52">
            <div className="size-full">
              <img
                className="bg-gray-300 object-cover size-full rounded-md"
                src={product.url}
              />
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="w-full overflow-hidden p-2 ltr:pl-4 rtl:pr-4 ltr:lg:pl-6 rtl:lg:pr-6 ltr:3xl:pl-7 rtl:3xl:pr-7 ">
              <h2 className="truncate mb-1 font-semibold text-sm sm:text-base md:text-sm lg:text-base xl:text-lg md:mb-1.5 text-heading">
                {product.title}
              </h2>
              <p className="text-gray-600 text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">
                {product.description}
              </p>
              <div
                className="font-semibold text-sm mt-1.5 flex flex-wrap gap-x-2 sm:text-xl md:text-base lg:text-xl md:mt-2.5 2xl:mt-3 text-heading"
              >
                <span className="inline-block false">${product.price}</span>
                <del className="sm:text-base font-normal text-gray-800">
                  ${product.oldPrice}
                </del>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex justify-between items-center px-2 mb-2.5 md:mb-3 xl:mb-2.5 2xl:mb-4">
          <div className="text-body text-xs md:text-sm leading-6 md:leading-7">
            Sold: <span className="text-heading">{product.soldQuantity}</span>
          </div>
          <div className="text-body text-xs md:text-sm leading-6 md:leading-7">
            Available: <span className="text-heading">{product.available}</span>
          </div>
        </div>
        <div className="relative w-full h-2.5 lg:h-3 2xl:h-4 bg-gray-100 rounded-full overflow-hidden">
          <div className={`absolute h-full bg-dark w-[--width]`} style={{'--width': `${product.soldPercentage}%`} as CSSProperties}></div>
        </div>
      </div>
    </>
  );
};

export default CarouselFlashCard;
