import './globals.css';
import localFont from '@next/font/local';
import NavBar from './components/nav';
import Footer from './components/footer';
import Script from 'next/script';
const GTM_ID = 'GTM-KGZT6KS';

const clashGrotesk = localFont({
  src: [
    {
      path: '../public/font/ClashGrotesk-Regular.ttf',
      weight: '400'
    },
    {
      path: '../public/font/ClashGrotesk-Regular.woff',
      weight: '400'
    },
    {
      path: '../public/font/ClashGrotesk-Regular.woff2',
      weight: '400'
    },
    {
      path: '../public/font/ClashGrotesk-Bold.ttf',
      weight: '700'
    },
    {
      path: '../public/font/ClashGrotesk-Bold.woff',
      weight: '700'
    },
    {
      path: '../public/font/ClashGrotesk-Bold.woff2',
      weight: '700'
    },
    {
      path: '../public/font/ClashGrotesk-Semibold.ttf',
      weight: '600'
    },
    {
      path: '../public/font/ClashGrotesk-Semibold.woff',
      weight: '600'
    },
    {
      path: '../public/font/ClashGrotesk-Semibold.woff2',
      weight: '600'
    },
    {
      path: '../public/font/ClashGrotesk-Medium.ttf',
      weight: '500'
    },
    {
      path: '../public/font/ClashGrotesk-Medium.woff',
      weight: '500'
    },
    {
      path: '../public/font/ClashGrotesk-Medium.woff2',
      weight: '500'
    },
    {
      path: '../public/font/ClashGrotesk-Light.ttf',
      weight: '300'
    },
    {
      path: '../public/font/ClashGrotesk-Light.woff',
      weight: '300'
    },
    {
      path: '../public/font/ClashGrotesk-Light.woff2',
      weight: '300'
    },
  ],
  variable: '--font-clashGrotesk'
})

const clash = localFont({
  src: [
    {
      path: '../public/font/ClashDisplay-Regular.ttf',
      weight: '400'
    },
    {
      path: '../public/font/ClashDisplay-Regular.woff',
      weight: '400'
    },
    {
      path: '../public/font/ClashDisplay-Regular.woff2',
      weight: '400'
    },
    {
      path: '../public/font/ClashDisplay-Bold.ttf',
      weight: '700'
    },
    {
      path: '../public/font/ClashDisplay-Bold.woff',
      weight: '700'
    },
    {
      path: '../public/font/ClashDisplay-Bold.woff2',
      weight: '700'
    },
    {
      path: '../public/font/ClashDisplay-Semibold.ttf',
      weight: '600'
    },
    {
      path: '../public/font/ClashDisplay-Semibold.woff',
      weight: '600'
    },
    {
      path: '../public/font/ClashDisplay-Semibold.woff2',
      weight: '600'
    },
    {
      path: '../public/font/ClashDisplay-Medium.ttf',
      weight: '500'
    },
    {
      path: '../public/font/ClashDisplay-Medium.woff',
      weight: '500'
    },
    {
      path: '../public/font/ClashDisplay-Medium.woff2',
      weight: '500'
    },
    {
      path: '../public/font/ClashDisplay-Light.ttf',
      weight: '300'
    },
    {
      path: '../public/font/ClashDisplay-Light.woff',
      weight: '300'
    },
    {
      path: '../public/font/ClashDisplay-Light.woff2',
      weight: '300'
    },
  ],
  variable: '--font-clash'
})

const archivo = localFont({
  src: [
    {
      path: '../public/font/Archivo-Italic-VariableFont_wdth,wght.ttf',
      weight: '400'
    },
    {
      path: '../public/font/Archivo-VariableFont_wdth,wght.ttf',
      weight: '400'
    },
  ],
  variable: '--font-archivo'
})

const inter = localFont({
  src: [
    {
      path: '../public/font/Inter-VariableFont_slnt,wght.ttf',
      weight: '400'
    },
  ],
  variable: '--font-inter'
});

export const metadata = {
  title: {
    template: '%s | Getpromo Agencja Marketingowa',
    default: 'Getpromo - Agencja MArketingowa | Strony Internetowe',
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
    <html lang="pl" className={`${archivo.variable} ${clash.variable} ${clashGrotesk.variable} ${inter.variable} ${"scroll-smooth"} `} style={{ scrollBehavior: 'smooth' }}>
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
