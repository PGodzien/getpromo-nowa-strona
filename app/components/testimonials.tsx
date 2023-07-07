'use client';
import * as React from "react";
import { Opinions } from "./reviews";

export const Testimonials = () => {
  return (
    <>
      <section className="relative py-8 md:py-16 bg-secondary text-white">
        <div className="container max-w-7xl mx-auto">
          <div className="font-serif mx-auto">
            <div className="space-y-3 px-4 lg:px-0 pb-8 md:pb-16">
              <p className="font-serif leading-tight text-3xl md:text-4xl font-semibold mb-10 lg:text-5xl">Klienci o nas</p>
              <p className="md:text-xl font-sans text-gray-300">Naszym głównym celem jest zapewnienie sukcesu naszym klientom, ponieważ wiemy, że zadowoleni klienci przyciągają nowych.</p>
              <p className="md:text-xl font-sans text-gray-300 hidden md:block">Dokładamy starań, aby nasza współpraca z klientem opierała się na przyjaznym partnerstwie, pełnej transparentności i wyborze rozwiązań dopasowanych do oczekiwanych efektów biznesowych.</p>
            </div>
            <Opinions />
          </div>
        </div>
      </section>
    </>
  );
};
