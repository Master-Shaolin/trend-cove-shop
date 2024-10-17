import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/Carousel/Carousel";
import CarouselHeroImage from "./CarouselHeroImage";

import mainSlider1 from "/public/images/main-slider-1.jpg";
import mainSlider2 from "/public/images/main-slider-2.jpg";
import mainSlider3 from "/public/images/main-slider-3.jpg";

const CarouselHero = () => {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      className="h-full"
    >
      <CarouselContent className="m-0 h-full">
        <CarouselItem className="flex justify-center items-center basis-11/12">
          <CarouselHeroImage src={mainSlider1.src}/>
        </CarouselItem>
        <CarouselItem className="flex justify-center items-center basis-11/12">
          <CarouselHeroImage src={mainSlider2.src} />
        </CarouselItem>
        <CarouselItem className="flex justify-center items-center basis-11/12">
          <CarouselHeroImage src={mainSlider3.src} />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default CarouselHero;
