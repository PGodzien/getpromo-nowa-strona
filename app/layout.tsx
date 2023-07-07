import './globals.css';
import localFont from '@next/font/local';
import NavBar from './components/nav';
import Footer from './components/footer';

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
      path: '../public/font/ClashGrotesk-Regular.eot',
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
      path: '../public/font/ClashGrotesk-Bold.eot',
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
      path: '../public/font/ClashGrotesk-Semibold.eot',
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
      path: '../public/font/ClashGrotesk-Medium.eot',
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
    {
      path: '../public/font/ClashGrotesk-Light.eot',
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
  title: 'Getpromo Agencja Marketingowa - Strony Internetowe',
  description: 'Pozycjonowanie stron internetowych, kampanie marketingowe Google i Facebook Ads, SEO/SEM. Tworzymy kampanie, które generują wyniki i zwiększają sprzedaż.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl" className={`${archivo.variable} ${clash.variable} ${clashGrotesk.variable} ${inter.variable} ${"scroll-smooth"} `} style={{scrollBehavior:'smooth'}}>
      <body className="bg-getDark">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
