
import pzl from "@/public/polski-zwiazek-lowiecki-logo.png";
import prr from "@/public/polskie-radio-rzeszow-logo.png";
import hospicjum from "@/public/hospicjum-logo.png";
import szwendamsie from "@/public/szwendam-sie-logo.svg";
import gg from "@/public/ggauto-logo.png";
import rib from "@/public/red-is-bad-logo.png";
import merlin from "@/public/merlin-logo.svg";
import ecocar from "@/public/ecocar-logo.png";
import Image from "next/image";

function Clients() {
  return (
    <div className="container xs:max-w-[475px] px-5 mx-auto md:max-w-[768px] lg:max-w-[1200px]">
      <div className="flex flex-col items-center pt-16 pb-16">
        <h3 className="mb-10 text-3xl sm:text-4xl text-white font-serif font-semibold lg:mb-24">
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
        <div className="flex relative">
          <button className="cursor-pointer" type="button">
            <a href="#kontakt" className="flex items-center">
              <div className="relative overflow-clip border border-primary z-10 group flex">
                <span className="absolute w-full h-full -left-full bg-transparent z-10 group-hover:left-0 duration-500 box-border group-hover:transition-all group-hover:duration-500 group-hover:bg-primary"></span>
                <div className="relative group-hover:bg-transparent bg-primary h-16">
                  <p className="flex relative z-20 items-center justify-center h-16 px-8 font-serif font-medium text-center group-hover:text-black">
                    skontaktuj się</p>
                </div>
                <div className="flex items-center justify-center w-16 h-16">
                  <svg
                    className="fill-white relative z-20 group-hover:fill-black duration-500 group-hover:transition-all"
                    width="24"
                    height="19"
                    viewBox="0 0 24 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M23.853 9.85425L14.854 18.8542C14.756 18.9512 14.628 19.0002 14.5 19.0002C14.373 19.0002 14.245 18.9512 14.147 18.8542C13.952 18.6582 13.952 18.3422 14.147 18.1462L22.293 10.0002H0.5C0.224 10.0002 0 9.77625 0 9.50025C0 9.22425 0.224 9.00025 0.5 9.00025H22.293L14.147 0.85425C13.952 0.65825 13.952 0.34225 14.147 0.14625C14.342 -0.04875 14.659 -0.04875 14.854 0.14625L23.853 9.14625C23.9 9.19225 23.937 9.24825 23.962 9.30925C24.012 9.43125 24.012 9.56925 23.962 9.69125C23.937 9.75225 23.9 9.80825 23.853 9.85425"
                    />
                  </svg>
                </div>
              </div>
            </a>
          </button>
          <div className="absolute top-1/2 transform -translate-y-1/2 w-24 -left-24 h-[1px] bg-primary"></div>
        </div>

      </div>
    </div>
  );
}
export default Clients;
