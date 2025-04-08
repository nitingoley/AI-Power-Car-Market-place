import { getCarFilters } from "@/actions/car-listing";
import React from "react";
import CarsFilter from "./_components/cars-filter";
import CarListing from "./_components/car-listing";

export const metadata = {
  title: "Car | FloxWrap",
  description: "Browse and search for your dream car",
};

export default async function page() {
  const filtersData = await getCarFilters();
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent text-6xl">
        Browse Cars
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* filter  */}
        <div className="w-full lg:w-80 flex-shrink-0">
          <CarsFilter filters={filtersData.data} />
        </div>

        <div className="flex-1">
          {/* /* {Listing } */}
          <CarListing />
        </div>
      </div>
    </div>
  );
}
