"use client";
import React from "react";
import BagItems from "../components/bag/BagItems";
import TotalAmount from "../components/bag/TotalAmount";

export default function Page() {
  return (
    <div>
      <div className="container mx-auto mt-24 p-4">
        <h1 className="text-2xl font-bold mb-4">Your Shopping Cart</h1>
        <BagItems />
        <TotalAmount />
      </div>
    </div>
  );
}
