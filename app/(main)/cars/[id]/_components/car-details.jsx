"use client";

import { toggleSavedCar } from "@/actions/car-listing";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { formatCurrency } from "@/lib/helper";
import useFetch from "@/hooks/use-fetch";
import { useAuth } from "@clerk/nextjs";
import {
  Calendar, Car, Currency, Fuel, Gauge, Heart, MessageSquare, Share2
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import EmiCalculatorPage from "./emi-calculator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function CarDetails({ car, testDriveInfo }) {
  const router = useRouter();
  const { isSignedIn } = useAuth();
  const [isWishlisted, setIsWishlisted] = useState(car.wishlisted);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const {
    fn: toggleSavedCarFn,
    loading: savingCar,
    data: toggleResult,
    error: toggleError,
  } = useFetch(toggleSavedCar);

  useEffect(() => {
    if (toggleResult?.success) {
      setIsWishlisted(toggleResult.saved);
      toast.success(toggleResult.message);
    }
  }, [toggleResult]);

  useEffect(() => {
    if (toggleError) toast.error("Failed to update favorites");
  }, [toggleError]);

  const handleSaveCar = async () => {
    if (!isSignedIn) {
      toast.error("Please sign in to save cars");
      return router.push("/sign-in");
    }
    if (!savingCar) await toggleSavedCarFn(car.id);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${car.year} ${car.make} ${car.model}`,
        text: `Check out this ${car.year} ${car.make} ${car.model} on Vehiql!`,
        url: window.location.href,
      }).catch(() => copyToClipboard());
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard");
  };

  return (
    <div className="space-y-10">
      {/* Main Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Image Section */}
        <div className="col-span-7 space-y-4">
          <div className="aspect-video relative rounded-xl overflow-hidden">
            {car.images?.length ? (
              <Image
                src={car.images[currentImageIndex]}
                alt={`${car.make} ${car.model}`}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <Car className="w-24 h-24 text-gray-400" />
              </div>
            )}
          </div>

          {/* Thumbnails */}
          <div className="flex gap-2 overflow-x-auto">
            {car.images?.map((img, i) => (
              <div
                key={i}
                className={`relative w-24 h-16 rounded-lg overflow-hidden cursor-pointer border ${
                  i === currentImageIndex
                    ? "border-blue-500"
                    : "border-transparent hover:opacity-90"
                }`}
                onClick={() => setCurrentImageIndex(i)}
              >
                <Image
                  src={img}
                  alt="Thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="flex gap-3">
            <Button
              variant="secondary"
              className={`flex-1 ${isWishlisted ? "text-red-500" : ""}`}
              onClick={handleSaveCar}
              disabled={savingCar}
            >
              <Heart className={`h-5 w-5 mr-2 ${isWishlisted ? "fill-red-500" : ""}`} />
              {isWishlisted ? "Saved" : "Save"}
            </Button>

            <Button variant="outline" className="flex-1" onClick={handleShare}>
              <Share2 className="h-5 w-5 mr-2" />
              Share
            </Button>
          </div>
        </div>

        {/* Car Info Section */}
        <div className="col-span-5 space-y-4">
          <Badge className="w-fit">{car.bodyType}</Badge>
          <h1 className="text-4xl font-bold">{car.year} {car.make} {car.model}</h1>
          <p className="text-2xl text-blue-600 font-semibold">{formatCurrency(car.price)}</p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            <div className="flex items-center gap-2 text-gray-600">
              <Gauge className="w-5 h-5" />
              <span>{car.mileage.toLocaleString()} miles</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Fuel className="w-5 h-5" />
              <span>{car.fuelType}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Car className="w-5 h-5" />
              <span>{car.transmission}</span>
            </div>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Card className="cursor-pointer hover:shadow-lg transition">
                <CardContent className="p-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <Currency className="text-blue-600" />
                    <h3 className="font-medium">EMI Calculator</h3>
                  </div>
                  <p className="text-sm">
                    Estimated Monthly Payment:{" "}
                    <span className="font-bold">
                      {formatCurrency(car.price / 60)}
                    </span>
                  </p>
                  <p className="text-xs text-gray-500">
                    *Based on $0 down payment and 4.5% interest rate
                  </p>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>FloxWrap EMI Calculator</DialogTitle>
              </DialogHeader>
              <EmiCalculatorPage price={car.price} />
            </DialogContent>
          </Dialog>

          <Card>
            <CardContent className="p-4 space-y-3">
              <div className="flex items-center gap-2 text-lg font-medium">
                <MessageSquare className="text-blue-600" />
                Have Questions?
              </div>
              <p className="text-sm text-gray-600">
                Our team is ready to help. Ask anything!
              </p>
              <a href="mailto:nitingoley42@gmail.com">
                <Button variant="outline" className="w-full">Request Info</Button>
              </a>
            </CardContent>
          </Card>

          {car.status === "SOLD" || car.status === "UNAVAILABLE" ? (
            <Alert variant="destructive">
              <AlertTitle className="capitalize">
                This car is {car.status.toLowerCase()}
              </AlertTitle>
              <AlertDescription>Please check again later.</AlertDescription>
            </Alert>
          ) : (
            <Button className="w-full">
              <Calendar className="mr-2" />
              {testDriveInfo.userTestDrive
                ? `Booked for ${format(new Date(testDriveInfo.userTestDrive.bookingDate), "PPP")}`
                : "Book Test Drive"}
            </Button>
          )}
        </div>
      </div>

      {/* Description, Features, Specs */}
      <Accordion type="multiple" className="bg-white rounded-lg shadow-sm">
        <AccordionItem value="description">
          <AccordionTrigger>Description</AccordionTrigger>
          <AccordionContent>
            <p className="text-gray-700 whitespace-pre-line">{car.description}</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="features">
          <AccordionTrigger>Features</AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-2">
              <li>{car.transmission} Transmission</li>
              <li>{car.fuelType} Engine</li>
              <li>{car.bodyType} Body Style</li>
              {car.seats && <li>{car.seats} Seats</li>}
              <li>{car.color} Exterior</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="specs">
          <AccordionTrigger>Specifications</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-2 gap-4 text-sm right-3">
              <div>Make: {car.make}</div>
              <div>Model: {car.model}</div>
              <div>Year: {car.year}</div>
              <div>Color: {car.color}</div>
              <div>Fuel: {car.fuelType}</div>
              <div>Transmission: {car.transmission}</div>
              <div>Seats: {car.seats}</div>
              <div>Mileage: {car.mileage.toLocaleString()} miles</div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
