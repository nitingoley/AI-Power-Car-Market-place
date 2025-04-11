import React from "react";
import ReservationsList from "./_components/reservations-list";
import { auth } from "@clerk/nextjs/server";
import { getUserTestDrives } from "@/actions/test-drive";

export const metadata = {
  title: "My Reservations | Vehiql",
  description: "Manage your test drive reservations",
};

export default async function ReservationsPage() {
  // Check authentication on server
  const { userId } = await auth();
  if (!userId) {
    redirect("/sign-in?redirect=/reservations");
  };

  const reservationsResult = await getUserTestDrives();
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent text-6xl">
        Your Reservations
      </h1>
      <ReservationsList initialData={reservationsResult} />
    </div>
  );
}
