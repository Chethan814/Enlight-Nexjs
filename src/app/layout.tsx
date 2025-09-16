import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import ClientLayout from './ClientLayout';
import '../../public/assets/css/style.css'
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import 'swiper/css/bundle';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Enlight Group of Institutions - Nursing & Paramedical Education',
  description: 'Enlight Group of Institutions - Leading provider of Nursing and Paramedical education with direct admission opportunities.',
  keywords: 'nursing admission, paramedical courses, BSc nursing, GNM, medical laboratory technology, medical imaging, medical anesthesia technology, direct admission, healthcare education',
  authors: [{ name: 'Enlight Group of Institutions' }],
  metadataBase: new URL('https://enlight.eduwego.in'),
  openGraph: {
    title: 'Enlight Group of Institutions - Nursing & Paramedical Education',
    description: 'Direct admission for Nursing and Paramedical courses. BSc Nursing, GNM, Medical Laboratory Technology, Medical Imaging, and more.',
    type: 'website',
    locale: 'en_US',
    url: 'https://enlight.eduwego.in/',
    images: ['/assets/img/logo/enlight-group-logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" />
        <Script 
          id="aos-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('DOMContentLoaded', function() {
                AOS.init({
                  duration: 800,
                  easing: 'ease-in-out',
                  once: true,
                  mirror: false
                });
              });
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
