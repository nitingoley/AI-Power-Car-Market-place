import { getCarById } from '@/actions/car-listing';
import { notFound } from 'next/navigation';
import React from 'react'
import TestDriveForm from './_components/test-drive-form';


export async function generateMetadata() {
  return {
    title: `Book Test Drive | Vehiql`,
    description: `Schedule a test drive in few seconds`,
  };
}

export default async function TestDrivePage({params}) {
// Fetch car details
const { id } = params;
const result = await getCarById(id);


// If car not found, show 404
if (!result.success) {
  notFound();
}
  return (
    <div className="container mx-auto px-4 py-12">
       <h1 className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent text-6xl">
       Book a Test Drive</h1>
      <TestDriveForm
        car={result.data}
        testDriveInfo={result.data.testDriveInfo}
      /></div>
  )
}
