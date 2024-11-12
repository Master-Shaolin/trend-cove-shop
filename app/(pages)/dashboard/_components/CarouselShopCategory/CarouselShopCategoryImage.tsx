import Link from "next/link";
import { PiLinkBold } from "react-icons/pi";

interface IProps {
  src: string;
  name: string;
}

const CarouselShopCategoryImage = ({ src, name }: IProps) => {
  return (
    <Link className="group flex justify-center text-center flex-col" href={""}>
      <div className="w-[180px] relative inline-flex mb-3.5 md:mb-4 lg:mb-5 xl:mb-6 mx-auto rounded-full">
        <img
          className="bg-gray-300 object-cover size-full rounded-full"
          src={src}
          alt={name}
        />
        <div className="flex justify-center items-center absolute top left bg-black w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-30 rounded-full"></div>
        <div className="absolute top left h-full w-full flex items-center justify-center">
          <PiLinkBold className="text-white text-base sm:text-xl lg:text-2xl xl:text-3xl transform opacity-0 scale-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100" />
        </div>
      </div>
      <h4 className="text-heading text-sm md:text-base xl:text-lg font-semibold capitalize">{name}</h4>
    </Link>
  );
};

export default CarouselShopCategoryImage;
