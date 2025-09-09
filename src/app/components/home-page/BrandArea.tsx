'use client';

import React from 'react';
import Image from 'next/image';

const partners = [
  { img: "/assets/img/brand/partner-1.png", alt: "Healthcare partner organization 1" },
  { img: "/assets/img/brand/partner-2.png", alt: "Healthcare partner organization 2" },
  { img: "/assets/img/brand/partner-3.png", alt: "Healthcare partner organization 3" },
  { img: "/assets/img/brand/partner-4.png", alt: "Healthcare partner organization 4" },
  { img: "/assets/img/brand/partner-5.png", alt: "Healthcare partner organization 5" },
  { img: "/assets/img/brand/partner-6.png", alt: "Healthcare partner organization 6" },
  { img: "/assets/img/brand/partner-7.png", alt: "Healthcare partner organization 7" },
  { img: "/assets/img/brand/partner-8.png", alt: "Healthcare partner organization 8" },
  { img: "/assets/img/brand/partner-9.png", alt: "Healthcare partner organization 9" },
  { img: "/assets/img/brand/partner-10.png", alt: "Healthcare partner organization 10" },
  { img: "/assets/img/brand/partner-11.png", alt: "Healthcare partner organization 11" },
  { img: "/assets/img/brand/partner-12.png", alt: "Healthcare partner organization 12" },
  { img: "/assets/img/brand/partner-13.png", alt: "Healthcare partner organization 13" },
  { img: "/assets/img/brand/partner-14.png", alt: "Healthcare partner organization 14" },
  { img: "/assets/img/brand/partner-15.png", alt: "Healthcare partner organization 15" },
];

const BrandArea = () => {
  return (
    <section className="my-40 bg-gray-50" style={{padding: '3rem 0 5rem 0 ', minHeight: '480px'}}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
            Our <span className="text-primary">Partners</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Recognized and affiliated with leading healthcare organizations
          </p>
        </div>

        <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12" >
          {partners.map((partner, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-lg p-4 flex items-center justify-center h-32 shadow-sm hover:shadow-md transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={idx * 50}
            >
              <div className="relative w-full h-full">
                <Image
                  src={partner.img}
                  alt={partner.alt}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33.33vw, 20vw"
                  priority={idx < 5} // Only load first 5 images with priority
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .section-subtitle {
          color: #3b82f6;
          font-size: 1.125rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: inline-block;
          margin-bottom: 0.75rem;
          position: relative;
        }

        .section-subtitle::after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: -8px;
          transform: translateX(-50%);
          width: 40px;
          height: 2px;
          background: #3b82f6;
          border-radius: 2px;
        }

        /* Animation */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        [data-aos="fade-up"] {
          opacity: 0;
          transition-property: opacity, transform;
        }

        [data-aos="fade-up"].aos-animate {
          opacity: 1;
          animation: fadeInUp 0.6s ease forwards;
        }
      `}</style>
    </section>
  );
};

export default BrandArea;