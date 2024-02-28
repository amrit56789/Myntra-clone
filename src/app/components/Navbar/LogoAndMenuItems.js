import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import myntraLogo from "../../../images/social-icon/myntraLogo.png"

export default function LogoAndMenuItems() {
  return (
    <div className="flex items-center ">
    <Link href={"/"}>
      <Image
        src={myntraLogo}
        alt="" 
        width={70}
        className="md:h-9 max-sm:h-8 max-sm:mr-1 md:mx-5"
        objectFit="contain"
      />
    </Link>
    <ul className="flex md:space-x-6 max-sm:space-x-2">
      <li>
        <Link
          href="/shop"
          className="font-semibold md:text-sm  max-sm:text-xs"
        >
          MEN
        </Link>
      </li>
      <li>
        <Link
          href="/shop"
          className="font-semibold md:text-sm   max-sm:text-xs"
        >
          WOMEN
        </Link>
      </li>
      <li>
        <Link
          href={"/shop"}
          className="font-semibold max-sm:text-xs text-sm"
        >
          KIDS
        </Link>
      </li>
      <li>
        <Link
          href={"/HomeLiving"}
          className="font-semibold max-sm:text-xs text-sm"
        >
          HOME & LIVING
        </Link>
      </li>
      <li>
        <Link
          href={"/shop"}
          className="font-semibold max-sm:text-xs text-sm"
        >
          BEAUTY
        </Link>
      </li>
      <li>
        <Link
          href={"/shop"}
          className="font-semibold max-sm:text-xs text-sm"
        >
          STUDIO
        </Link>
      </li>
    </ul>
  </div>
  )
}
