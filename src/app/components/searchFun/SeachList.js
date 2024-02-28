import React from "react";
import { nanoid } from "nanoid";
import AddToBagButton from "./AddToBag";
import { useDispatch } from "react-redux";
import { addToBag, addPrice } from "@/redux/features/manageBag";
import Image from "next/image";


export default function SearchList(data) {

  const id = nanoid(20);

  const dispatch = useDispatch();

  const addItem = (item) => {
    dispatch(addPrice(item.price));
    dispatch(addToBag(item));
  };

  return (
    <div className="h-screen overflow-y-scroll">
      {
        Object.entries(data.data).map((item) =>
          <div key={item[0]}>
            <div className="flex rounded-md items-center mb-4 border-2 hover:shadow-xl " >
              <Image
                src={item[1].imageUrl}
                alt={item[1].name}
                width={100}
                height={100}
                className="w-12 h-12 px-2 rounded-full mr-4"
              />
              <div>
                <p className="text-lg font-semibold">{item[1].name}</p>
                <p className="text-gray-500">${item[1].price}</p>
              </div>

              <div onClick={() => addItem(item[1])}>
                <AddToBagButton />
              </div>
            </div>
          </div>)
      }


    </div>
  );
}
