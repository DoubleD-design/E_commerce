import React from "react";

const HomeSectionCard = () => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border border-indigo-600">
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src="https://cdn.shopify.com/s/files/1/0220/4008/4552/products/4400_CARBON_2.jpg?v=1664470675&width=1500"
          alt=""
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">NoFilter</h3>
        <p className="mt-2 text-sm text-gray-500">Men corton T-shirt</p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
