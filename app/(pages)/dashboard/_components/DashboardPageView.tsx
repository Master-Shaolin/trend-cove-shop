"use client";

import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import CarouselHero from "./CarouselHero";

import ShineGradient from "@/components/ShineGradient";
import banner2 from "/public/images/banner-2.jpg";

const DashboardPageView = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPageView;
