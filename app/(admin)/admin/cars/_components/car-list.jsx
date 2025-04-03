"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function CarList() {
  const router = useRouter();
  const [search, setSearch] = useState();

  
  const formHandleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <Button
          onClick={() => router.push("/admin/cars/create")}
          className="flex items-center"
        >
          <Plus className="h-4 w-4" />
          Add Car
        </Button>

        <form onSubmit={formHandleSubmit} className="flex w-full sm:w-auto">
          <div className="relative flex-1 ">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              placeholder="Search cars..."
              className="pl-9 w-full sm:w-60"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
