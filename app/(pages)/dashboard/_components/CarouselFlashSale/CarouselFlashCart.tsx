"use client";
const CarouselFlashCart = () => {
  return (
    <div className="w-full h-52 flex bg-zinc-50 rounded-md">
      <div className="flex flex-shrink-0 w-32 sm:w-44 md:w-36 lg:w-48 xl:w-40 2xl:w-44 3xl:w-52"></div>
      <div className="w-full flex justify-center items-center">
        <div className="w-full overflow-hidden p-2 ltr:pl-4 rtl:pr-4 ltr:lg:pl-6 rtl:lg:pr-6 ltr:3xl:pl-7 rtl:3xl:pr-7 ">
          <h2 className="truncate mb-1 font-semibold text-sm sm:text-base md:text-sm lg:text-base xl:text-lg md:mb-1.5 text-heading">
            NIKE Shoes
          </h2>
          <p className="text-gray-600 text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">
            NIKE 2020 Black White is a clean and monochromatic
          </p>
          <div
            className="font-semibold text-sm mt-1.5 flex flex-wrap gap-x-2 sm:text-xl md:text-base lg:text-xl md:mt-2.5 2xl:mt-3
           text-heading"
          >
            <span className="inline-block false">$50.00</span>
            <del className="sm:text-base font-normal text-gray-800">$80.00</del>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselFlashCart;
