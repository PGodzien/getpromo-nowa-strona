import Image from "next/image";
import { Testimonials } from "../../components/testimonials";
import CtaFooter from "../../components/ctaFooter";
import Cta from "../../components/cta";
import pattern from "../../public/pattern.svg";
import pozycjonowanie from "../../public/seo-pozycjonowanie.svg";
import analityka from "../../public/analityka.svg";
import agencyRzeszow from "../../public/agencja-marketingowa-rzeszow.png";
import landing from "../../public/landing.svg";
import socialMedia from "../../public/social-media.svg";
import GoogleAdsLogo from "../../public/google-ads-logo.svg";
import AnalyticsLogo from "../../public/analytics-logo.svg";
import YoutubeLogo from "../../public/youtube_logo.svg";
import GoogleLogo from "../../public/google-logo.svg";
import FacebookLogo from "../../public/facebook-logo.svg";

function addReviewJsonLd() {
  return {
    __html: `{
      
        "@context": "https://schema.org/",
        "@type": "CreativeWorkSeries",
        "name": "Agencja Marketingowa Rzeszów",
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
  title: "Agencja marketingowa Rzeszów",
  description: "Szukasz agencji marketingowej w Rzeszowie? Pozycjonowanie stron, kampanie marketingowe Google i Facebook Ads, SEO/SEM."
}

export default function Marketing() {
  return (
    <>
      <link
        rel="canonical"
        href="https://getpromo.pl/agencja-marketingowa-rzeszow"
        key="canonical"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={addReviewJsonLd()}
        key="Review-jsonld"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://getpromo.pl/agencja-marketingowa-rzeszow" />
      <meta property="og:title" content="Agencja marketingowa Rzeszów" />
      <meta property="og:description" content="Szukasz agencji marketingowej w Rzeszowie? Pozycjonowanie stron, kampanie marketingowe Google i Facebook Ads, SEO/SEM." />
      <meta property="og:image" content="https://getpromo.pl/cover_agencja_marketingowa_rzeszow.jpg" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://getpromo.pl/agencja-marketingowa-rzeszow" />
      <meta property="twitter:title" content="Agencja marketingowa Rzeszów" />
      <meta property="twitter:description" content="Szukasz agencji marketingowej w Rzeszowie? Pozycjonowanie stron, kampanie marketingowe Google i Facebook Ads, SEO/SEM." />
      <meta property="twitter:image" content="https://getpromo.pl/cover_agencja_marketingowa_rzeszow.jpg" />


      <div className="absolute z-50 -mt-32 shadow-2xl shadow-blue-500 blur-2xl opacity-10 md:h-96 md:w-96 w-56 h-56 bg-blue-600 top-0 rounded-full mx-auto left-0 right-0"></div>
      <div className="relative">

        <section className="relative z-10 max-w-7xl mx-auto py-6">
          {/* <div className="absolute inset-0 bg-getDark bg-opacity-70 md:bg-transparent z-20"></div> */}
          <div className="relative flex lg:flex-row flex-col-reverse lg:py-20 lg:space-y-0 items-center justify-between px-4 mx-auto container md:px-12 2xl:px-0 lg:max-w-screen-2xl">
            <div className="space-y-8 lg:-mt-28 max-w-xl 2xl:max-w-2xl relative z-20 w-full mt-12">
              <h1
                className="font-serif leading-tight text-white text-4xl font-semibold lg:text-6xl">
                Agencja marketingowa Rzeszów</h1>
              <h2 className="max-w-3xl relative md:text-lg z-10 text-white ">Szukasz skutecznej agencji marketingowej w Rzeszowie? Sprawdź naszą ofertę!</h2>
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
              <Image className="relative" alt="design-god" src={agencyRzeszow} />
              <div className="animate-flash -z-10 w-10 h-10 p-44 sd:p-64 xl:p-80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 m-3">
                <div className="absolute inset-0 z-10 m-0.5  bg-transparent border-8 border-blue-500 blur rounded-full"></div>
                <div className="absolute inset-0 z-20  bg-transparent border-4 border-white rounded-full"></div>
                <div className="absolute inset-0 z-10 -m-1  bg-transparent border-8 border-blue-500 blur rounded-full"></div>
              </div>
              <p className="absolute bottom-20 right-20 text-white font-serif font-semibold text-4xl"><span className="text-primary">rZe</span>us</p>
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
            <h2 className="font-serif leading-tight text-3xl md:text-4xl max-w-xl font-semibold lg:text-5xl">Agencja marketingowa Rzeszów</h2>
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
                <Image className="w-14 h-auto" src={GoogleAdsLogo} alt="Google Ads logo" />
                <span className="w-full h-[1px] bg-getGray block"></span>
                <p className="text-base font-serif">Google Ads</p>
              </li>
              <li className="flex flex-col items-center space-y-5 md:items-start ">
                <Image className="w-14 h-auto" src={AnalyticsLogo} alt="Google Analytics logo" />
                <span className="w-full h-[1px] bg-getGray block  "></span>
                <p className="text-base break-words font-serif ">
                  Google Analytics
                </p>
              </li>
              <li className="flex flex-col items-center space-y-5 md:items-start ">
                <Image
                  className="w-14 h-auto"
                  src={YoutubeLogo}
                  alt="YouTube logo"
                />
                <span className="w-full h-[1px] bg-getGray block  "></span>
                <p className="text-base break-words font-serif">
                  YouTube
                </p>
              </li>
              <li className="flex flex-col items-center space-y-5 md:items-start ">
                <Image className="w-14 h-auto" src={GoogleLogo} alt="Google logo" />
                <span className="w-full h-[1px] bg-getGray block  "></span>
                <p className="text-base break-words font-serif ">
                  Pozycjonowanie
                </p>
              </li>
              <li className="flex flex-col items-center space-y-5 md:items-start ">
                <Image className="w-14 h-auto" src={FacebookLogo} alt="Facebook logo" />
                <span className="w-full h-[1px] bg-getGray block "></span>
                <p className="text-base break-words font-serif">
                  Social media
                </p>
              </li>
            </ul>
          </div>
          <div className="grid md:grid-cols-2 pt-16">
            <h2 className="mb-8 text-left font-serif leading-tight text-3xl md:text-4xl max-w-xl font-semibold lg:text-5xl">
              Agencja interaktywna Rzeszów
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
      <section className="pt-16 bg-white">
        <div className="max-w-7xl mx-auto container pb-0 md:pb-12 px-4 text-getDark prose">
          <h2 className="font-serif leading-tight text-3xl md:text-4xl max-w-xl font-semibold lg:text-5xl">Agencja reklamowa Rzeszów</h2>
          <p className="md:text-xl mt-4">Getpromo to interaktywna agencja marketingowa z Rzeszowa, której działania marketingowe cechują się wysoką skutecznością. Do naszych wysokiej jakości usług marketingowych należą: marketing internetowy, prowadzenie kampanii reklamowych, automatyzacja procesów, dbanie o wizerunek firmy, social media, e-sprzedaż, responsywne strony internetowe, analiza strony internetowej, content marketing, media marketing, social media marketing, google ads, pozycjonowanie stron, optymalizacja strony internetowej, usługi pozyskiwania klientów, strategie marketingowe, reklama w Google.</p>
          <h3 className="font-serif md:pt-12 md:mt-12 pt-8 mt-8 leading-tight text-xl md:text-2xl font-semibold border-t">Czy warto wybrać usługi agencji reklamowej biorąc pod uwagę wysokie cenniki agencji marketingowych? Czy obsługa marketingowa firmy musi być droga? </h3>
          <p className="md:text-xl mt-4">Usługi agencji marketingowych nie muszą być drogie. Wszystko zależy kilku czynników. Gdzie znajduje się agencja kreatywna – firma marketingowa z Warszawy będzie prawdopodobnie generowała wyższy koszt prowadzenia działań marketingowych. Internetowa agencja reklamowa z Rzeszowa również może prowadzić skuteczne działania marketingowe, jednak ze względu na niższe koszty utrzymania może pozwolić sobie na nieco niższe koszty za usługi agencji interaktywnej przy jednoczesnym utrzymaniu wysokiej jakości usług. Najlepsze agencje marketingowe w Rzeszowie posiadają odpowiednio wykwalifikowanych fachowców od pozyskiwania klientów i profesjonalistów z obszaru usług marketingowych. </p>
          <h3 className="font-serif md:pt-12 md:mt-12 pt-8 mt-8 leading-tight text-xl md:text-2xl font-semibold border-t">Co lepsze: profesjonalista usług marketingowych czy kompleksowa agencja marketingowa?</h3>
          <p className="md:text-xl mt-4">W zależności od wielkości projektu oraz zakresu działań marketingowych lepiej sprawdzą się freelancerzy i fachowcy w zakresie pozyskiwania klientów, a w innym przypadku dużo lepszym wyborem będzie współpraca z agencją marketingową. Agencja marketingowa to zdecydowanie lepszy wybór w przypadku dużych projektów. W innym wypadku rozwój firmy można powierzyć specjaliście, który działa na własną rękę. Specjalista kampanii marketingowych to również dobry wybór dla firm, które dopiero startują i koszt strategii marketingowej nie może być zbyt wysoki.</p>
        </div>
      </section>

      <section className="">
        <div className="relative flex justify-center">
          <div className="hidden xl:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="bg-black w-16 -top-4 -left-14 h-1 absolute transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="bg-black absolute border-4 border-black w-80 h-40 right-20 -top-24 flex justify-center p-3 flex-col font-serif">
              <h4 className="text-primary font-semibold text-lg">Agencja marketingowa Rzeszów</h4>
              <p className="text-white text-sm">Kolejowa 12/310, 35-073 Rzeszów</p>
            </div>
          </div>
          <iframe className="w-full relative" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.4086440516758!2d22.005846715716544!3d50.041175779420925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473cfbfdd5b9fe33%3A0x7614bec802e05c47!2sAgencja%20marketingowa%20Getpromo!5e0!3m2!1spl!2spl!4v1688138225938!5m2!1spl!2spl" width="800" height="600" loading="lazy"></iframe>
          <div className="absolute inset-0 bg-black opacity-10"></div>
        </div>
      </section>
      <section className="pt-16 pb-8 bg-white">
        <div className="max-w-7xl mx-auto container pb-0 md:pb-12 px-4 text-getDark">
          <h3 className="font-serif leading-tight text-xl md:text-2xl font-semibold">Agencja reklamowa - warto skorzystać?</h3>
          <p className="md:text-xl mt-4">Transformacja cyfrowa spowodowała, że marketing firmy w dużej mierze musi opierać się na działaniach marketingowych w internecie. Zatrudniając agencję marketingową mamy pewność, że powierzamy marketing oraz jej wizerunek firmy fachowcom. W sieci można znaleźć opinie o firmach i upewnić się, czy prowadzi skuteczne działania marketingowe. Agencja komunikacji marketingowej to również nowe spojrzenie na firmę z zewnątrz – daje to świeże i obiektywne spojrzenie na działania marketingowe w firmie.</p>
          <h3 className="font-serif md:pt-12 md:mt-12 pt-8 mt-8 leading-tight text-xl md:text-2xl font-semibold border-t">Agencja marketingowa z Rzeszowa czy agencja marketingowa w innych miejscowościach?</h3>
          <p className="md:text-xl mt-4">Tak jak wspomnieliśmy wcześniej – cennik agencji marketingowych może różnić się między innymi ze względu na położenie agencji marketingowych. Agencja interaktywna Rzeszów to zapewnienie wysokiej jakości usługi agencji przy jednoczesnym obniżeniu kosztów w przeciwieństwie do podobnych firm prowadzących kampanie reklamowe z większych miast. Rzeszów jest miastem, które prężnie się rozwija. Miasto przyciąga coraz więcej specjalistów i fachowców z obszaru marketingu przez co powstaje coraz więcej agencji marketingowych z Rzeszowa. Jak jednak wybrać najlepsze agencje marketingowe w Rzeszowie? Dobrym pomysłem jest sprawdzenie opinii o agencji marketingowej oraz ich realziacji. Dla jednych firm lepsza będzie kompleksowa agencja marketingowa, dla innych organizacji bardziej przydatna będzie agencja marketingowa, której obszar działania jest sprecyzowany np.: pozycjonowanie stron, prowadzenie kampanii reklamowych, reklama w google ads czy projekty graficzne.</p>
          <h4 className="font-serif md:pt-12 md:mt-12 pt-8 mt-8 leading-tight text-xl md:text-2xl font-semibold border-t">Agencja marketingowa Rzeszów – jaki jest koszt prowadzenia działań marketingowych?</h4>
          <p className="md:text-xl mt-4">Współpraca agencja marketingowa nie musi być kosztowna. Wszystko zależy od zakresu obsługi marketingowej firmy. Koszty prowadzenia działań marketingowych zaczynają się już od kilkuset złotych w skali miesiąca. Dużo również zależy od branży, dla której agencja komunikacji marketingowej ma przygotować strategie marketingowe i kampanie reklamowe. Usługi agencji reklamowej zawsze są dopasowywane do potrzeb oraz zdolności klientów.</p>
          <h4 className="font-serif md:pt-12 md:mt-12 pt-8 mt-8 leading-tight text-xl md:text-2xl font-semibold border-t">Agencja interaktywna Rzeszów – usługi pozyskiwania klientów</h4>
          <p className="md:text-xl mt-4">Fachowcy pozyskiwanie klientów rzeszów, czy specjalista pozyskiwanie klientów – takie frazy coraz częściej pojawiają się wsród zapytań w wyszukiwarce Google. Świadczy to o tym, że klienci poszukują skutecznych usług agencji reklamowej a sama agencja marketingowa powinna zwiększać sprzedaż i prowadzić do rozwoju firmy. Nie każda agencja marketingowa w Rzeszowie posiada odpowiednie doświadczenie w skutecznym zwiększaniu sprzedaży i pozyskiwaniu klientów jednak coraz więcej agencji marketingowych z Rzeszowa realizuje duże projekty dla klientów w Rzeszowie, w Polsce i poza granicami kraju. </p>
        </div>
      </section>
      <CtaFooter />
    </>
  );
}
