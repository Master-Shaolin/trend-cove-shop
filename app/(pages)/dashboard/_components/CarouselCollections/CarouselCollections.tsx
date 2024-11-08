import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/Carousel/Carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import CarouselCollectionsImage from "./CarouselCollectionsImage";
import collection2 from "/public/images/kids-collection.jpg";
import collection3 from "/public/images/mens-collection.jpg";
import collection1 from "/public/images/womens-collection.jpg";

const CarouselCollections = () => {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
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
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default CarouselCollections
