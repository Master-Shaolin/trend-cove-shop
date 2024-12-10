import Link from "next/link";

interface IProps {
  src: string;
  name: string;
}

const TopBrandsCard = ({ src, name }: IProps) => {
  return (
    <Link className="group flex justify-center text-center flex-col" href={""}>
      <div className="relative inline-flex mb-3.5 md:mb-4 lg:mb-5 xl:mb-6 mx-auto rounded-md">
        <img
          className="bg-gray-300 object-cover size-full rounded-md"
          src={src}
          alt={name}
        />
      </div>
      <h4 className="text-dark text-sm md:text-base xl:text-lg font-semibold capitalize">{name}</h4>
    </Link>
  );
};

export default TopBrandsCard;
