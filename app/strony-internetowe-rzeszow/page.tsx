"use client";
import Cta from "../components/cta";
import CtaFooter from "../components/ctaFooter";
import { Testimonials } from "../components/testimonials";
import Image from "next/image";
import pattern from "../../public/pattern.svg";
import marketing from "../../public/marketing.svg";
import landing from "../../public/landing.svg";
import pozycjonowanie from "../../public/pozycjonowanie.svg";
import portal from "../../public/portal.svg";
import ReactLogo from "../../public/react_logo.png";
import WordPressLogo from "../../public/wordpress_logo.svg";
import NextjsLogo from "../../public/next_logo.svg";
import GolangLogo from "../../public/golang_logo.svg";
import TailwindLogo from "../../public/tailwind_logo.svg";
import webRzeszow from "../../public/strony_internetowe_rzeszow.png";
import anilama from "../../public/anilama.jpg";
import barber from "../../public/barber.jpg";
import radio from "../../public/radio.jpg";
import dgc from "../../public/dgc.jpg";
import weldoro from "../../public/weldoro.jpg";
import deski from "../../public/deski.jpeg";
import damansdak from "../../public/damansdak.jpg";
import sep from "../../public/sep.jpg";
import shoprimo from "../../public/shoprimo.jpg";
import przystanek from "../../public/przystanek.jpg";
import harmonia from "../../public/harmonia.jpeg";
import skycar from "../../public/skycar.jpeg";
import adblue from "../../public/adblue.jpg";
import transbet from "../../public/transbet.jpg";
import agrofruct from "../../public/agrofruct.jpg";
import mapPin from "../../public/icon_map.svg";

