"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel/Carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

import { flashSaleProducts } from "@/mock/MockData";
import CarouselFlashCard from "./CarouselFlashCard";

const CarouselFlashSale = () => {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[plugin.current as any]}
      className="h-full"
      hasScrollSnaps={false}
    >
      <CarouselContent className="m-0 h-full">
        { flashSaleProducts.map((product,index) => (
          <CarouselItem key={index} className="flex flex-col justify-between h-full items-center pl-0">
            <CarouselFlashCard product={product}/>
          </CarouselItem>
        ))

        }
      </CarouselContent>
      <CarouselPrevious className="bg-white top-1/3  -left-4" />
      <CarouselNext className="bg-white  top-1/3 -right-4" />
    </Carousel>
  );
};

export default CarouselFlashSale;
