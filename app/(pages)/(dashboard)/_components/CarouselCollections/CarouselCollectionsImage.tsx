import ShineGradient from "@/components/ShineGradient";

interface CarouselCollectionsImageProps {
  src: string;
}

const CarouselCollectionsImage = ({ src }: CarouselCollectionsImageProps) => {
  return (
    <div className="size-full relative">
      <img
        className="bg-gray-300 object-cover size-full rounded-md"
        src={src}
      />
      <ShineGradient />
    </div>
  );
};

export default CarouselCollectionsImage;