export default function StronyRzeszow() {
  return (
    <>
      <title>Strony internetowe Rzeszów – Getpromo agencja marketingowa w Rzeszowie</title>
      <meta name="title" content="Strony internetowe Rzeszów – Getpromo agencja marketingowa w Rzeszowie" />
      <meta name="description" content="Tworzenie stron internetowych w Rzeszowie, projektowanie stron www Rzeszów, sklepy internetowe Rzeszów, landing page Rzeszów" />
      <link
        rel="canonical"
        href="https://getpromo.pl/strony-internetowe-rzeszow"
        key="canonical"
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://getpromo.pl/" />
      <meta property="og:title" content="Strony internetowe Rzeszów – Getpromo agencja marketingowa w Rzeszowie" />
      <meta property="og:description" content="Tworzenie stron internetowych w Rzeszowie, projektowanie stron www Rzeszów, sklepy internetowe Rzeszów, landing page Rzeszów." />
      <meta property="og:image" content="/cover_webRzeszow.jpg" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://getpromo.pl/" />
      <meta property="twitter:title" content="Strony internetowe Rzeszów – Getpromo agencja marketingowa w Rzeszowie" />
      <meta property="twitter:description" content="Tworzenie stron internetowych w Rzeszowie, projektowanie stron www Rzeszów, sklepy internetowe Rzeszów, landing page Rzeszów" />
      <meta property="twitter:image" content="/cover_webRzeszow.jpg" />
      {/* <Image className="absolute inset-0 z-20" alt="Circle BG" src={bgCircle} /> */}
      <div className="absolute z-20 -mt-32 shadow-2xl shadow-blue-500 blur-2xl opacity-10 md:h-96 md:w-96 w-56 h-56 bg-blue-600 top-0 rounded-full mx-auto left-0 right-0"></div>
      <div className="relative">
        <section className="relative z-10 w-full py-6">
          <div className="absolute inset-0 bg-getDark bg-opacity-70 md:bg-transparent z-20"></div>
          <div className="relative flex lg:flex-row flex-col py-20 md:py-0 items-center justify-between px-4 mx-auto container md:px-12 2xl:px-0 lg:max-w-screen-2xl">
            <div className="space-y-8 lg:-mt-28 max-w-lg 2xl:max-w-2xl relative z-20 w-full">
              <h1
                className="font-serif leading-tight text-white text-4xl font-semibold lg:text-5xl 2xl:text-6xl">
                Strony <br /> internetowe <br /> Rzeszów</h1>
              <p className="max-w-3xl relative md:text-xl z-10 text-white ">Tworzymy skuteczne strony internetowe, które pracuja i zarabiają dla nszych klientów z Rzeszowa 24 godziny na dobę przez 7 dni w tygodniu.</p>
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
            <div className="w-full absolute inset-0 lg:relative overflow-hidden">
              <Image className="relative" alt="design-god" src={webRzeszow} />
              <div className="animate-flash -z-10 w-10 h-10 p-40 md:p-72 absolute top-1/2 m-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="absolute inset-0 z-10 m-0.5  bg-transparent border-8 border-blue-500 blur rounded-full"></div>
                <div className="absolute inset-0 z-20  bg-transparent border-4 border-white rounded-full"></div>
                <div className="absolute inset-0 z-10 -m-1  bg-transparent border-8 border-blue-500 blur rounded-full"></div>
              </div>
              <div className="absolute bg-gradient-to-tl from-getDark w-full h-full to-transparent inset-0"></div>
            </div>
          </div>
          <Image className="hidden -z-10 lg:block mx-auto absolute top-96 inset-0" src={pattern} alt="" />
        </section>
        <section className="text-center relative z-10 my-12">
          <div className="flex flex-wrap md:flex-row flex-col max-w-7xl px-8 md:space-y-0 space-y-12 mx-auto justify-center">
            <div className="md:w-1/3 text-left space-y-5">
              <p className=" text-primary font-serif text-8xl">0,5</p>
              <div className="h-0.5 bg-primary w-3/4"></div>
              <p className="text-white w-3/4">sekundy, potrzebuje konsument aby wyrobić sobie opinię o stronie internetowej</p>
            </div>
            <div className="md:w-1/3 space-y-5 text-left">
              <p className=" text-primary font-serif text-8xl">60%</p>
              <div className="h-0.5 bg-primary w-3/4"></div>
              <p className="text-white w-3/4">konsumentów nie poleci firmy ze źle zaprojektowaną stroną mobilną</p>
            </div>
            <div className="md:w-1/3 space-y-5 text-left">
              <p className="text-primary font-serif text-8xl">75%</p>
              <div className="h-0.5 bg-primary w-3/4"></div>
              <p className="text-white w-3/4">konsumentów wyrabia sobie opinie o firmie i jej wiarygodności na podstawie strony wwww</p>
            </div>
          </div>
        </section>
        <section className="md:pb-24 py-12 md:py-0">
          <div className="flex justify-center items-center md:flex-row flex-col flex-wrap mx-auto max-w-7xl">
            <div className="">
              <div className="bg-secondary md:h-96 md:w-96 h-72 w-72 flex flex-col items-center justify-center">
                <Image src={marketing} alt="Marketing internetowy" />
                <p className="font-serif text-3xl text-center mt-12 text-white">Strony www</p>
              </div>
              <div className="bg-white md:h-96 md:w-96 h-72 w-72 flex flex-col items-center justify-center">
                <Image src={landing} alt="Analityka internetowa" />
                <p className="font-serif text-3xl text-center mt-12 ">Landing page</p>
              </div>
            </div>
            <div className="bg-primary md:h-96 md:w-96 h-72 w-72 flex flex-col items-center justify-center">
              <Image src={pozycjonowanie} alt="Pozycjonowanie SEO" />
              <p className="font-serif text-3xl text-center mt-12">Sklepy <br /> internetowe</p>
            </div>
            <div className="">
              <div className="hidden lg:block md:h-96 md:w-96 h-72 w-72"></div>
              <div
                className="border border-0.5 border-gray-800 md:h-96 md:w-96 h-72 w-72 sm:ml-72 md:ml-0 flex flex-col items-center justify-center lg:mt-96">
                <Image src={portal} alt="Spcial media marketing" />
                <p className="font-serif text-3xl text-center mt-12 text-white">Blogi <br /> internetowe</p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto container pb-0 md:pb-12 px-4 text-getDark">
            <h2 className="font-serif leading-tight text-3xl md:text-4xl max-w-lg font-semibold lg:text-5xl"> Projektowanie stron internetowych Rzeszów</h2>
            <p className="md:text-xl md:pt-12 md:mt-12 pt-8 mt-8 border-t">Wiemy, jak tworzyć profesjonalne strony internetowe zarówno dla dużych firm, jak i start-upów z Rzeszowa, stawiających swoje pierwsze kroki w biznesie.</p>
            <p className="md:text-xl md:pt-12 md:mt-12 pt-8 mt-8 border-t">Jeśli poszukujesz specjalistów od marketingu sieciowego w Rzeszowie, jesteś w dobrym miejscu. Od lat zajmujemy się tworzeniem profesjonalnych stron internetowych, które wyróżniają się wysoką estetyką, responsywnością i szybkim czasem ładowania. Jako webmasterzy nie pozwalamy sobie na przeciętność. Wierzymy w kluczowe znaczenie wizerunku w sieci dla powodzenia każdej marki.
            </p>
          </div>
        </section>
        <Cta />
      </div>
      <section className="text-getDark bg-white">
        <div className="max-w-7xl container px-4 mx-auto">
          <div className="pt-16 mb-12">
            <ul className="grid grid-cols-2 gap-x-4 gap-y-9 md:grid-cols-3 md:gap-x-7 lg:grid-cols-5 lg:gap-32">
              <li className="flex flex-col items-center space-y-5 md:items-start">
                <Image className="w-14 h-auto" src={ReactLogo} alt="React logo" />
                <span className="w-full h-[1px] bg-getGray block"></span>
                <p className="text-base font-serif">React</p>
              </li>
              <li className="flex grayscale flex-col items-center space-y-5 md:items-start ">
                <Image className="w-14 h-auto" src={WordPressLogo} alt="WordPRess logo" />
                <span className="w-full h-[1px] bg-getGray block  "></span>
                <p className="text-base break-words font-serif ">
                  WordPress
                </p>
              </li>
              <li className="flex flex-col items-center space-y-5 md:items-start ">
                <Image
                  className="w-14 h-auto"
                  src={NextjsLogo}
                  alt="Nextjs logo"
                />
                <span className="w-full h-[1px] bg-getGray block  "></span>
                <p className="text-base break-words font-serif">
                  Next.js
                </p>
              </li>
              <li className="flex flex-col items-center space-y-5 md:items-start ">
                <Image className="w-14 h-auto" src={GolangLogo} alt="Golang logo" />
                <span className="w-full h-[1px] bg-getGray block  "></span>
                <p className="text-base break-words font-serif ">
                  Golang
                </p>
              </li>
              <li className="flex flex-col items-center space-y-5 md:items-start ">
                <Image className="w-14 h-auto" src={TailwindLogo} alt="Tailwind CSS logo" />
                <span className="w-full h-[1px] bg-getGray block  "></span>
                <p className="text-base break-words font-serif">
                  Tailwind CSS
                </p>
              </li>
            </ul>
          </div>
          <div className="grid md:grid-cols-2 py-12">
            <h2 className="mb-8 md:text-left font-serif leading-tight text-3xl md:text-4xl max-w-lg font-semibold lg:text-5xl">
              Strony internetowe dla firm Rzeszów
            </h2>
            <div className="flex flex-col items-center md:-mt-8 md:items-start">
              <p className="md:text-xl pt-8 border-t">
                Tworząc <strong>strony internetowe</strong> dla firm, skupiamy się na nowoczesnych rozwiązaniach deweloperskich i promocyjnych. Współpracując z nami, możesz spodziewać się kreatywnych i skutecznych treści na podstawie optymalizacji SEO.
              </p>
              <p className="md:text-xl mt-4">
                Nasze <strong>strony www</strong> charakteryzują się doskonałą szybkością ładowania oraz bezpieczeństwem. Zdając sobie sprawę z roli urządzeń mobilnych w procesie sprzedażowym, każdą <strong>stronę internetową</strong>, która wychodzi z naszej agencji, projektujemy z uwzględnieniem urządzeń mobilnych.
              </p>
              <p className="md:text-xl mt-4">
                Korzystając z naszej oferty stron internetowych moesz liczyć na:
              </p>
              <ul className="flex flex-col items-start self-start my-8">
                <li className="flex items-center mt-4 justify-center space-x-1">
                  <span className="w-1 h-1 mr-2 rounded-full lg:w-2 lg:h-2 bg-primary"></span>
                  <p className="md:text-xl">techniczne SEO,</p>
                </li>
                <li className="flex items-center mt-4 justify-center space-x-1">
                  <span className="w-1 h-1 mr-2 rounded-full lg:w-2 lg:h-2 bg-primary"></span>
                  <p className="md:text-xl">narzędzia analityczne,</p>
                </li>
                <li className="flex items-center mt-4 justify-center space-x-1">
                  <span className="w-1 h-1 mr-2 rounded-full lg:w-2 lg:h-2 bg-primary"></span>
                  <p className="md:text-xl">szybkie wczytywanie,</p>
                </li>
                <li className="flex items-center mt-4 justify-center space-x-1">
                  <span className="w-1 h-1 mr-2 rounded-full lg:w-2 lg:h-2 bg-primary"></span>
                  <p className="md:text-xl">przemyślane i skuteczne UI/UX.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100">
        <div className="mx-auto xl:w-3/4 px-4 grid xl:grid-cols-3 md:grid-cols-2 gap-2 xl:gap-8 py-16">
          <Image className="xl:border-4 border-2 border-white shadow-lg" alt="Polskie Radio Rzeszów strona internetowa" src={radio} />
          <Image className="xl:border-4 border-2 border-white shadow-lg" alt="Shoprimo strona www" src={shoprimo} />
          <Image className="xl:border-4 border-2 border-white shadow-lg" alt="D&G Consulting - strona konsultingowa" src={dgc} />
          <Image className="xl:border-4 border-2 border-white shadow-lg" alt="Strona www dla hotelu" src={przystanek} />
          <Image className="xl:border-4 border-2 border-white shadow-lg" alt="Strona dla sklepu internetowego" src={weldoro} />
          <Image className="xl:border-4 border-2 border-white shadow-lg" alt="BarberRoom strona internetowa" src={barber} />
          <Image className="xl:border-4 border-2 border-white shadow-lg" alt="Strona dla producenta dachów płaskich" src={damansdak} />
          <Image className="xl:border-4 border-2 border-white shadow-lg" alt="Strona dla agencji eventowej" src={anilama} />
          <Image className="xl:border-4 border-2 border-white shadow-lg" alt="Strona medycyny chińskiej i ziołolecznictwa" src={harmonia} />
          <Image className="xl:border-4 border-2 border-white shadow-lg" alt="Strona www Stowarzyszenie Elektryków Polkskich" src={sep} />
          <Image className="xl:border-4 border-2 border-white shadow-lg" alt="Strona internetowa dla agencji turystycznej" src={deski} />
          <Image className="xl:border-4 border-2 border-white shadow-lg" alt="Strona www tapicer samochodowy" src={skycar} />
          <Image className="xl:border-4 border-2 border-white shadow-lg" alt="Strona dla betoniarnii" src={transbet} />
          <Image className="xl:border-4 border-2 border-white shadow-lg" alt="Strona internetowa dla agencji turystycznej" src={adblue} />
          <Image className="xl:border-4 border-2 border-white shadow-lg" alt="Strona dla producenta przetworów owocowych" src={agrofruct} />
        </div>
      </section>
      <Testimonials />

      <CtaFooter />
      <div className="relative flex justify-center mt-12">
        {/* <div className="absolute w-5 h-5 rounded-full bg-primary top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"></div> */}
        <div className="hidden xl:block absolute bg-red-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="bg-black w-16 -top-4 -left-14 h-1 absolute transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="bg-black absolute border-4 border-black w-80 h-40 right-20 -top-24 flex justify-center p-3 flex-col font-serif">
            <h4 className="text-primary font-semibold text-lg">Strony internetowe Rzeszów</h4>
            <p className="text-white text-sm">Kolejowa 12/310, 35-073 Rzeszów</p>
          </div>
        </div>
        <iframe className="w-full relative" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.4086440516758!2d22.005846715716544!3d50.041175779420925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473cfbfdd5b9fe33%3A0x7614bec802e05c47!2sAgencja%20marketingowa%20Getpromo!5e0!3m2!1spl!2spl!4v1688138225938!5m2!1spl!2spl" width="800" height="600" loading="lazy"></iframe>
        <div className="absolute inset-0 bg-black opacity-10"></div>
      </div>
    </>
  );
}
