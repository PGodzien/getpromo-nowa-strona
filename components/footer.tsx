'use client'
import Image from "next/image";
import Sygnet from "@/public/getpromo-sygnet.svg";
import Arrow from "@/public/arrow.svg";
import { goToTop } from "@/utils";
import Link from "next/link";
import Chart from "@/public/chart-logo-getpromo.svg";
import Pattern from "@/public/pattern.svg";
import { usePathname } from "next/navigation";
import Facebook from "@/public/facebook.svg";
import Twitter from "@/public/twitter.svg";
import Linkedin from "@/public/linkedin.svg";


function Footer() {
  const pathname = usePathname();
  return (
    <>
      {/* <Image src={Pattern} alt="pattern getpromo" className="-mb-40 hidden xl:block" /> */}
      <div className="relative mt-10 lg:mt-20">
        <div className="hidden xl:block absolute bg-red-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="bg-black w-16 -top-4 -left-14 h-1 absolute transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="bg-black absolute border-4 border-black w-80 h-40 right-20 -top-24 flex justify-center p-3 flex-col font-serif">
            <h4 className="text-primary font-medium text-lg">Getpromo Agencja Marketingowa | Strony Internetowe</h4>
            <p className="text-white text-sm">Kolejowa 12/310, 35-073 Rzeszów</p>
          </div>
        </div>
        <iframe className="w-full h-96 grayscale" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.4086440516758!2d22.005846715716544!3d50.041175779420925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473cfbfdd5b9fe33%3A0x7614bec802e05c47!2sAgencja%20marketingowa%20Getpromo!5e0!3m2!1spl!2spl!4v1688138225938!5m2!1spl!2spl" width="600" height="450"></iframe>
      </div>
      <div className="w-full relative bg-primary py-8">
        <Image src={Chart} alt="wykres logo getpromo" className="absolute -top-12 left-1/2 transform -translate-x-1/2" />
        <div className="max-w-7xl container mx-auto px-4 flex items-center justify-between">
          <Link href="/">
            <Image alt="sygnet getpromo" className="w-24 h-24 hidden xl:block" src={Sygnet} />
          </Link>
          <div className="md:mx-10">
            <ul className="font-serif md:space-x-8 hidden xl:flex">

              <li className={pathname == "/" ? "" : "undeline underline-offset-8"}>
                <Link href="/">
                  Getpromo
                </Link>
              </li>


              <li className={pathname == "/strony-internetowe" ? "underline underline-offset-4" : ""}>
                <Link href="/strony-internetowe">
                  Strony internetowe
                </Link>
              </li>


              <li className={pathname == "/marketing" ? "underline underline-offset-4" : ""}>
                <Link href="/marketing">
                  Marketing
                </Link>
              </li>


              <li className={pathname == "/projektowanie-graficzne" ? "underline underline-offset-4" : ""}>
                <Link href="/projektowanie-graficzne">
                  Projektowanie graficzne
                </Link>
              </li>


              <li className={pathname == "/kontakt" ? "underline underline-offset-4" : ""}>
                <Link href="/kontakt">
                  Kontakt
                </Link>
              </li>

            </ul>
            <p className="text-sm mt-3">Copyright © {(new Date().getFullYear())} by Getpromo. All rights reserved.</p>
            <p className="text-sm">Jesteśmy częścią: <br className="xl:hidden" /> <span className="text-sm"><Link href="https://otherlandlabs.com" target="_blank" rel="nofollow"><strong>Otherland Labs Sp. z o.o.</strong></Link></span></p>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-8">
              <li className="flex items-center"><Link className="mr-5 text-3xl md:text-5xl font-medium font-serif text-secondary hover:text-white" target="_blank" href="https://www.facebook.com/GetpromoMarketing"><Image alt="Facebook" src={Facebook} /></Link></li>
              <li className="flex items-center"><Link className="mr-5 text-3xl md:text-5xl font-medium font-serif text-secondary hover:text-white" target="_blank" href="https://www.linkedin.com/company/getpromo/"><Image alt="Linkedin" src={Linkedin} /></Link></li>
              <li className="flex items-center"><Link className="mr-5 text-3xl md:text-5xl font-medium font-serif text-secondary hover:text-white" target="_blank" href="https://twitter.com/GetpromoReklama"><Image alt="Twitter" src={Twitter} /></Link></li>
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
