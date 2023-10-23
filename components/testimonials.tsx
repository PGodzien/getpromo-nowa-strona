'use client';
import * as React from "react";
import Opinions from "./opinions";

export const Testimonials = () => {
  return (
    <>
      <section>
        <div className="bg-black text-white py-24 sm:py-32">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="mx-auto lg:mx-0">
              <h2 className="text-3xl font-serif font-semibold tracking-tight sm:text-4xl max-w-2xl">Opinie naszych klientów</h2>
              <p className="mt-6 text-base lg:text-lg font-serif leading-8 text-gray-400">
                Naszym głównym celem jest zapewnienie sukcesu naszym klientom, ponieważ wiemy, że zadowoleni klienci przyciągają nowych. Dokładamy starań, aby nasza współpraca z klientem opierała się na przyjaznym partnerstwie, pełnej transparentności i wyborze rozwiązań dopasowanych do oczekiwanych efektów biznesowych.
              </p>
            </div>
            <Opinions />
          </div>
        </div>
      </section>
    </>
  );
};
