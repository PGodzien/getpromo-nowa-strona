"use client";
import Image from "next/image";
import { Testimonials } from "../components/testimonials";
import Cta from "../components/cta";
import CtaFooter from "../components/ctaFooter";
import pattern from "../../public/pattern.svg";
import marketing from "../../public/marketing.svg";
import landing from "../../public/landing.svg";
import pozycjonowanie from "../../public/pozycjonowanie.svg";
import portal from "../../public/portal.svg";
import designGod from "../../public/design-god.png";
import ambasada from "../../public/ambasada.jpg";
import adv from "../../public/adv.jpg";
import barber_logo from "../../public/barber_logo.jpg";
import prosto from "../../public/prosto.jpg";
import skycar_logo from "../../public/skycar_logo.jpg";
import tlusto from "../../public/tlusto.jpg";

export default function Design() {
  return (
    <>

      <title>Projektowanie graficzne – Getpromo agencja marketingowa</title>
      <meta name="title" content="Projektowanie graficzne – Getpromo agencja marketingowa" />
      <meta name="description" content="Projektowanie graficzne, projekktowanie logo, materiały reklamowe, branding firmowy." />
      <link
        rel="canonical"
        href="https://getpromo.pl/projektowanie-graficzne"
        key="canonical"
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://getpromo.pl/" />
      <meta property="og:title" content="Projektowanie graficzne – Getpromo agencja marketingowa" />
      <meta property="og:description" content="Projektowanie graficzne, projekktowanie logo, materiały reklamowe, branding firmowy." />
      <meta property="og:image" content="/cover_design.jpg" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://getpromo.pl/" />
      <meta property="twitter:title" content="Projektowanie graficzne – Getpromo agencja marketingowa" />
      <meta property="twitter:description" content="Projektowanie graficzne, projekktowanie logo, materiały reklamowe, branding firmowy." />
      <meta property="twitter:image" content="/cover_design.jpg" />

      <div className="absolute z-20 -mt-32 shadow-2xl shadow-green-500 blur-2xl opacity-10 h-96 w-96 bg-green-600 top-0 rounded-full mx-auto left-0 right-0"></div>
      <div className="relative">
        <section className="relative z-10 w-full py-6">
          <div className="relative flex lg:flex-row flex-col py-20 md:py-0 items-center justify-between px-4 mx-auto container md:px-12 2xl:px-0 lg:max-w-screen-2xl">
            <div className="space-y-8 lg:-mt-28 max-w-lg 2xl:max-w-2xl relative z-20 w-full">
              <h1
                className="font-serif leading-tight text-white text-4xl font-semibold lg:text-5xl 2xl:text-6xl">
                Projektowanie graficzne</h1>
              <p className="max-w-3xl relative z-10 md:text-xl text-white">Wyróżnij się jakością i postaw na projekty graficzne wyróżniające się nowoczesną estetyką, jasnym przekazem i niebanalnym designem.</p>
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
              <Image className="relative" alt="design-god" src={designGod} />
              <div className="animate-flash -z-10 w-10 h-10 p-40 md:p-72 absolute top-20 left-10">
                <div className="absolute inset-0 z-10 m-0.5  bg-transparent border-8 border-green-500 blur rounded-full"></div>
                <div className="absolute inset-0 z-20  bg-transparent border-4 border-white rounded-full"></div>
                <div className="absolute inset-0 z-10 -m-1  bg-transparent border-8 border-green-500 blur rounded-full"></div>
              </div>
            </div>
          </div>
          <Image className="hidden -z-10 lg:block mx-auto absolute top-96 inset-0" src={pattern} alt="" />
        </section>
        <section className="text-center relative z-10 my-12">
          <div className="flex flex-wrap md:flex-row flex-col max-w-7xl px-8 md:space-y-0 space-y-12 mx-auto justify-center">
            <div className="md:w-1/3 text-left space-y-5">
              <p className=" text-primary font-serif text-8xl">23%</p>
              <div className="h-0.5 bg-primary w-3/4"></div>
              <p className="text-white w-3/4">mogą wzrosnąć przychody, dzięki konsekwentnemu prezentowaniu marki</p>
            </div>
            <div className="md:w-1/3 space-y-5 text-left">
              <p className=" text-primary font-serif text-8xl">5-7</p>
              <div className="h-0.5 bg-primary w-3/4"></div>
              <p className="text-white w-3/4">wrażeń jest potrzebnych do zbudowania świadomości marki</p>
            </div>
            <div className="md:w-1/3 space-y-5 text-left">
              <p className="text-primary font-serif text-8xl">60%</p>
              <div className="h-0.5 bg-primary w-3/4"></div>
              <p className="text-white w-3/4">konsumentów będzie unikać marki, jeśli uzna, że ​​jej logo jest nieatrakcyjne, nieprzyjemne lub dziwne</p>
            </div>
          </div>
        </section>

        <section className="md:pb-24">
          <div className="flex justify-center items-center md:flex-row flex-col flex-wrap mx-auto max-w-7xl">
            <div className="">
              <div className="bg-secondary md:h-96 md:w-96 h-72 w-72 flex flex-col items-center justify-center">
                <Image src={marketing} alt="Marketing internetowy" />
                <p className="font-serif text-3xl mt-12 text-white">Logo</p>
              </div>
              <div className="bg-white md:h-96 md:w-96 h-72 w-72 flex flex-col items-center justify-center">
                <Image src={landing} alt="Analityka internetowa" />
                <p className="font-serif text-3xl mt-12">Branding</p>
              </div>
            </div>
            <div className="bg-primary md:h-96 md:w-96 h-72 w-72 flex flex-col items-center justify-center">
              <Image src={pozycjonowanie} alt="Pozycjonowanie SEO" />
              <p className="font-serif text-3xl mt-12">Grafika</p>
            </div>
            <div className="">
              <div className="hidden lg:block md:h-96 md:w-96 h-72 w-72"></div>
              <div
                className="border border-0.5 border-gray-800 md:h-96 md:w-96 h-72 w-72 sm:ml-72 md:ml-0 flex flex-col items-center justify-center lg:mt-96">
                <Image src={portal} alt="Spcial media marketing" />
                <p className="font-serif text-3xl mt-12 text-white">Rebranding</p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto container pb-0 md:pb-12 px-4 text-getDark">
            <h1 className="font-serif leading-tight text-3xl md:text-4xl max-w-lg font-semibold lg:text-5xl"> Projektowanie graficzne</h1>
            <p className="md:text-xl md:pt-12 md:mt-12 pt-8 mt-8 border-t">Dobrze wyglądające logo i estetycznie zaprojektowane materiały promocyjne to jedna z wielu form komunikacji wizualnej z klientem. To, jaki odniesie sukces, zależy od jej warstwy typograficznej, dobranej kolorystyki i motywu przewodniego. Dla naszych klientów tworzymy wysokiej jakości projekty graficzne, dostosowane do charakteru i specyfiki branży oraz oczekiwanych celów marketingowych.</p>
            <p className="md:text-xl md:pt-12 md:mt-12 pt-8 mt-8 border-t">Przykładamy ogromną wagę do każdego elementu graficznego, dbając o harmonię kolorów, perfekcyjny dobór fontów oraz oryginalne kompozycje. Naszym celem jest stworzenie materiałów, które nie tylko wzbudzą zachwyt, ale także skutecznie przekazują wartości i wizję Twojej marki.</p>
            <p className="md:text-xl md:pt-12 md:mt-12 pt-8 mt-8 border-t">Wierzymy w siłę wizualnego przekazu i wiemy, jak istotne jest, aby Twoja marka była prezentowana z godnym podziwu profesjonalizmem. Dlatego oddajemy nasze pełne zaangażowanie i pasję w każdy projekt, który realizujemy.</p>
          </div>
        </section>
        <Cta />
      </div>
      <section className="relative px-10 py-16 overflow-hidden bg-white">
        {/* <img className="absolute left-0 z-0 w-3/4 transform -translate-y-1/2 opacity-70 top-1/2" src="https://cdn.devdojo.com/tails/images/gradient-blob.svg">
          <img className="absolute left-0 z-0 object-cover object-center w-full h-full opacity-50 top-24" src="https://cdn.devdojo.com/tails/images/swirl-white.svg"> */}
        <div className="container relative z-10 px-4 mx-auto max-w-7xl">
          <div className="md:flex-row flex flex-col mb-12">
            <div className="w-full md:w-8/12">
              <h2 className="mb-8 text-center md:text-left font-serif leading-tight text-3xl md:text-4xl max-w-lg font-semibold lg:text-5xl">
                Projekty graficzne i poligrafia cyfrowa
              </h2>
              <div className="flex flex-col items-center md:-mt-8 md:items-start">
                <p className="md:text-xl pt-8 max-w-3xl">
                  Nasze usługi projektowania graficznego obejmują szeroki zakres elementów mających na celu przekształcenie Twojego wizerunku w skuteczny i wydajny system zwiększający dochody Twojej firmy. Oto co możemy zaoferować:
                </p>
              </div>
            </div>
            <div className="w-full md:w-4/12 ml-auto">
              <ul className="flex flex-col items-start self-start">
                <li className="flex items-center mt-4 justify-center space-x-1">
                  <span className="w-1 h-1 mr-2 rounded-full lg:w-2 lg:h-2 bg-primary"></span>
                  <p className="md:text-xl">Identyfikacja wizualna</p>
                </li>
                <li className="flex items-center mt-4 justify-center space-x-1">
                  <span className="w-1 h-1 mr-2 rounded-full lg:w-2 lg:h-2 bg-primary"></span>
                  <p className="md:text-xl">Materiały firmowe</p>
                </li>
                <li className="flex items-center mt-4 justify-center space-x-1">
                  <span className="w-1 h-1 mr-2 rounded-full lg:w-2 lg:h-2 bg-primary"></span>
                  <p className="md:text-xl">Projektowanie graficzne</p>
                </li>
                <li className="flex items-center mt-4 justify-center space-x-1">
                  <span className="w-1 h-1 mr-2 rounded-full lg:w-2 lg:h-2 bg-primary"></span>
                  <p className="md:text-xl">Materiały promocyjne</p>
                </li>
                <li className="flex items-center mt-4 justify-center space-x-1">
                  <span className="w-1 h-1 mr-2 rounded-full lg:w-2 lg:h-2 bg-primary"></span>
                  <p className="md:text-xl">Grafika cyfrowa</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            <div className="row-span-2 col-span-full sm:col-span-1 md:col-start-1 sm:row-start-2 md:row-start-3">
              <a href="#_" className="relative flex flex-col items-start justify-end w-72 h-72 overflow-hidden shadow-lg group">
                <div className="absolute inset-0 w-full h-full">
                  <Image className="absolute inset-0 object-cover object-center w-full h-full transition duration-500 group-hover:opacity-100 group-hover:scale-110" src={skycar_logo} alt="" />
                </div>
              </a>
            </div>
            <div className="row-span-2 col-span-full sm:col-span-1 md:col-start-1 xl:col-start-2 sm:row-start-4 md:row-start-5 xl:row-start-2">
              <a href="#_" className="relative flex flex-col items-start justify-end w-72 h-72 overflow-hidden shadow-lg group">
                <div className="absolute inset-0 w-full h-full">
                  <Image className="absolute inset-0 object-cover object-center w-full h-full transition duration-500 group-hover:opacity-100 group-hover:scale-110" src={prosto} alt="" />
                </div>
              </a>
            </div>
            <div className="row-span-2 col-span-full sm:col-span-1 md:col-start-2 xl:col-start-2 sm:row-start-6 md:row-start-2 xl:row-start-4">
              <a href="#_" className="relative flex flex-col items-start justify-end w-72 h-72 overflow-hidden shadow-lg group">
                <div className="absolute inset-0 w-full h-full">
                  <Image className="absolute inset-0 object-cover object-center w-full h-full transition duration-500 group-hover:opacity-100 group-hover:scale-110" src={tlusto} alt="" />
                </div>
              </a>
            </div>
            <div className="row-span-2 col-span-full sm:col-span-1 md:col-start-2 xl:col-start-3 sm:row-start-1 md:row-start-4 xl:row-start-1">
              <a href="#_" className="relative flex flex-col items-start justify-end w-72 h-72 overflow-hidden shadow-lg group">
                <div className="absolute inset-0 w-full h-full">
                  <Image className="absolute inset-0 object-cover object-center w-full h-full transition duration-500 group-hover:opacity-100 group-hover:scale-110" src={barber_logo} alt="" />
                </div>
              </a>
            </div>
            <div className="row-span-2 col-span-full sm:col-span-1 md:col-start-3 xl:col-start-3 sm:row-start-3 md:row-start-1 xl:row-start-3">
              <a href="#_" className="relative flex flex-col items-start justify-end w-72 h-72 overflow-hidden shadow-lg group">
                <div className="absolute inset-0 w-full h-full">
                  <Image className="absolute inset-0 object-cover object-center w-full h-full transition duration-500 group-hover:opacity-100 group-hover:scale-110" src={adv} alt="" />
                </div>
              </a>
            </div>
            <div className="row-span-2 col-span-full sm:col-span-1 md:col-start-3 xl:col-start-4 sm:row-start-5 md:row-start-3 xl:row-start-2">
              <a href="#_" className="relative flex flex-col items-start justify-end w-72 h-72 overflow-hidden shadow-lg group">
                <div className="absolute inset-0 w-full h-full">
                  <Image className="absolute inset-0 object-cover object-center w-full h-full transition duration-500 group-hover:opacity-100 group-hover:scale-110" src={ambasada} alt="" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
      <CtaFooter />
    </>
  );
}
