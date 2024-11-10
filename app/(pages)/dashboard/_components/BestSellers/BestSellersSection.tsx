"use client";

import ProductCard from "@/components/ProductCard";
import { bestSellersProducts } from "@/mock/MockData";

const BestSellersSection = () => {
  return (
    <div className="mb-9 md:mb-10 xl:mb-12">
      <div className="flex items-center justify-between -mt-2 pb-0.5 mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8">
        <h3 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold text-heading">
          Best Sellers
        </h3>
      </div>
      <div className="grid gap-x-3 md:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8 bg-white grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5">
        {bestSellersProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BestSellersSection;
