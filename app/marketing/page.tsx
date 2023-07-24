import Image from "next/image";
import { Testimonials } from "../components/testimonials";
import CtaFooter from "../components/ctaFooter";
import Cta from "../components/cta";
import pattern from "../../public/pattern.svg";
import pozycjonowanie from "../../public/seo-pozycjonowanie.svg";
import analityka from "../../public/analityka.svg";
import goddess from "../../public/goddess-marketing2.png";
import landing from "../../public/landing.svg";
import socialMedia from "../../public/social-media.svg";
import GoogleAdsLogo from "../../public/google-ads-logo.svg";
import AnalyticsLogo from "../../public/analytics-logo.svg";
import YoutubeLogo from "../../public/youtube_logo.svg";
import GoogleLogo from "../../public/google-logo.svg";
import FacebookLogo from "../../public/facebook-logo.svg";





export const metadata = {
  title: "Marketing internetowy",
  description: "Kompleksowa obsługa marketingowa. Pozycjonowanie stron internetowych, kampanie marketingowe Google i Facebook Ads, SEO/SEM."
}

export default function Marketing() {

  function addReviewJsonLd() {
    return {
      __html: `{
        {
          "@context": "https://schema.org/",
          "@type": "CreativeWorkSeries",
          "name": "Agencja Marketingowa Rzeszów",
            "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": "20"
            },
      },
  `,
    };
  };


  return (
    <>

      <link
        rel="canonical"
        href="https://getpromo.pl/marketing"
        key="canonical"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={addReviewJsonLd()}
        key="Review-jsonld"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://getpromo.pl/" />
      <meta property="og:title" content="Marketing internetowy" />
      <meta property="og:description" content="Kompleksowa obsługa marketingowa. Pozycjonowanie stron internetowych, kampanie marketingowe Google i Facebook Ads, SEO/SEM." />
      <meta property="og:image" content="https://getpromo.pl/cover_marketing.jpg" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://getpromo.pl/" />
      <meta property="twitter:title" content="Marketing internetowy" />
      <meta property="twitter:description" content="Kompleksowa obsługa marketingowa. Pozycjonowanie stron internetowych, kampanie marketingowe Google i Facebook Ads, SEO/SEM." />
      <meta property="twitter:image" content="https://getpromo.pl/cover_marketing.jpg" />


      <div className="absolute z-20 -mt-32 shadow-2xl shadow-violet-500 blur-2xl opacity-10 md:h-96 md:w-96 w-56 h-56 bg-violet-600 top-0 rounded-full mx-auto left-0 right-0"></div>
      <div className="relative">
        <section className="relative z-10 w-full py-6 overflow-hidden">
          <div className="absolute inset-0 bg-getDark bg-opacity-70 md:bg-transparent z-20"></div>
          <div className="relative flex lg:flex-row flex-col py-20 md:py-0 items-center justify-between px-4 mx-auto container md:px-12 2xl:px-0 lg:max-w-screen-2xl">
            <div className="space-y-8 lg:-mt-28 max-w-lg 2xl:max-w-2xl relative z-20 w-full">
              <h1
                className="font-serif leading-tight text-white text-4xl font-semibold lg:text-5xl 2xl:text-6xl">
                Marketing internetowy</h1>
              <p className="max-w-3xl relative z-10 md:text-xl text-white ">Pozycjonowanie stron internetowych, kampanie marketingowe Google i Facebook Ads, SEO/SEM. Projektowanie wizualne generujące klientów i zwiększające sprzedaż.</p>
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
            <div className="w-full absolute inset-0 lg:relative">
              <Image className="relative mb-4" alt="design-god" src={goddess} />
              <div className="animate-flash -z-10 w-10 h-10 p-40 md:p-72 absolute m-3 left-1/2 -translate-y-1/2 transform -translate-x-1/2 top-1/2">
                <div className="absolute inset-0 z-10 m-0.5  bg-transparent border-8 border-violet-500 blur rounded-full"></div>
                <div className="absolute inset-0 z-20  bg-transparent border-4 border-white rounded-full"></div>
                <div className="absolute inset-0 z-10 -m-1  bg-transparent border-8 border-violet-500 blur rounded-full"></div>
              </div>
              <p className="absolute bottom-20 right-20 text-white font-serif font-semibold text-4xl"><span className="text-primary">Ads</span>tena</p>
            </div>
          </div>
          <Image className="hidden -z-10 lg:block mx-auto absolute top-96 inset-0" src={pattern} alt="" />
        </section>
        <section className="text-center relative z-10 my-12">
          <div className="flex flex-wrap md:flex-row flex-col max-w-7xl px-8 md:space-y-0 space-y-12 mx-auto justify-center">
            <div className="md:w-1/3 text-left space-y-5">
              <p className=" text-primary font-serif text-8xl">68%</p>
              <div className="h-0.5 bg-primary w-3/4"></div>
              <p className="text-white w-3/4">wszystkich interakcji online zaczyna się od wyszukiwarki</p>
            </div>
            <div className="md:w-1/3 space-y-5 text-left">
              <p className=" text-primary font-serif text-8xl">28%</p>
              <div className="h-0.5 bg-primary w-3/4"></div>
              <p className="text-white w-3/4">wyszukiwań lokalnych skutkuje konwersją w ciągu 24 godzin</p>
            </div>
            <div className="md:w-1/3 space-y-5 text-left">
              <p className="text-primary font-serif text-8xl">84%</p>
              <div className="h-0.5 bg-primary w-3/4"></div>
              <p className="text-white w-3/4">osób używa Instagram do odkrywania nowych produktów</p>
            </div>
          </div>
        </section>
        <section className="md:pb-24 py-12 md:py-0">
          <div className="flex justify-center items-center md:flex-row flex-col flex-wrap mx-auto max-w-7xl">
            <div className="">
              <div className="bg-secondary md:h-96 md:w-96 h-72 w-72 flex flex-col items-center justify-center">
                <Image src={pozycjonowanie} alt="SEO pozycjonowanie" />
                <p className="font-serif text-3xl text-center mt-12 text-white">Pozycjonowanie</p>
              </div>
              <div className="bg-white md:h-96 text-center md:w-96 h-72 w-72 flex flex-col items-center justify-center">
                <Image src={landing} alt="Analityka internetowa" />
                <p className="font-serif text-3xl mt-12">Kampanie internetowe</p>
              </div>
            </div>
            <div className="bg-primary md:h-96 text-center md:w-96 h-72 w-72 flex flex-col items-center justify-center">
              <Image src={analityka} alt="Analityka internetowa" />
              <p className="font-serif text-3xl mt-12">Analityka internetowa</p>
            </div>
            <div className="">
              <div className="hidden lg:block md:h-96 md:w-96 h-72 w-72"></div>
              <div
                className="border border-0.5 text-center border-gray-800 md:h-96 md:w-96 h-72 w-72 sm:ml-72 md:ml-0 flex flex-col items-center justify-center lg:mt-96">
                <Image src={socialMedia} alt="Spcial media marketing" />
                <p className="font-serif text-3xl mt-12 text-white">Social media</p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto container pb-0 md:pb-12 px-4 text-getDark">
            <h1 className="font-serif leading-tight text-3xl md:text-4xl max-w-lg font-semibold lg:text-5xl">Marketing internetowy</h1>
            <p className="md:text-xl md:pt-12 md:mt-12 pt-8 mt-8 border-t">Nasze działania to skuteczne strategie marketingowe, potwierdzone realnymi wynikami sprzedaży naszych klientów. Zajmujemy się realizacją celów marketingowych, reklamą graficzną i wizualną. Jesteśmy zespołem ludzi o otwartych głowach z dużą dawką kreatywnego zaangażowania. </p>
            <p className="md:text-xl md:pt-12 md:mt-12 pt-8 mt-8 border-t">Zadbamy o Twoją widoczność w sieci. Zaprojektujemy Twoją stronę internetową na osiąganie jak najlepszych wyników w rankingach Google.
              Promocja w Internecie to ważny element budowania swojej marki i pozycji wśród konkurencji. Wiemy, jakimi kanałami network marketingu dotrzeć do potencjalnych odbiorców usługi lub produktu, a tym samym zdobyć wierne i zadowolone grono klientów. Wykorzystujemy najbardziej skuteczne narzędzia promocji zwiększające sprzedaż, rozpoznawalność marki oraz pozwalające na zajęcie wysokich pozycji w wyszukiwarkach. </p>
          </div>
        </section>
        <Cta />
      </div>
      <section className="text-getDark bg-white">
        <div className="max-w-7xl container px-4 mx-auto">
          <div className="pt-16 mb-12">
            <ul className="grid grid-cols-2 gap-x-4 gap-y-9 md:grid-cols-3 md:gap-x-7 lg:grid-cols-5 lg:gap-32">
              <li className="flex flex-col items-center space-y-5 md:items-start">
                <Image className="w-14 grayscale hover:grayscale-0 h-auto" src={GoogleAdsLogo} alt="Google Ads logo" />
                <span className="w-full h-[1px] bg-getGray block"></span>
                <p className="text-base font-serif">Google Ads</p>
              </li>
              <li className="flex flex-col items-center space-y-5 md:items-start ">
                <Image className="w-14 grayscale hover:grayscale-0 h-auto" src={AnalyticsLogo} alt="Google Analytics logo" />
                <span className="w-full h-[1px] bg-getGray block  "></span>
                <p className="text-base break-words font-serif ">
                  Google Analytics
                </p>
              </li>
              <li className="flex flex-col items-center space-y-5 md:items-start ">
                <Image
                  className="w-14 grayscale hover:grayscale-0 h-auto"
                  src={YoutubeLogo}
                  alt="YouTube logo"
                />
                <span className="w-full h-[1px] bg-getGray block  "></span>
                <p className="text-base break-words font-serif">
                  YouTube
                </p>
              </li>
              <li className="flex flex-col items-center space-y-5 md:items-start ">
                <Image className="w-14 grayscale hover:grayscale-0 h-auto" src={GoogleLogo} alt="Google logo" />
                <span className="w-full h-[1px] bg-getGray block  "></span>
                <p className="text-base break-words font-serif ">
                  Pozycjonowanie
                </p>
              </li>
              <li className="flex flex-col items-center space-y-5 md:items-start ">
                <Image className="w-14 grayscale hover:grayscale-0 h-auto" src={FacebookLogo} alt="Facebook logo" />
                <span className="w-full h-[1px] bg-getGray block "></span>
                <p className="text-base break-words font-serif">
                  Social media
                </p>
              </li>
            </ul>
          </div>
          <div className="grid md:grid-cols-2 pt-16">
            <h2 className="mb-8 text-left font-serif leading-tight text-3xl md:text-4xl max-w-lg font-semibold lg:text-5xl">
              Skuteczna reklama w internecie
            </h2>
            <div className="flex flex-col items-center md:-mt-8 md:items-start">
              <p className="md:text-lg pt-8 border-t">
                Niezależnie od tego, czy potrzebujesz optymalizacji SEO, zarządzania kampaniami reklamowymi w Google Ads, strategii mediów społecznościowych czy tworzenia wartościowego treści, możesz polegać na naszej wiedzy i doświadczeniu. Działamy jako Twój partner w sukcesie i wspólnie pracujemy nad osiągnięciem oczekiwanych wyników.
              </p>
            </div>
          </div>
          <div className="grid pb-16 md:grid-cols-2">
            <div className="relative pr-10 pt-10 space-y-2">
              <h3 className="text-2xl font-semibold font-serif">Pozycjonowanie w wyszukiwarkach</h3>
              <p className="text-gray-700 md:text-lg">Pozycjonowanie SEO – audyt SEO, optymalizacja strony i treści, raportowanie i analiza wyników.</p>
            </div>
            <div className="relative pr-10 pt-10 space-y-2">
              <h3 className="text-2xl font-semibold font-serif">Reklama w internecie</h3>
              <p className="text-gray-700 md:text-lg">Google i Facebook Ads – wszystkie formy reklamy: reklama tekstowa, remarketing, reklama produktowa, reklama graficzna, reklama na YouTube, reklama na Instagramie.</p>
            </div>
            <div className="relative pr-10 pt-10 space-y-2">
              <h3 className="text-2xl font-semibold font-serif">Analityka internetowa</h3>
              <p className="text-gray-700 md:text-lg">Analizujemy działania w internecie w celu wyłonienia odpowiedzi na najważniejsze pytania dotyczące wzrostu sprzedaży.</p>
            </div>
            <div className="relative pr-10 pt-10 space-y-2">
              <h3 className="text-2xl font-semibold font-serif">Obsługa mediów społecznościowych</h3>
              <p className="text-gray-700 md:text-lg">Social media – prowadzimy skuteczną i profesjonalną komunikację w mediach społecznościowych, która zwiększy zyski Twojej firmy.</p>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
      <CtaFooter />
    </>
  );
}