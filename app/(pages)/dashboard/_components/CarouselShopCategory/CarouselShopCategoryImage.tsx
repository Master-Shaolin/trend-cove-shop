
interface IProps {
  src: string;
}

const CarouselShopCategoryImage = ({ src }: IProps) => {
  return (
    <div className="relative">
      <div className="w-[180px] relative inline-flex mb-3.5 md:mb-4 lg:mb-5 xl:mb-6 mx-auto rounded-full">
      <img
        className="bg-gray-300 object-cover size-full rounded-full"
        src={src}
      />
      </div>
      
    </div>
  );
};

export default CarouselShopCategoryImage;
