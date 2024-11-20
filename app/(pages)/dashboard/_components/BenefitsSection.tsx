import { benefits } from "@/mock/MockData";

const BenefitsSection = () => {
  return (
    <div className="mb-12 md:mb-14 xl:mb-16 bg-zinc-50 feature-block-wrapper border border-zinc-200 rounded-md w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 md:gap-12 xl:gap-0 overflow-hidden py-12 xl:py-0 sm:px-4 md:px-8 lg:px-16 xl:px-0">
      {benefits.map((benefit, index) => (
        <div
          key={index}
          className="text-center border-zinc-200 xl:border-l xl:first:border-s-0 px-4 sm:px-2.5 2xl:px-8 3xl:px-12 xl:py-12"
        >
          <div className="flex justify-center mb-3.5 md:mb-5 xl:mb-3.5 2xl:mb-5 w-14 md:w-auto mx-auto">
            <img
              alt={benefit.title}
              src={`${process.env.NEXT_PUBLIC_STORAGE_URL}${benefit.img}`}
              className="object-cover"
            />
          </div>
          <div className="-mb-1">
            <h3 className="text-dark text-lg md:text-xl font-semibold mb-1.5 md:mb-2">
              {benefit.title}
            </h3>
            <p className="text-body text-[15px] leading-6 md:leading-7">
              {benefit.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BenefitsSection;
