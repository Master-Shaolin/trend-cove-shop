"use client";

import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import CarouselHero from "./CarouselHero/CarouselHero";

import ShineGradient from "@/components/ShineGradient";
import CarouselCollections from "./CarouselCollections/CarouselCollections";
import CarouselFlashSale from "./CarouselFlashSale/CarouselFlashSale";
import banner2 from "/public/images/banner-2.jpg";

const DashboardPageView = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const onscroll = () => {
      setIsScrolling(true);
      const scrolledTo = window.scrollY + window.innerHeight;
      const isReachTop = window.innerHeight === scrolledTo;

      if (isReachTop) {
        setIsScrolling(false);
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", onscroll);
      return () => {
        window.removeEventListener("scroll", onscroll);
      };
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="relative z-20 w-full h-16 sm:h-20 lg:h-24">
        <Navbar isScrolling={isScrolling} />
      </header>
      <main className="relative flex-grow">
        <div className="heroBannerOne relative max-w-[1920px] h-[800px] mb-5 md:mb-12 lg:mb-14 2xl:mb-16 mx-auto overflow-hidden px-4 md:px-8 2xl:px-0">
          <CarouselHero />
        </div>
        <div className="mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16 relative">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-12 lg:gap-y-14 xl:gap-y-0 xl:gap-x-7 mb-12 lg:mb-14 xl:mb-7">
            <div className="mx-auto xl:h-full xl:col-span-2 relative">
              <div className="h-full group flex justify-center relative overflow-hidden">
                <img
                  className="bg-gray-300 object-cover w-full rounded-md"
                  src={banner2.src}
                />
              </div>
              <ShineGradient />
            </div>
            <div className="flex flex-col border border-gray-300 rounded-lg pt-6 sm:pt-7 lg:pt-8 xl:pt-7 2xl:pt-9 px-4 md:px-5 lg:px-7 pb-6 lg:pb-7 xl:px-5 2xl:px-7 col-span-full xl:col-span-1 lg:mb-1 xl:mb-0">
              <div className="flex items-center justify-between -mt-2 mb-4 md:mb-5 lg:mb-6 xl:mb-5 2xl:mb-6 3xl:mb-8">
                <h3 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold text-heading">
                  Flash Sale
                </h3>
              </div>
              <div className="h-full">
                <div className="relative">
                  <CarouselFlashSale />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-12 md:mb-12 lg:mb-14 pb-0.5 xl:pb-1.5">
            <CarouselCollections />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPageView;
