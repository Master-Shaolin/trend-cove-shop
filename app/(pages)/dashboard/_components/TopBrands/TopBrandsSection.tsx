import TopBrandsCarousel from "./TopBrandsCarousel"

const TopBrandsSection = () => {
  return (
    <div className='mb-11 md:mb-11 lg:mb-12 xl:mb-14 lg:pb-1 xl:pb-0'>
      <div className="flex items-center justify-between -mt-2 pb-0.5 mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8">
        <h3 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold text-heading">Top Brands</h3>
      </div>
      <TopBrandsCarousel />
    </div>
  )
}

export default TopBrandsSection
