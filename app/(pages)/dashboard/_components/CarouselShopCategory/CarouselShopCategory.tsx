import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel/Carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import CarouselShopCategoryImage from "./CarouselShopCategoryImage";
import category1 from "/public/images/By Category/bags.jpg";
import category2 from "/public/images/By Category/kid.jpg";
import category3 from "/public/images/By Category/man.jpg";
import category4 from "/public/images/By Category/sneakers.jpg";
import category5 from "/public/images/By Category/sports.jpg";
import category6 from "/public/images/By Category/sunglass.jpg";
import category7 from "/public/images/By Category/watch.jpg";
import category8 from "/public/images/By Category/woman.jpg";

const CarouselShopCategory = () => {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[plugin.current as any]}
      hasScrollSnaps={false}
      className="h-full"
    >
      <CarouselContent className="m-0 h-full gap-[2px] -ml-[230px]">
        <CarouselItem className="flex justify-center items-center basis-1/8 p-0 mr-12">
          <CarouselShopCategoryImage src={category1.src} />
        </CarouselItem>
        <CarouselItem className="flex justify-center items-center basis-1/8 p-0 mr-12">
          <CarouselShopCategoryImage src={category2.src} />
        </CarouselItem>
        <CarouselItem className="flex justify-center items-center basis-1/8 p-0 mr-12">
          <CarouselShopCategoryImage src={category3.src} />
        </CarouselItem>
        <CarouselItem className="flex justify-center items-center basis-1/8 p-0 mr-12">
          <CarouselShopCategoryImage src={category4.src} />
        </CarouselItem>
        <CarouselItem className="flex justify-center items-center basis-1/8 p-0 mr-12">
          <CarouselShopCategoryImage src={category5.src} />
        </CarouselItem>
        <CarouselItem className="flex justify-center items-center basis-1/8 p-0 mr-12">
          <CarouselShopCategoryImage src={category6.src} />
        </CarouselItem>
        <CarouselItem className="flex justify-center items-center basis-1/8 p-0 mr-12">
          <CarouselShopCategoryImage src={category7.src} />
        </CarouselItem>
        <CarouselItem className="flex justify-center items-center basis-1/8 p-0 mr-12">
          <CarouselShopCategoryImage src={category8.src} />
        </CarouselItem>
        <CarouselItem className="flex justify-center items-center basis-1/8 p-0 mr-12">
          <CarouselShopCategoryImage src={category1.src} />
        </CarouselItem>
        <CarouselItem className="flex justify-center items-center basis-1/8 p-0 mr-12">
          <CarouselShopCategoryImage src={category2.src} />
        </CarouselItem>
        <CarouselItem className="flex justify-center items-center basis-1/8 p-0 mr-12">
          <CarouselShopCategoryImage src={category3.src} />
        </CarouselItem>
        <CarouselItem className="flex justify-center items-center basis-1/8 p-0 mr-12">
          <CarouselShopCategoryImage src={category4.src} />
        </CarouselItem>
        <CarouselItem className="flex justify-center items-center basis-1/8 p-0 mr-12">
          <CarouselShopCategoryImage src={category5.src} />
        </CarouselItem>
        <CarouselItem className="flex justify-center items-center basis-1/8 p-0 mr-12">
          <CarouselShopCategoryImage src={category6.src} />
        </CarouselItem>
        <CarouselItem className="flex justify-center items-center basis-1/8 p-0 mr-12">
          <CarouselShopCategoryImage src={category7.src} />
        </CarouselItem>
        <CarouselItem className="flex justify-center items-center basis-1/8 p-0 mr-12">
          <CarouselShopCategoryImage src={category8.src} />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="w-7 h-7 -left-6 lg:w-8 lg:h-8 text-sm md:text-base lg:text-lg text-black flex items-center justify-center bg-white absolute transition duration-250 hover:bg-gray-900 hover:text-white focus:outline-none transform ltr:-translate-x-1/2 rtl:translate-x-1/2 xl:w-10 xl:h-10 3xl:w-12 3xl:h-12 3xl:text-2xl ltr:left-0 rtl:right-0" />
      <CarouselNext className="w-7 h-7 -right-6 lg:w-8 lg:h-8 text-sm md:text-base lg:text-lg text-black flex items-center justify-center bg-white absolute transition duration-250 hover:bg-gray-900 hover:text-white focus:outline-none transform ltr:-translate-x-1/2 rtl:translate-x-1/2 xl:w-10 xl:h-10 3xl:w-12 3xl:h-12 3xl:text-2xl ltr:left-0 rtl:right-0"/>
    </Carousel>
  );
};

export default CarouselShopCategory;
