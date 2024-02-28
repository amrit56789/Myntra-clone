import React from "react";
import Image from "next/image";
import original from "../../../../images/logos/original.jpg"
import returnImg from "../../../../images/logos/returnImg.png"
export default function ForthBlock() {
  return (
    <div className="pl-14 max-sm:hidden ">
      <div className="text-md flex">
        <Image src={original} alt="Original guarantee" className="h-10 mr-2 w-14" />
        <div className="">
          100% ORIGINAL guarantee for all products at
          myntra.com
        </div>
      </div>
      <div className="text-md flex my-6 ">
        <Image
          className="h-10 w-14 mr-2 "
          src={returnImg}
          alt="Return policy"
        />
        <div>
          Return within 14 days of receiving your order
        </div>
      </div>
    </div>
  );
}
