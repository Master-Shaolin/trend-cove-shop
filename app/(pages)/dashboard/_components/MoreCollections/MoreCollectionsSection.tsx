import { Card, CardContent, CardFooter } from "@/components/ui/Card/Card";
import Link from "next/link";

const MoreCollectionsSection = () => {
  return (
    <div>
      <div className="mb-12 md:mb-14 xl:mb-16 lg:pt-1 xl:pt-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-7">
        <Link
          className="group text-center flex flex-col sm:last:hidden lg:last:flex border sm:border-0 border-gray-300 overflow-hidden rounded-md pb-4 sm:pb-0 justify-between sm:even:flex-col-reverse"
          href={""}
        >
          <Card className="border-none">
            <CardContent className="flex mx-auto flex-col relative p-0">
              <div className="flex">
                <img
                  className="bg-gray-300 object-cover sm:rounded-md transition duration-200 ease-in-out group-hover:opacity-90"
                  alt="title"
                  src={`${process.env.NEXT_PUBLIC_STORAGE_URL}/v1731461938/spring-knits_crgoxy.webp`}
                />
              </div>
              <div className="overflow-hidden absolute bottom-3.5 lg:bottom-5 right-3.5 lg:right-5 p-2">
                <span className="inline-block text-[13px] md:text-sm leading-4 cursor-pointer transition ease-in-out duration-300 font-semibold text-center rounded-md bg-white text-dark shadow-navigation py-3 lg:py-4 px-4 lg:px-6 hover:bg-dark hover:text-white transform lg:translate-y-full lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:translate-y-0">
                  View Collection
                </span>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col pt-3.5 lg:pt-4 xl:pt-5 3xl:pt-7 px-4 sm:px-0">
              <h3 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold text-heading mb-1.5 lg:mb-2.5 2xl:mb-3 3xl:mb-3.5">
                New Spring Knits
              </h3>
              <p className="text-body text-[13px] md:text-sm leading-6 md:leading-7 xl:px-10 3xl:px-20">
                Endlessly versatile new styles that say yes to spring. The
                season’s looking bright.
              </p>
            </CardFooter>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default MoreCollectionsSection;
