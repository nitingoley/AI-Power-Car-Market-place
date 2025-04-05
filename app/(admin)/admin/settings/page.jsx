import React from "react";
import SettingForm from "./_components/setting-form";



export const metadata = {
    title: 'Settings | FloxWrap',
    description: 'Manage dealership working hours and admin user'
};



export default function SettingPage() {
  return (
    <div className="p-6">
    <h1 className="text-2xl font-bold mb-6">Setting</h1>
    <SettingForm />
    </div>
  )
}
