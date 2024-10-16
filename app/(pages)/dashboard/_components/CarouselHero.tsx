import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/Carousel/Carousel";
import CarouselHeroImage from "./CarouselHeroImage";

const CarouselHero = () => {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
    >
      <CarouselContent className="m-0">
        <CarouselItem className="flex justify-center items-center basis-10/12">
          <CarouselHeroImage />
        </CarouselItem>
        <CarouselItem className="flex justify-center items-center basis-10/12">
          <CarouselHeroImage />
        </CarouselItem>
        <CarouselItem className="flex justify-center items-center basis-10/12">
          <CarouselHeroImage />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default CarouselHero;
