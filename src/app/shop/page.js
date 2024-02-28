import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import Navbar from "../components/Navbar/Navbar";
import Filters from "./Filters";
import ProductList from "./ProductList";
import { Footer } from "../components/HomePage/Footer/Footer";
import products from "../components/data/data";

export default function Page() {
  return (
    <div>
      <Navbar />
      <main className="mt-32">
        <section className="flex justify-between items-center mx-3 mb-1">
          <h1 className="font-bold p-2">FILTERS</h1>
          <div className="flex flex-wrap">
            <div className="flex flex-row space-x-4">
              {["Bundles", "Country of Origin", "Size"].map((item) => (
                <h2 key={item} className="font-light py-2 px-4 flex text-sm items-center">
                  {item}
                  <AiOutlineArrowDown className="ml-1" />
                </h2>
              ))}
            </div>
            <button type="button" className="flex items-center border-2 border-slate-100 px-4 py-1 space-x-8 ml-auto">
              <h3 className="font-light text-sm">Sort by:</h3>
              <h4 className="font-bold text-sm">Recommended</h4>
            </button>
          </div>
        </section>
        <section className="flex">
          <Filters />
          <ProductList data={products} />
        </section>
      </main>
      <Footer />
    </div>
  );
}
