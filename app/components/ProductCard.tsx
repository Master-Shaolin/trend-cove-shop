"use client";
import { IProductCardDetails } from "@/types";
import { Card } from "./ui/Card/Card";

const ProductCard = ({ product }: { product: IProductCardDetails }) => {
  return (
    <Card className="group box-border overflow-hidden flex rounded-md cursor-pointer shadow-none border-none ltr:pr-0 rtl:pl-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform hover:-translate-y-1 md:hover:-translate-y-1.5 hover:shadow-product">
      <div className="flex mb-3 md:mb-3.5">
        <img
          className="bg-gray-300 object-cover rounded-s-md w-full transition duration-200 ease-in rounded-md group-hover:rounded-b-none"
          src={`${process.env.NEXT_PUBLIC_STORAGE_URL}${product.url}`}
        />
      </div>
      <div className="w-full overflow-hidden p-2 md:px-2.5 xl:px-4">
        <h2 className="truncate mb-1 text-sm md:text-base font-semibold text-heading">
          {product.title}
        </h2>
        <p className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">
          {product.description}
        </p>
        <div
          className="font-semibold text-sm sm:text-base mt-1.5 flex flex-wrap gap-x-2 lg:text-lg lg:mt-2.5
           text-heading"
        >
          <span className="inline-block false">${product.price}</span>
          { product.oldPrice > 0 ?
            <del className="sm:text-base font-normal text-gray-500">${product.oldPrice}</del> : ""
          }
        </div>
      </div>
    </Card>
  )
}

export default ProductCard
