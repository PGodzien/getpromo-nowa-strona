import Image from "next/image";
import Cta from "../../components/cta";
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
import goddess from "../../public/goddess-www2.png";
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
import CtaFooter from "../../components/ctaFooter";
import onas1 from "@/public/o-nas-01.jpg"
import onas2 from "@/public/o-nas-02.jpg"
import onas3 from "@/public/o-nas-03.jpg"
import onas4 from "@/public/o-nas-04.jpg"
import onas5 from "@/public/o-nas-05.jpg"
import onas6 from "@/public/o-nas-06.jpg"
import onas7 from "@/public/o-nas-07.jpg"
import onas8 from "@/public/o-nas-08.jpg"
import { Testimonials } from "../../components/testimonials";
import Clients from "@/components/clients";
import OpinionsTwo from "@/components/opinions";
import Opinions from "@/components/opinions";
import ClientsLight from "@/components/clients_light";

function addReviewJsonLd() {
  return {
    __html: `{
      
        "@context": "https://schema.org/",
        "@type": "CreativeWorkSeries",
        "name": "Strony Internetowe",
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
  title: "Projektowanie stron internetowych",
  description: "Projektowanie stron internetowych. Tworzenie stron www. Responsywne, szybkie i wydajne strony internetowe. Skuteczne strony internetowe dla firm. "
}

export default function Strony() {
  return (
    <>
      <link
        rel="canonical"
        href="https://getpromo.pl/strony-internetowe"
        key="canonical"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={addReviewJsonLd()}
        key="Review-jsonld"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://getpromo.pl/strony-internetowe" />
      <meta property="og:title" content="Projektowanie stron internetowych" />
      <meta property="og:description" content="Projektowanie stron internetowych. Tworzenie stron www. Responsywne, szybkie i wydajne strony internetowe. Skuteczne strony internetowe dla firm. " />
      <meta property="og:image" content="https://getpromo.pl/cover_web.jpg" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://getpromo.pl/strony-internetowe" />
      <meta property="twitter:title" content="Projektowanie stron internetowych" />
      <meta property="twitter:description" content="Projektowanie stron internetowych. Tworzenie stron www. Responsywne, szybkie i wydajne strony internetowe. Skuteczne strony internetowe dla firm. " />
      <meta property="twitter:image" content="https://getpromo.pl/cover_web.jpg" />
      <div className="absolute z-20 -mt-32 shadow-2xl shadow-primary blur-2xl opacity-10 md:h-96 md:w-96 w-56 h-56 bg-primary top-0 rounded-full mx-auto left-0 right-0"></div>
      <div className="relative">

        <section>
          <div className="relative isolate">
            <div className="overflow-hidden">
              <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                  <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                    <h1 className="text-4xl font-medium font-serif tracking-tight text-white sm:text-6xl">
                      Poznajmy się lepiej
                    </h1>
                    <p className="relative mt-6 text-lg leading-8 text-gray-300 sm:max-w-md lg:max-w-none">
                      Nasz zespół to grupa utalentowanych i doświadczonych osób, które potrafią stworzyć skuteczne rozwiązania dla Twojego biznesu.
                    </p>
                  </div>
                  <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                    <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                      <div className="relative">
                        <Image
                          src={onas2}
                          alt=""
                          className="aspect-[2/3] w-full bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gray-900/10" />
                      </div>
                    </div>
                    <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                      <div className="relative">
                        <Image
                          src={onas8}
                          alt=""
                          className="aspect-[2/3] w-full bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gray-900/10" />
                      </div>
                      <div className="relative">
                        <Image
                          src={onas3}
                          alt=""
                          className="aspect-[2/3] w-full bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gray-900/10" />
                      </div>
                    </div>
                    <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                      <div className="relative">
                        <Image
                          src={onas7}
                          alt=""
                          className="aspect-[2/3] w-full bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gray-900/10" />
                      </div>
                      <div className="relative">
                        <Image
                          src={onas5}
                          alt=""
                          className="aspect-[2/3] w-full bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gray-900/10" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-white px-6 py-32 lg:px-8">
            <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
              <h1 className="mt-2 text-3xl font-medium font-serif tracking-tight text-gray-900 sm:text-4xl">O nas</h1>
              <p className="mt-6 text-xl leading-8">
                Otherland jest agencją kreatywną, która pomaga firmom i startupom w marketingu ich produktów. Używamy najnowocześniejszych technologii, aby pomóc naszym klientom zrozumieć konsumentów, przekształcić ich w klientów i rozwijać ich marki.
              </p>
              <div className="mt-10 max-w-2xl">
                <p>
                  Jesteśmy ekspertami w dziedzinie marketingu, rozwoju oprogramowania i tworzenia stron internetowych. Oferujemy szeroki wachlarz usług dla biznesu. Dostarczamy kreatywne i skuteczne rozwiązania, które inspirują, angażują i zachwycają Twoich klientów.
                </p>
              </div>
            </div>
          </div>
        </section>
        <ClientsLight />
      </div>
      <Testimonials />
      <CtaFooter />
    </>
  );
}
