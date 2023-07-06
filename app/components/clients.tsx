
import pzl from "../public/pzl.png";
import prr from "../public/prr-white.png";
import hospicjum from "../public/hospicjum-white.png";
import szwendamsie from "../public/szwendam-sie-white.svg";
import gg from "../public/logotyp-ggauto.png";
import rib from "../public/red_is_bad.png";
import merlin from "../public/logo-merlin.svg";
import ecocar from "../public/ecocar_logo.png";
import Image from "next/image";

function OurClients() {
  return (
    <div className="container xs:max-w-[475px] px-5 mx-auto md:max-w-[768px] lg:max-w-[1200px]">
      <div className="flex flex-col items-center pt-32 pb-16">
        <h3 className="mb-10 text-5xl text-white font-serif font-semibold lg:mb-24">
          Nasi klienci
        </h3>
        <div className="flex flex-wrap items-center mx-auto mb-10 max-w-7xl md:mb-12 lg:mb-24">
          <div className="flex items-center justify-center w-1/2 border-r border-gray-700 md:w-1/4 lg:w-1/8 h-28">
            <Image
              className="h-auto px-2 w-24 opacity-50 hover:opacity-100"
              src={pzl}
              alt="Polski Związek Łowiecki logo"
            />
          </div>
          <div className="flex items-center justify-center w-1/2 md:border-r border-gray-700 md:w-1/4 lg:w-1/8 h-28">
            <Image
              className="px-2 opacity-50 w-36 h-auto hover:opacity-100 "
              src={prr}
              alt="Polskie Radio Rzeszów logo"
            />
          </div>
          <div className="flex items-center justify-center w-1/2 border-r border-gray-700 md:w-1/4 lg:w-1/8 h-28">
            <Image
              className="px-2 w-36 h-auto opacity-50 hover:opacity-100 "
              src={hospicjum}
              alt="Hospicjum Podkarpackie logo"
            />
          </div>
          <div className="flex items-center justify-center w-1/2 md:w-1/4 lg:w-1/8 h-28">
            <Image
              className="h-auto w-32 px-2 opacity-50 hover:opacity-100 "
              src={szwendamsie}
              alt="Szwendam się logo"
            />
          </div>
          <div className="flex items-center justify-center w-1/2 border-r border-gray-700 md:mt-12 md:w-1/4 lg:w-1/8 h-28">
            <Image
              className="h-auto w-28 px-2 opacity-50 hover:opacity-100 "
              src={gg}
              alt="GG Auto logo"
            />
          </div>
          <div className="flex items-center justify-center w-1/2 md:border-r border-gray-700 md:mt-12 md:w-1/4 lg:w-1/8 h-28">
            <Image
              className="px-2 opacity-50 w-32 hover:opacity-100 "
              src={rib}
              alt="Red is Bad logo"
            />
          </div>
          <div className="flex items-center justify-center w-1/2 border-r border-gray-700 md:mt-12 md:w-1/4 lg:w-1/8 h-28">
            <Image
              className="px-2 opacity-50 w-32 hover:opacity-100 "
              src={merlin}
              alt="Merlin logo"
            />
          </div>
          <div className="flex items-center justify-center w-1/2 md:mt-12 md:w-1/4 lg:w-1/8 h-28">
            <Image
              className="h-auto px-2 opacity-50 hover:opacity-100 "
              src={ecocar}
              alt="Ecocar logo"
            />
          </div>
        </div>
        <div className="flex">
          {/* <div className=" flex w-7  md:w-[70px] h-[70px] items-center">
            <span className="w-full h-[1px] bg-primary block  "></span>
          </div> */}
          <LongButton borderColor="primary" text="Zapytaj o ofertę" href="#kontakt" />
        </div>
      </div>
    </div>
  );
}
export default OurClients;
