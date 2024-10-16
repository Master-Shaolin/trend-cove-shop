import mainSlider1 from "/public/images/main-slider-1.jpg";

const CarouselHeroImage = () => {
  return (
    <div className="h-full px-1.5">
      <img
        className="bg-gray-300 object-cover w-full rounded-md"
        src={mainSlider1.src}
      />
    </div>
  );
};

export default CarouselHeroImage;
