import NewsLetterForm from "./NewsLetterForm";

const NewsLetterSection = () => {
  return (
    <div className="px-5 bg-linen sm:px-8 md:px-16 2xl:px-24 flex flex-col xl:flex-row justify-center xl:justify-between items-center rounded-lg py-10 md:py-14 lg:py-16">
      <div className="lg:-mt-2 xl:-mt-0.5 text-center ltr:xl:text-left rtl:xl:text-right mb-7 md:mb-8 lg:mb-9 xl:mb-0">
        <h3 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold text-heading sm:mb-0 md:mb-2.5 lg:mb-3 xl:mb-3.5">
          Get Expert Tips In Your Inbox
        </h3>
        <p className="text-body text-sm text-left md:text-[15px] leading-6 md:leading-7">
          Subscribe to our newsletter and stay updated.
        </p>
      </div>
      <NewsLetterForm />
    </div>
  );
};

export default NewsLetterSection;
