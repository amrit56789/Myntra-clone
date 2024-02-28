import React from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Navbar from '../components/Navbar/Navbar';

const FilterOptionSkeleton = () => (
  <div>
    <input type="radio" className="hidden" />
    <label className="font-semibold p-2 text-xs">
      <Skeleton />
    </label>
  </div>
);

const ProductCardSkeleton = () => (
  <div className="max-w-lg hover:shadow-xl bg-white rounded-lg overflow-hidden m-4">
    <Skeleton width={200} height={200} className="h-40 my-6" />
    <div className="px-4 py-2">
      <Skeleton className="text-lg" />
      <Skeleton className="text-sm" />
      <Skeleton className="mt-2" />
      <Skeleton className="mt-2" />
    </div>
  </div>
);

export default function Loading() {
  return (
    <div className="text-center justify-center">
      <Navbar />
      {/* Filters and sort section */}
      <div className="mt-32 flex flex-wrap justify-center">
        <FilterOptionSkeleton />
        <FilterOptionSkeleton />
        <FilterOptionSkeleton />
        <div>
          <button className="border-2 border-slate-100 px-4 py-1">
            <Skeleton width={100} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
      </div>
    </div>
  );
}
