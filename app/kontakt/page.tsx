"use client";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "../components/contact_form";
import facebook from "../../public/facebook-green.svg";
import twitter from "../../public/twitter-green.svg";
import linkedin from "../../public/linkedin-white.svg";

export default function Contact() {
  return (
    <>
      <title>Skontaktuj się z nami – Getpromo agencja marketingowa</title>
      <link
        rel="canonical"
        href="https://getpromo.pl/kontakt"
        key="canonical"
      />
      <meta name="title" content="Skontaktuj się z nami – Getpromo agencja marketingowa" />
      <meta name="description" content="Interaktywna agencja marketingowa - zapraszamy do kontaktu i bezpłatnej konsultacji." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://getpromo.pl/" />
      <meta property="og:title" content="Skontaktuj się z nami – Getpromo agencja marketingowa" />
      <meta property="og:description" content="Interaktywna agencja marketingowa - zapraszamy do kontaktu i bezpłatnej konsultacji." />
      <meta property="og:image" content="https://getpromo.pl/cover_contact.jpg" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://getpromo.pl/" />
      <meta property="twitter:title" content="Skontaktuj się z nami – Getpromo agencja marketingowa" />
      <meta property="twitter:description" content="Interaktywna agencja marketingowa - zapraszamy do kontaktu i bezpłatnej konsultacji." />
      <meta property="twitter:image" content="https://getpromo.pl/cover_contact.jpg" />
      <div className="absolute z-20 -mt-72 blur-3xl opacity-10 p-60 h-10 w-10 bg-primary top-0 rounded-full mx-auto left-0 right-0"></div>
      <div className="relative w-full h-full mx-auto pt-[164px] -mt-[164px] bg-getDark">
        <div className="absolute inset-0 w-full h-full bg-center bg-no-repeat bg-[url('/bg_rounded.png')]"></div>
        <div className="container mx-auto py-8 md:py-16 px-4 max-w-6xl">
          <h1 className="text-6xl md:text-7xl max-w-lg font-serif font-semibold text-white">
            Dane kontaktowe
          </h1>
        </div>
      </div>
      <div className="relative w-full bg-getDark">
        <div className="absolute bottom-96 w-full h-full bg-center bg-no-repeat bg-[url('/big_bg_rectangles.png')]"></div>
        <div className=" relative container xs:max-w-[475px] px-5 pt-8 pb-32 mx-auto md:max-w-[768px] lg:max-w-[1200px]">
          <div className="content-between grid-cols-1 grid-rows-2 pb-28 md:grid md:grid-cols-2 lg:grid-cols-3">
            <div className="w-full bg-secondary">
              <a
                className="flex flex-col font-serif items-center justify-center py-28 md:py-32"
                href="tel:+48 571 210 571"
              >
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.9683 54.87C15.0573 54.87 15.1463 54.894 15.2243 54.94C19.6773 57.597 24.7863 59 30.0003 59C45.9903 59 59.0003 45.99 59.0003 30C59.0003 14.009 45.9903 1 30.0003 1C14.0103 1 1.00026 14.009 1.00026 30C1.00026 35.214 2.40426 40.323 5.05926 44.776C5.13026 44.894 5.14926 45.037 5.11126 45.17L1.22826 58.772L14.8313 54.89C14.8763 54.876 14.9223 54.87 14.9683 54.87M0.500257 60C0.369257 60 0.242257 59.948 0.147257 59.853C0.0182571 59.725 -0.030743 59.537 0.019257 59.362L4.09026 45.101C1.41426 40.538 0.00025705 35.321 0.00025705 30C0.00025705 13.458 13.4583 0 30.0003 0C46.5423 0 60.0003 13.458 60.0003 30C60.0003 46.542 46.5423 60 30.0003 60C24.6793 60 19.4623 58.586 14.8993 55.91L0.637257 59.98C0.592257 59.994 0.546257 60 0.500257 60M21.3973 13.123C21.3393 13.123 21.2803 13.124 21.2213 13.127C19.7863 13.187 18.5823 14.009 17.7033 14.609C17.4953 14.751 17.3073 14.879 17.1403 14.981C16.3223 15.469 16.0993 16.959 16.6043 18.529C21.0493 32.339 28.4293 39.878 41.2833 43.739C42.8543 44.207 44.3353 43.941 44.8043 43.097C45.2453 42.324 46.2723 40.53 46.5403 38.88C46.7363 37.679 45.8333 36.313 44.4883 35.772C43.8763 35.526 43.4063 35.318 42.9803 35.129C42.6673 34.991 42.3783 34.863 42.0733 34.738C41.0913 34.333 39.9893 34.876 39.2813 35.517L39.0093 35.767C38.0583 36.652 36.4733 36.677 34.8743 35.827C31.1963 33.873 26.4343 29.528 24.6733 24.605C24.2603 23.449 23.6353 21.701 24.6443 20.546L24.8823 20.269C25.4943 19.551 25.8853 18.305 25.4453 17.313C25.3143 17.02 25.1973 16.711 25.0803 16.399C24.9103 15.951 24.7513 15.526 24.5443 15.143C23.8193 13.802 22.7603 13.123 21.3973 13.123M42.7653 44.968C42.2053 44.968 41.6073 44.88 40.9963 44.696C27.7893 40.73 20.2103 32.996 15.6523 18.835C14.9853 16.761 15.3753 14.869 16.6233 14.126C16.7723 14.034 16.9473 13.915 17.1403 13.783C18.0633 13.152 19.4593 12.2 21.1793 12.128C23.0213 12.059 24.4843 12.93 25.4243 14.668C25.6623 15.11 25.8423 15.586 26.0153 16.047C26.1263 16.339 26.2353 16.63 26.3593 16.906C26.9943 18.341 26.4333 19.991 25.6433 20.918L25.4003 21.199C24.8763 21.8 25.0823 22.779 25.6143 24.268C27.2123 28.732 31.7183 33.018 35.3433 34.944C36.5353 35.577 37.7073 35.612 38.3323 35.032L38.6063 34.78C39.5423 33.93 41.0413 33.228 42.4533 33.813C42.7663 33.941 43.0633 34.072 43.3853 34.215C43.8023 34.4 44.2633 34.604 44.8613 34.845C46.6533 35.565 47.7993 37.369 47.5273 39.04C47.2303 40.869 46.1413 42.773 45.6753 43.587C45.1823 44.476 44.0853 44.968 42.7653 44.968"
                    fill="#ffffff"
                  />
                </svg>
                <p className="flex mt-10 text-3xl font-normal text-white font-serif">
                  <span className="mr-1 font-light">+48</span>571 210 571
                </p>
              </a>
            </div>
            <div className="w-full bg-primary">
              <a
                className="flex flex-col font-serif items-center justify-center py-28 md:py-32"
                href="tel:+48 571 210 571"
              >
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M60 31.16C60 36.222 59.247 39.969 57.631 42.954C55.842 46.257 51.108 50.597 47.227 49.836C44.364 49.265 42.628 46.227 42.066 40.806C42.05 40.645 42.034 40.474 42.019 40.31C42.009 40.346 42.006 40.382 41.988 40.416C39.823 44.63 36.986 46.944 32.197 48.404C31.058 48.751 29.863 48.922 28.649 48.922C25.602 48.922 22.431 47.85 19.693 45.822C15.393 42.637 12.826 37.639 12.826 32.45C12.826 18.837 23.863 13.896 31.282 13.896C36.813 13.896 42.044 16.646 42.044 19.554C42.044 19.83 41.82 20.054 41.544 20.054C41.268 20.054 41.044 19.83 41.044 19.554C41.044 17.501 36.448 14.896 31.282 14.896C24.266 14.896 13.826 19.571 13.826 32.45C13.826 37.323 16.242 42.021 20.288 45.018C23.864 47.667 28.207 48.577 31.906 47.447C36.408 46.075 39.071 43.906 41.1 39.959C41.226 39.712 41.528 39.615 41.772 39.743C41.872 39.794 41.939 39.878 41.985 39.971C41.26 32.438 41.012 22.149 43.634 14.239C43.72 13.976 44.004 13.834 44.266 13.921C44.527 14.008 44.67 14.291 44.583 14.553C41.92 22.589 42.285 33.209 43.061 40.703C43.565 45.568 45.073 48.387 47.422 48.854C50.716 49.506 55.07 45.581 56.752 42.477C58.285 39.644 59 36.049 59 31.16C59 27.225 58.236 23.403 56.73 19.799C55.237 16.313 53.141 13.198 50.501 10.544C47.86 7.889 44.763 5.782 41.294 4.28C37.715 2.767 33.914 2 30 2C26.086 2 22.285 2.767 18.703 4.282C15.237 5.782 12.139 7.89 9.5 10.544C6.859 13.199 4.763 16.313 3.268 19.803C1.764 23.402 1 27.224 1 31.16C1 35.097 1.764 38.919 3.27 42.523C4.763 46.008 6.859 49.123 9.5 51.777C12.14 54.431 15.238 56.539 18.707 58.041C18.96 58.151 19.076 58.445 18.967 58.698C18.885 58.888 18.701 59 18.507 59C18.441 59 18.374 58.987 18.309 58.959C14.724 57.406 11.521 55.227 8.791 52.482C6.061 49.737 3.894 46.517 2.349 42.913C0.79 39.182 0 35.229 0 31.16C0 27.091 0.79 23.139 2.347 19.413C3.894 15.803 6.061 12.583 8.791 9.839C11.52 7.095 14.722 4.915 18.309 3.362C22.02 1.794 25.952 1 30 1C34.048 1 37.98 1.794 41.687 3.361C45.277 4.915 48.479 7.094 51.21 9.839C53.939 12.583 56.106 15.803 57.651 19.409C59.21 23.14 60 27.093 60 31.16"
                    fill="#0A0D16"
                  />
                </svg>
                <p className="flex mt-10 text-3xl font-normal text-grayText font-serif">
                  kontakt<span className="font-light">@</span>getpromo.com
                </p>
              </a>
            </div>

            <div className="hidden w-full md:grid lg:col-start-2">
              <div className="grid grid-cols-3 bg-getDark">
                <Link href="https://www.facebook.com/GetpromoMarketing" target="_blank">
                  <div className="bg-black border-gray-800 border-[1px] w-32 h-32 flex items-center justify-center">
                    <Image src={facebook} alt="Facebook" className="" />
                  </div>
                </Link>
                <Link href="https://twitter.com/GetpromoReklama" target="_blank">
                  <div className="bg-white w-32 h-32 flex items-center justify-center">
                    <Image src={twitter} alt="Twitter" className="" />
                  </div>
                </Link>
                <Link href="https://www.linkedin.com/company/getpromo/" target="_blank">
                  <div className="bg-black border-gray-800 border-[1px] w-32 h-32 flex items-center justify-center">
                    <Image src={linkedin} alt="Linkedin" className="" />
                  </div>
                </Link>
              </div>
            </div>
            <div className="w-full bg-white lg:col-start-3">
              <a
                className="flex flex-col items-center justify-center text-center py-28 md:py-32 "
                href="https://goo.gl/maps/NUh3izCryuv96VoQA"
                target="_blank"
              >
                <svg
                  width="60"
                  height="61"
                  viewBox="0 0 60 61"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M37.4619 18.442C37.4619 22.561 34.1139 25.913 29.9999 25.913C25.8849 25.913 22.5379 22.561 22.5379 18.442C22.5379 14.322 25.8849 10.971 29.9999 10.971C34.1139 10.971 37.4619 14.322 37.4619 18.442V18.442ZM38.4619 18.442C38.4619 13.771 34.6659 9.97105 29.9999 9.97105C25.3339 9.97105 21.5379 13.771 21.5379 18.442C21.5379 23.113 25.3339 26.913 29.9999 26.913C34.6659 26.913 38.4619 23.113 38.4619 18.442V18.442ZM47.0179 19.035C47.0179 30.348 32.4709 46.025 29.9989 48.607C27.5229 46.033 12.9609 30.415 12.9829 19.035C12.9829 9.64105 20.6169 1.99805 29.9999 1.99805C39.3839 1.99805 47.0179 9.64105 47.0179 19.035V19.035ZM30.3549 49.677C31.0759 48.95 48.0179 31.749 48.0179 19.035C48.0179 9.08905 39.9349 0.998047 29.9999 0.998047C20.0659 0.998047 11.9829 9.08905 11.9829 19.034C11.9579 31.823 28.9239 48.954 29.6469 49.678L30.0009 50.032L30.3549 49.677ZM59.4999 60.998C59.4239 60.998 59.3469 60.981 59.2759 60.945L44.0959 53.347L30.2029 59.511C30.0739 59.567 29.9259 59.567 29.7969 59.511L15.9039 53.347L0.723937 60.945C0.556937 61.028 0.357937 61.012 0.207937 60.903C0.0569373 60.795 -0.0210627 60.611 0.0049373 60.428L5.13494 24.475C5.16994 24.229 5.38094 24.046 5.62994 24.046H8.19594C8.47194 24.046 8.69594 24.269 8.69594 24.546C8.69594 24.822 8.47194 25.046 8.19594 25.046H6.06394L1.12994 59.624L15.6679 52.347C15.8009 52.28 15.9579 52.277 16.0939 52.337L29.9999 58.507L43.9049 52.337C44.0439 52.277 44.1979 52.28 44.3319 52.347L58.8699 59.624L53.9359 25.046H51.8049C51.5279 25.046 51.3049 24.822 51.3049 24.546C51.3049 24.269 51.5279 24.046 51.8049 24.046H54.3689C54.6179 24.046 54.8289 24.229 54.8639 24.475L59.9949 60.428C60.0219 60.611 59.9429 60.795 59.7919 60.903C59.7049 60.966 59.6029 60.998 59.4999 60.998V60.998Z"
                    fill="#0A0D16"
                  />
                </svg>
                <div className="flex flex-col text-3xl font-normal font-serif text-grayText">
                  <p className="mt-10">ul. Kolejowa 12 / 310</p>
                  <p className="">35-073 Rzeszów</p>
                </div>
              </a>
            </div>
            <div className="md:hidden">
              <div className="grid grid-cols-3 bg-secondary">
                {/* <SocialLinksContacts /> */}
              </div>
            </div>
          </div>
          <div className="grid-cols-2 pt-8 pb-16 md:grid">
            <h2 className="font-semibold text-center text-white font-serif md:text-left text-7xl">
              Zapytaj nas o ofertę!
            </h2>
          </div>
          <ContactForm
          />
        </div>
      </div>
    </>
  );
}
