import CarouselHero from "./_components/CarouselHero";

export default function DashboardPage() {
  return (
    <>
      <div className="heroBannerOne relative max-w-[1920px] h-[800px] mb-5 md:mb-12 lg:mb-14 2xl:mb-16 mx-auto overflow-hidden px-4 md:px-8 2xl:px-0">
        <CarouselHero />
      </div>
      <div className="mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16"></div>
    </>
  );
}
