'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import '../../../../public/assets/css/aos.min.css';

const BrandSection = () => {
  // Partner data
  const partners = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    src: `/assets/img/brand/partner-${i + 1}.png`,
    alt: `Partner ${i + 1}`
  }));

  // Initialize AOS on component mount
  useEffect(() => {
    const initAos = async () => {
      if (typeof window !== 'undefined') {
        const AOS = (await import('aos')).default;
        AOS.init({
          duration: 1000,
          easing: 'ease-in-out',
          once: true,
          mirror: false
        });
      }
    };
    
    initAos();
    
    // Refresh AOS on resize
    const handleResize = () => {
      if (typeof window !== 'undefined' && window.AOS) {
        window.AOS.refresh();
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (typeof window !== 'undefined' && window.AOS) {
        window.AOS.refreshHard();
      }
    };
  }, []);

  return (
    <section className="brand-area pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <h2>Our Trusted Partners</h2>
          <p>We are proud to be associated with leading organizations in the industry</p>
        </div>
        
        <div className="row">
          {partners.map((partner) => (
            <div 
              key={partner.id} 
              className="col-lg-2 col-md-3 col-6"
              data-aos="fade-up"
              data-aos-delay={partner.id * 50}
            >
              <div className="single-brand">
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={150}
                  height={80}
                  className="img-fluid"
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSection;