'use client'
import Image from "next/image";
import Sygnet from "../../public/getpromo-sygnet.svg";
import Arrow from "../../public/arrow.svg";
import { goToTop } from "@/utils";
import Link from "next/link";
import Chart from "../../public/chart-logo-getpromo.svg";
import Pattern from "../../public/pattern.svg";


function Footer() {
  return (
    <>
    <Image src={Pattern} alt="pattern getpromo" className="-mb-60"/>
      <div className="w-full relative bg-primary py-8">
        <Image src={Chart} alt="wykres logo getpromo" className="absolute -top-12 translate-x-1/2 left-1/2 transform"/>
        <div className="max-w-7xl container mx-auto px-4 flex items-center">
          <Link href="/">
            <Image alt="sygnet getpromo" className="w-24 h-24" src={Sygnet} />
          </Link>
          <div className="mx-10 space-y-2">
            <ul className="flex font-serif space-x-8">
              <li className="">Getpromo</li>
              <li className="">Strony internetowe</li>
              <li className="">Marketing</li>
              <li className="">Projektowanie graficzne</li>
              <li className="">Kontakt</li>
            </ul>
            <p className="text-xs">Copyright © {(new Date().getFullYear())} by Getpromo. All rights reserved.</p>
            <p className="text-xs">Jesteśmy częścią: <span className="text-sm font-bold"><Link href="https://otherlandlabs.com" target="_blank" rel="nofollow">Otherland Labs Sp. z o.o.</Link></span></p>
          </div>

          <div onClick={goToTop} className="ml-auto w-24 h-24 cursor-pointer border border-black flex items-center justify-center">
            <Image
              className="transition rotate-180"
              src={Arrow}
              alt="Arrow down icon"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
