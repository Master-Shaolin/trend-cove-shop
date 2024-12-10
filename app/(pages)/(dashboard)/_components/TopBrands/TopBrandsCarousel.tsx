import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel/Carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

import { brands } from "@/mock/MockData";
import TopBrandsCard from "./TopBrandsCard";


const TopBrandsCarousel = () => {
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
        <CarouselContent className="m-0 h-full -ml-56">
          { brands.map((brand,bIndex) => (
            <CarouselItem key={bIndex} className="flex justify-center items-center basis-1/8 p-0 mr-7">
              <TopBrandsCard 
                src={`${process.env.NEXT_PUBLIC_STORAGE_URL}${brand.url}`} 
                name={brand.name}
              />
            </CarouselItem>
          ))

          }
        </CarouselContent>
        <CarouselPrevious className="w-7 h-7 -left-6 top-24 lg:w-8 lg:h-8 text-sm md:text-base lg:text-lg text-black flex items-center justify-center bg-white absolute transition duration-250 hover:bg-gray-900 hover:text-white focus:outline-none transform ltr:-translate-x-1/2 rtl:translate-x-1/2 xl:w-10 xl:h-10 3xl:w-12 3xl:h-12 3xl:text-2xl ltr:left-0 rtl:right-0" />
        <CarouselNext className="w-7 h-7 -right-6 top-24 lg:w-8 lg:h-8 text-sm md:text-base lg:text-lg text-black flex items-center justify-center bg-white absolute transition duration-250 hover:bg-gray-900 hover:text-white focus:outline-none transform ltr:-translate-x-1/2 rtl:translate-x-1/2 xl:w-10 xl:h-10 3xl:w-12 3xl:h-12 3xl:text-2xl ltr:left-0 rtl:right-0"/>
      </Carousel>
    );
}

export default TopBrandsCarousel
