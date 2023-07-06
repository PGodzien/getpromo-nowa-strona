"use client";
import * as React from "react";
import { useForm, ValidationError } from '@formspree/react';


function ContactForm() {
  const [state, handleSubmit] = useForm("mknenkgk");
  if (state.succeeded) {
    return <div className="flex items-center justify-center">
      <p className="text-white font-serif font-semibold text-3xl">Dziękujemy za przesłanie formularza! Wkrótce się z Tobą skontaktujemy.</p>
    </div>;
  }
  return (

    <form className="flex-col space-y-10" onSubmit={handleSubmit}>
      <input
        placeholder="Imię"
        className="relative z-30 w-full px-10 bg-secondary border-b border-transparent hover:border-primary text-white outline-none font-serif group-hover:border-b text-baseM border-primary py-7 placeholder-grayText"
        id="name"
        required
        type="name"
        name="name"
      />

      <input
        placeholder="Email"
        className="relative z-30 w-full px-10 bg-secondary border-b border-transparent hover:border-primary text-white outline-none font-serif group-hover:border-b text-baseM border-primary py-7 placeholder-grayText"
        id="email"
        required
        type="email"
        name="email"
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />

      <textarea
        placeholder="Twoja wiadomość"
        required
        className="relative z-30 w-full px-10 bg-secondary border-b border-transparent hover:border-primary text-white outline-none font-serif group-hover:border-b text-baseM border-primary py-7 placeholder-grayText"
        id="message"
        name="message"
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <div className="">
        <input type="checkbox" required className="mr-3 mt-1" />
        <span className="text-grayText text-sm font-serif mt-0">Wypełniając powyższy formularz, wyrażasz zgodę na przetwarzanie danych osobowych przez firmę Otherland Labs Sp. z o.o. Zgody udzielasz dobrowolnie w celu udzielenia odpowiedzi na Twoje zapytanie. W każdym momencie możesz wycofać udzieloną zgodę.</span>
      </div>
      <button className="cursor-pointer" type="submit" disabled={state.submitting}>
        <div className="flex items-center">
          <div className="hidden md:block w-24 relative z-50 h-0.5 bg-primary"></div>
          <div className="relative overflow-clip border border-primary z-10 group flex">
            <span className="absolute w-full h-full -left-full bg-transparent z-10 group-hover:left-0 duration-500 box-border group-hover:transition-all group-hover:duration-500 group-hover:bg-primary"></span>
            <div className="relative group-hover:bg-transparent bg-primary h-16">
              <p className="flex relative z-20 items-center justify-center h-16 px-8 font-serif font-medium text-center group-hover:text-black">
                skontaktuj
                się</p>
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
        </div>
      </button>
    </form>
  );
};

export default ContactForm;
