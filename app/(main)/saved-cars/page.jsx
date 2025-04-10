import { getSavedCars } from "@/actions/car-listing";
import { auth } from "@clerk/nextjs/server";
import React from "react";
import SavedCarsList from "./_components/saved-cars-list";

export default async function SavedCarsPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in?redirect=/saved-cars");
  }

  const SavedCarsResult = await getSavedCars();
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-6xl mb-6">Your Saved Cars</h1>

      <SavedCarsList initialData={SavedCarsResult} />
    </div>
  );
}
