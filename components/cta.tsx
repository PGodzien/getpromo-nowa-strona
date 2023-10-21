"use client";
import * as React from "react";
import goddessPhone from "@/public/goddess-phone.png";
import Image from "next/image";
const Cta = () => {
  return (
    <>
      <section className="bg-getDark py-36">
        <div className="max-w-7xl mx-auto container px-4 flex">
          <div className="relative hidden lg:block w-1/2">
            <Image className="absolute -bottom-36" src={goddessPhone} alt="Getpromo logo black" />
          </div>
          <div className="container relative mx-auto max-w-7xl w-full lg:w-1/2 px-8 flex items-center justify-center">
            <div className="space-y-8">
              <p className="font-serif text-3xl font-medium tracking-tight sm:text-4xl text-white">Skontaktuj się z nami</p>
              <p className="text-white md:text-lg leading-loose">Robimy wszystko, aby nasi klienci odnieśli sukces, bo wiemy, że sukces oznacza więcej klientów.</p>
              <button className="cursor-pointer" type="button">
                <a href="#kontakt" className="flex items-center">
                  <div className="hidden md:block w-24 relative z-50 h-[1px] bg-primary"></div>
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Cta;
