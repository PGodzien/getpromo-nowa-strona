import './globals.css';
import localFont from "next/font/local";
import NavBar from '../components/nav';
import Footer from '../components/footer';
import Script from 'next/script';
const GTM_ID = 'GTM-KGZT6KS';

const clash = localFont({
  src: [
    {
      path: '../public/font/clash-display/ClashDisplay-Regular.ttf',
      weight: '400'
    },
    {
      path: '../public/font/clash-display/ClashDisplay-Regular.woff',
      weight: '400'
    },
    {
      path: '../public/font/clash-display/ClashDisplay-Regular.woff2',
      weight: '400'
    },
    {
      path: '../public/font/clash-display/ClashDisplay-Bold.ttf',
      weight: '700'
    },
    {
      path: '../public/font/clash-display/ClashDisplay-Bold.woff',
      weight: '700'
    },
    {
      path: '../public/font/clash-display/ClashDisplay-Bold.woff2',
      weight: '700'
    },
    {
      path: '../public/font/clash-display/ClashDisplay-Semibold.ttf',
      weight: '600'
    },
    {
      path: '../public/font/clash-display/ClashDisplay-Semibold.woff',
      weight: '600'
    },
    {
      path: '../public/font/clash-display/ClashDisplay-Semibold.woff2',
      weight: '600'
    },
    {
      path: '../public/font/clash-display/ClashDisplay-Medium.ttf',
      weight: '500'
    },
    {
      path: '../public/font/clash-display/ClashDisplay-Medium.woff',
      weight: '500'
    },
    {
      path: '../public/font/clash-display/ClashDisplay-Medium.woff2',
      weight: '500'
    },
    {
      path: '../public/font/clash-display/ClashDisplay-Light.ttf',
      weight: '300'
    },
    {
      path: '../public/font/clash-display/ClashDisplay-Light.woff',
      weight: '300'
    },
    {
      path: '../public/font/clash-display/ClashDisplay-Light.woff2',
      weight: '300'
    },
  ],
  variable: '--font-clash'
})

const inter = localFont({
  src: [
    {
      path: '../public/font/Inter-VariableFont_slnt,wght.ttf',
    },
  ],
  variable: '--font-inter'
});

export const metadata = {
  title: {
    template: '%s | Getpromo Agencja Marketingowa',
    default: 'Getpromo - Agencja Marketingowa | Strony Internetowe',
  },
  description: {
    template: '%s',
    default: 'Pozycjonowanie stron internetowych, kampanie marketingowe Google i Facebook Ads, SEO/SEM. Tworzymy kampanie, które generują wyniki i zwiększają sprzedaż.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="pl" className={`${clash.variable} ${inter.variable}`}>

      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>
      <body className="bg-getDark">
        <NavBar />
        {children}
        <Footer />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
          }}
        />
      </body>
    </html>
  )
}
