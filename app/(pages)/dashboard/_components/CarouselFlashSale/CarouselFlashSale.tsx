"use client";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel/Carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

//import CarouselHeroImage from "../CarouselHeroImage";
//import mainSlider3 from "/public/images/Products/p-24-sm.png";
//import mainSlider2 from "/public/images/Products/p-27-sm.png";
//import mainSlider1 from "/public/images/Products/p-29-sm.png";
import CarouselFlashCart from "./CarouselFlashCart";

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
        <CarouselFlashCart />
      </CarouselContent>
      <CarouselPrevious className="bg-white -left-4" />
      <CarouselNext className="bg-white -right-4" />
    </Carousel>
  );
};

export default CarouselFlashSale;
