import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/Carousel/Carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import CarouselCollectionsImage from "./CarouselCollectionsImage";
import collection2 from "/public/images/kids-collection.jpg";
import collection3 from "/public/images/mens-collection.jpg";
import collection1 from "/public/images/womens-collection.jpg";

const CarouselCollections = () => {
  const plugin = useRef(Autoplay({ delay: 5500, stopOnInteraction: true }));
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[plugin.current as any]}
      hasScrollSnaps={false}
      className="h-full"
    >
      <CarouselContent className="m-0 h-full -ml-7">
        <CarouselItem className="flex justify-center items-center basis-1/3 pl-7">
          <CarouselCollectionsImage src={collection1.src} />
        </CarouselItem>
        <CarouselItem className="flex justify-center items-center basis-1/3 pl-7">
          <CarouselCollectionsImage src={collection2.src} />
        </CarouselItem>
        <CarouselItem className="flex justify-center items-center basis-1/3 pl-7">
          <CarouselCollectionsImage src={collection3.src} />
        </CarouselItem>
        <CarouselItem className="flex justify-center items-center basis-1/3 pl-7">
          <CarouselCollectionsImage src={collection1.src} />
        </CarouselItem>
        <CarouselItem className="flex justify-center items-center basis-1/3 pl-7">
          <CarouselCollectionsImage src={collection2.src} />
        </CarouselItem>
        <CarouselItem className="flex justify-center items-center basis-1/3 pl-7">
          <CarouselCollectionsImage src={collection3.src} />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="w-7 h-7 -left-6 text-black flex items-center justify-center bg-white absolute transition duration-250 hover:bg-gray-900 hover:text-white focus:outline-none transform ltr:shadow-navigation ltr:-translate-x-1/2 rtl:shadow-navigationReverse rtl:translate-x-1/2 lg:w-9 lg:h-9 xl:w-10 xl:h-10 3xl:w-12 3xl:h-12 text-sm md:text-base lg:text-xl 3xl:text-2xl ltr:left-0 rtl:right-0"/>
      <CarouselNext className="w-7 h-7 -right-6 text-black flex items-center justify-center bg-white absolute transition duration-250 hover:bg-gray-900 hover:text-white focus:outline-none transform ltr:shadow-navigation ltr:-translate-x-1/2 rtl:shadow-navigationReverse rtl:translate-x-1/2 lg:w-9 lg:h-9 xl:w-10 xl:h-10 3xl:w-12 3xl:h-12 text-sm md:text-base lg:text-xl 3xl:text-2xl ltr:left-0 rtl:right-0"/>
    </Carousel>
  );
}

export default CarouselCollections
