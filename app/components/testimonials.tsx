'use client';
import * as React from "react";
import { Opinions } from "./reviews";

export const Testimonials = () => {
  return (
    <>
      <section className="relative py-8 md:pb-32 pt-16 bg-black text-white">
        <div className="container max-w-7xl mx-auto">
          <div className=" font-serif mx-auto">
            <div className="space-y-3  px-4 lg:px-0 pb-8 md:pb-16">
              <p className="font-serif leading-tight text-3xl md:text-4xl font-semibold mb-10 lg:text-5xl xl:w-7/12 xl:ml-auto">Klienci o nas</p>
              <p className="md:text-xl leading-loose xl:w-7/12 xl:ml-auto">Naszym głównym celem jest zapewnienie sukcesu naszym klientom, ponieważ wiemy, że zadowoleni klienci przyciągają nowych.</p>
              <p className="md:text-xl hidden md:block leading-loose xl:w-7/12 xl:ml-auto">Dokładamy starań, aby nasza współpraca z klientem opierała się na przyjaznym partnerstwie, pełnej transparentności i wyborze rozwiązań dopasowanych do oczekiwanych efektów biznesowych.</p>
            </div>
            <Opinions />
          </div>
        </div>
      </section>
    </>
  );
};
