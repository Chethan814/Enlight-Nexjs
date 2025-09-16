'use client';

import { ReactNode, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import Script from 'next/script';
import Header from '../components/layout-components/Header';
import Footer from '../components/layout-components/Footer';

// Dynamically import components with SSR disabled
const ScrollToTop = dynamic(() => import('../components/common/ScrollToTop'), {
  ssr: false,
});

interface ClientLayoutProps {
  children: ReactNode;
}

const ClientLayout = ({ children }: ClientLayoutProps) => {
  const pathname = usePathname();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="main-wrapper">
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
      
      {/* Global Scripts */}
      <Script src="/assets/js/jquery-3.6.0.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/popper.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/bootstrap.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/slick.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/wow.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/aos.js" strategy="lazyOnload" />
      <Script src="/assets/js/main.js" strategy="lazyOnload" />
    </div>
  );
};

export default ClientLayout;
