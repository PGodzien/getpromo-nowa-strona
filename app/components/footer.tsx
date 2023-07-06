'use client'
import Image from "next/image";
import Sygnet from "../../public/getpromo-sygnet.svg";
import Arrow from "../../public/arrow.svg";
import { goToTop } from "@/utils";
import Link from "next/link";
import Chart from "../../public/chart-logo-getpromo.svg";
import Pattern from "../../public/pattern.svg";
import { usePathname } from "next/navigation";
import Facebook from "../../public/facebook.svg";
import Twitter from "../../public/twitter.svg";
import Linkedin from "../../public/linkedin.svg";


function Footer() {
  const pathname = usePathname();
  return (
    <>
      <Image src={Pattern} alt="pattern getpromo" className="-mb-40 hidden xl:block" />
      <div className="w-full relative bg-primary py-8">
        <Image src={Chart} alt="wykres logo getpromo" className="absolute -top-12 left-1/2 transform -translate-x-1/2" />
        <div className="max-w-7xl container mx-auto px-4 flex items-center justify-between">
          <Link href="/">
            <Image alt="sygnet getpromo" className="w-24 h-24 hidden xl:block" src={Sygnet} />
          </Link>
          <div className="md:mx-10">
            <ul className="font-serif md:space-x-8 hidden xl:flex">
              <Link href="/">
                <li className={pathname == "/" ? "" : "undeline underline-offset-8"}>
                  Getpromo
                </li>
              </Link>
              <Link href="/strony-internetowe">
                <li className={pathname == "/strony-internetowe" ? "underline underline-offset-4" : ""}>
                  Strony internetowe
                </li>
              </Link>
              <Link href="/marketing">
                <li className={pathname == "/marketing" ? "underline underline-offset-4" : ""}>
                  Marketing
                </li>
              </Link>
              <Link href="/projektowanie-graficzne">
                <li className={pathname == "/projektowanie-graficzne" ? "underline underline-offset-4" : ""}>
                  Projektowanie graficzne
                </li>
              </Link>
              <Link href="/kontakt">
                <li className={pathname == "/kontakt" ? "underline underline-offset-4" : ""}>
                  Kontakt
                </li>
              </Link>
            </ul>
            <p className="text-xs">Copyright © {(new Date().getFullYear())} by Getpromo. All rights reserved.</p>
            <p className="text-xs">Jesteśmy częścią: <br className="xl:hidden" /> <span className="text-sm font-bold"><Link href="https://otherlandlabs.com" target="_blank" rel="nofollow">Otherland Labs Sp. z o.o.</Link></span></p>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-end space-x-8 mt-12">
              <li className=""><Link className="mr-5 text-3xl md:text-5xl font-semibold font-serif text-secondary hover:text-white" target="_blank" href="https://www.facebook.com/GetpromoMarketing"><Image alt="Facebook" src={Facebook} /></Link></li>
              <li className=""><Link className="mr-5 text-3xl md:text-5xl font-semibold font-serif text-secondary hover:text-white" target="_blank" href="https://www.linkedin.com/company/getpromo/"><Image alt="Linkedin" src={Linkedin} /></Link></li>
              <li className=""><Link className="mr-5 text-3xl md:text-5xl font-semibold font-serif text-secondary hover:text-white" target="_blank" href="https://twitter.com/GetpromoReklama"><Image alt="Twitter" src={Twitter} /></Link></li>
            </ul>
          </div>
          <div onClick={goToTop} className="w-24 h-24 cursor-pointer border border-black flex items-center justify-center">
            <Image
              className="transition rotate-180"
              src={Arrow}
              alt="strzałka powrót do góry"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
