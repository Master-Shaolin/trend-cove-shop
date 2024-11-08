interface CarouselHeroImageProps {
  src: string;
}

const CarouselHeroImage = ({ src }: CarouselHeroImageProps) => {
  return (
    <div className="size-full px-1.5">
      <img
        className="bg-gray-300 object-cover size-full rounded-md"
        src={src}
      />
    </div>
  );
};

export default CarouselHeroImage;
