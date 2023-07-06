"use client";
import * as React from "react";
import ContactForm from "./contact_form";
import Logo from "../../public/getpromo-logo.svg";
import forCtaPhoneSvg from "../../public/phone.svg";
import forCtaDogSvg from "../../public/mail.svg";
import forCtaMapSvg from "../../public/map.svg";
import Image from "next/image";
const CtaFooter = () => {
  return (
    <>
      <div id="kontakt" className="bg-getDark xl:-mb-20 pt-8 md:pt-16">
        <div className="max-w-6xl mx-auto container px-4">
          <a className="" href="/">
            <Image className="w-28 h-auto" src={Logo} alt="Logo icon getPromo" />
          </a>
        </div>
        <div className="max-w-6xl px-4 py-16 flex flex-col md:flex-row justify-between items-start mx-auto container">
          <div className="w-full md:w-1/2">
            <div className="">
              <h3 className="font-semibold text-white max-w-md font-serif mb-14 md:mb-16 text-5xl md:text-7xl">
                Zapytaj nas o ofertę!
              </h3>
            </div>
            <div>
              <a
                className="items-center flex  mb-10 md:flex-row justify-start"
                href="tel:+48 571 210 571"
              >
                <Image className="mr-5" src={forCtaPhoneSvg} alt="Phone icon" />
                <p className="flex text-xl font-bold text-white font-sans md:ml-5 lg:ml-10 md:mt-0">
                  <span className="mr-1 font-light">+48</span>571 210 571
                </p>
              </a>
              <a
                className="items-center flex  mb-10 md:flex-row justify-start"
                href="mailto:kontakt@getpromo.pl"
              >
                <Image className="mr-5" src={forCtaDogSvg} alt="@ icon" />
                <p className="flex text-xl font-bold text-white font-sans md:ml-5 lg:ml-10 md:mt-0">
                  kontakt<span className="font-light">@</span>getpromo.pl
                </p>
              </a>
              <a
                className="flex items-center  mb-10 md:flex-row justify-start"
                href="https://goo.gl/maps/CeEjQKqMbvc2EX7X9"
              >
                <Image className="mr-5" src={forCtaMapSvg} alt="Geolocation icon" />
                <div className="flex flex-col md:mt-0 md:ml-5 lg:ml-10">
                  <p className="text-xl font-bold text-white break-all font-sans ">
                    ul. Kolejowa 12 / 310
                  </p>
                  <p className="font-normal text-white font-sans text-baseSM">
                    35-073 Rzeszów
                  </p>
                </div>
              </a>
              <a
                className="flex items-center  mb-10 md:flex-row justify-start"
                href="https://goo.gl/maps/iSXxWyJiGoo36PCG9"
              >
                <Image className="mr-5" src={forCtaMapSvg} alt="Geolocation icon" />
                <div className="flex flex-col md:mt-0 md:ml-5 lg:ml-10">
                  <p className="text-xl font-bold text-white break-all font-sans ">
                    ul. Piotra Skargi 1
                  </p>
                  <p className="font-normal text-white font-sans text-baseSM">
                    37-700 Przemyśl
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <ContactForm
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default CtaFooter;
