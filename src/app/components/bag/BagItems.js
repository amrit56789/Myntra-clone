import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { removeFromBag, removePrice } from "@/redux/features/manageBag";
import { AiFillDelete } from "react-icons/ai";
import Image from "next/image";

function BagItems() {
  const items = useSelector(state => state.reducers.bag);
  const dispatch = useDispatch();

  const removePriceAndBag = item => {
    if (Object.keys(item).length === 0) {
      return;
    }
    dispatch(removeFromBag(item.id));
    dispatch(removePrice(item.price));
  };

  return (
    <div className="bg-white border rounded-lg shadow-md overflow-scroll h-72 p-4 mb-4">
      {Object.entries(items).map(([id, item]) => (
        <div key={id}>
          {item && (
            <div className="flex items-center justify-between p-4 mb-4 rounded-md shadow-md">
              <div className="w-24 h-24 relative">
                <Image
                  src={item.image}
                  alt="item image"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <div className="flex flex-col justify-center mx-4">
                {/* Uncomment the line below if you decide to handle item names differently
                <p className="font-bold text-lg">{item.name.en}</p> */}
                <p className="text-gray-500">${item.price}</p>
              </div>
              <div className="flex items-center justify-center">
                <AiFillDelete className="text-4xl cursor-pointer text-red-500" onClick={() => removePriceAndBag(item)} />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default BagItems;
