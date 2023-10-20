import Cta from "../components/cta";
import CtaFooter from "../components/ctaFooter";
import { Testimonials } from "../components/testimonials";
import Image from "next/image";
import pattern from "../../public/pattern.svg";
import ReactLogo from "../../public/react_logo.png";
import WordPressLogo from "../../public/wordpress_logo.svg";
import NextjsLogo from "../../public/next_logo.svg";
import GolangLogo from "../../public/golang_logo.svg";
import TailwindLogo from "../../public/tailwind_logo.svg";
import Typescript from "../../public/typescript.svg";
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
import { Cog6ToothIcon, DevicePhoneMobileIcon, MagnifyingGlassIcon, ShieldCheckIcon, UserCircleIcon, MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import Faq from "../components/faq";

const features = [
  {
    name: 'Doświadczenie',
    description:
      'Jesteśmy doświadczoną agencją internetową w Rzeszowie z wieloletnią historią projektów.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Indywidualne podejście',
    description:
      'Każda strona, którą projektujemy, jest dostosowana do unikalnych potrzeb klienta.',
    icon: UserCircleIcon,
  },
  {
    name: 'Responsywność',
    description:
      'Nasze strony są w pełni responsywne, co oznacza, że doskonale działają na wszystkich urządzeniach, w tym smartfonach i tabletach.',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'Optymalizacja SEO',
    description:
      'Nasze strony są zoptymalizowane pod kątem SEO, co zwiększa ich widoczność w wynikach wyszukiwania.',
    icon: MagnifyingGlassIcon,
  },
  {
    name: 'Wsparcie techniczne',
    description:
      'Po wdrożeniu strony oferujemy ciągłe wsparcie techniczne i utrzymanie.',
    icon: Cog6ToothIcon,
  },
]

function addReviewJsonLd() {
  return {
    __html: `{
      
        "@context": "https://schema.org/",
        "@type": "CreativeWorkSeries",
        "name": "Strony Internetowe Rzeszów",
        "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "bestRating": "5",
        "ratingCount": "20"
        }
      
  }`,
  };
};

export const metadata = {
  title: "Strony internetowe Rzeszów",
  description: "Strony internetowe Rzeszów. Profesjonalne tworzenie stron internetowych w Rzeszowie. Responsywne i wydaje strony www."
}

export default function StronyRzeszow() {
  return (
    <>
      <link
        rel="canonical"
        href="https://getpromo.pl/strony-internetowe-rzeszow"
        key="canonical"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={addReviewJsonLd()}
        key="Review-jsonld"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://getpromo.pl/strony-internetowe-rzeszow" />
      <meta property="og:title" content="Strony internetowe Rzeszów" />
      <meta property="og:description" content="Strony internetowe Rzeszów. Profesjonalne tworzenie stron internetowych w Rzeszowie. Responsywne i wydaje strony www." />
      <meta property="og:image" content="https://getpromo.pl/cover_webRzeszow.jpg" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://getpromo.pl/strony-internetowe-rzeszow" />
      <meta property="twitter:title" content="Strony internetowe Rzeszów" />
      <meta property="twitter:description" content="Strony internetowe Rzeszów. Profesjonalne tworzenie stron internetowych w Rzeszowie. Responsywne i wydaje strony www." />
      <meta property="twitter:image" content="https://getpromo.pl/cover_webRzeszow.jpg" />
      {/* <Image className="absolute inset-0 z-20" alt="Circle BG" src={bgCircle} /> */}
      <div className="absolute z-20 -mt-32 shadow-2xl shadow-blue-500 blur-2xl opacity-10 md:h-96 md:w-96 w-56 h-56 bg-blue-600 top-0 rounded-full mx-auto left-0 right-0"></div>
      <div className="relative">



        <section className="relative z-10 w-full py-6">
          {/* <div className="absolute inset-0 bg-getDark bg-opacity-70 md:bg-transparent z-20"></div> */}
          <div className="relative flex lg:flex-row flex-col py-10 lg:py-20 space-y-20 lg:space-y-0 items-center justify-between px-4 mx-auto container md:px-12 2xl:px-0 lg:max-w-screen-2xl">
            <div className="space-y-8 lg:-mt-28 max-w-xl 2xl:max-w-2xl relative z-20 w-full">
              <h1
                className="font-serif leading-tight text-white text-4xl font-medium lg:text-6xl">
                Strony internetowe Rzeszów</h1>
              <h2 className="max-w-3xl relative md:text-lg z-10 text-white ">Tworzymy skuteczne strony internetowe, które pracuja i zarabiają dla nszych klientów z Rzeszowa 24 godziny na dobę przez 7 dni w tygodniu.</h2>
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
            <div className="relative lg:w-1/2">
              <Image className="relative" alt="design-god" src={webRzeszow} />
              <div className="animate-flash -z-10 w-10 h-10 p-44 sd:p-64 xl:p-80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 m-3">
                <div className="absolute inset-0 z-10 m-0.5  bg-transparent border-8 border-blue-500 blur rounded-full"></div>
                <div className="absolute inset-0 z-20  bg-transparent border-4 border-white rounded-full"></div>
                <div className="absolute inset-0 z-10 -m-1  bg-transparent border-8 border-blue-500 blur rounded-full"></div>
              </div>
              <p className="absolute bottom-20 right-20 text-white font-serif font-medium text-4xl"><span className="text-primary">rZe</span>us</p>
            </div>
          </div>
          <Image className="hidden -z-10 lg:block mx-auto absolute top-96 inset-0" src={pattern} alt="" />
        </section>
        {/* <section className="text-center relative z-10 my-12">
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
        </section> */}
        {/* <section className="md:pb-24 py-12 md:py-0">
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
        </section> */}
        <section>
          <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto lg:mx-0">
                <h2 className="text-3xl font-medium tracking-tight sm:text-4xl max-w-2xl">Projektowanie stron internetowych Rzeszów</h2>
                <p className="mt-6 text-lg font-serif leading-8 text-gray-600">
                  Nasza agencja w Rzeszowie specjalizuje się w projektowaniu i tworzeniu nowoczesnych stron internetowych, dostosowanych do indywidualnych potrzeb Twojego biznesu. Oferujemy kompleksowe rozwiązania, które pomogą Ci osiągnąć sukces online.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="bg-gray-100 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
                  Dlaczego wybrać naszą firmę?
                </h2>
                <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
                  {features.map((feature) => (
                    <div key={feature.name}>
                      <dt className="text-base leading-7">
                        <div className="mb-6 flex h-10 w-10 text-medium items-center justify-center rounded-lg bg-black">
                          <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </div>
                        {feature.name}
                      </dt>
                      <dd className="mt-1 text-base leading-7 text-gray-600">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto container pb-0 md:pb-12 px-4 text-getDark">
            <h2 className="font-serif leading-tight text-3xl md:text-4xl max-w-lg font-medium lg:text-5xl"> Projektowanie stron internetowych Rzeszów</h2>
            <p className="md:text-xl md:pt-12 md:mt-12 pt-8 mt-8 border-t">Wiemy, jak tworzyć profesjonalne strony internetowe zarówno dla dużych firm, jak i start-upów z Rzeszowa, stawiających swoje pierwsze kroki w biznesie.</p>
            <p className="md:text-xl md:pt-12 md:mt-12 pt-8 mt-8 border-t">Jeśli poszukujesz specjalistów od marketingu sieciowego w Rzeszowie, jesteś w dobrym miejscu. Od lat zajmujemy się tworzeniem profesjonalnych stron internetowych, które wyróżniają się wysoką estetyką, responsywnością i szybkim czasem ładowania. Jako webmasterzy nie pozwalamy sobie na przeciętność. Wierzymy w kluczowe znaczenie wizerunku w sieci dla powodzenia każdej marki.
            </p>
          </div>
        </section> */}
        <Cta />
      </div>
      <section>
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
              <div className="mx-auto w-full max-w-xl lg:mx-0">
                <h2 className="text-3xl font-medium tracking-tight text-gray-900">Tworzenie stron internetowych Rzeszów</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Tworzenie stron internetowych opiera się na nowoczesnych technologiach, które są nie tylko wydajne, ale także doskonale dostosowane do potrzeb użytkowników i optymalizacji pod kątem SEO.
                </p>
              </div>
              <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
                <div className="flex items-center">
                  <Image className="w-14 h-auto" src={ReactLogo} alt="React logo" />
                  <p className="ml-4 text-base font-serif">React</p>
                </div>
                <div className="flex items-center">
                  <Image className="w-14 h-auto" src={WordPressLogo} alt="React logo" />
                  <p className="ml-4 text-base font-serif">WordPress</p>
                </div>
                <div className="flex items-center">
                  <Image className="w-14 h-auto" src={NextjsLogo} alt="React logo" />
                  <p className="ml-4 text-base font-serif">Next.js</p>
                </div>
                <div className="flex items-center">
                  <Image className="w-14 h-auto" src={GolangLogo} alt="React logo" />
                  <p className="ml-4 text-base font-serif">Golang</p>
                </div>
                <div className="flex items-center">
                  <Image className="w-14 h-auto" src={TailwindLogo} alt="React logo" />
                  <p className="ml-4 text-base font-serif">Twilwind CSS</p>
                </div>
                <div className="flex items-center">
                  <Image className="w-14 h-auto" src={Typescript} alt="React logo" />
                  <p className="ml-4 text-base font-serif">Typescript</p>
                </div>
              </div>
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
      <Faq />
      <Testimonials />

      <CtaFooter />
    </>
  );
}
