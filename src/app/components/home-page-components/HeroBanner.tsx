'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import 'aos/dist/aos.css';

interface Slide {
  id: number;
  bgImage: string;
  thumb: string;
  title: string;
  highlight1?: string;
  highlight2?: string;
  highlight3?: string;
}

interface CustomWindow extends Window {
  jQuery?: any;
  AOS?: {
    init: (config: any) => void;
  };
  Swiper?: any;
}

declare const window: CustomWindow;

const HeroBanner = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  // Slides data
  const slides: Slide[] = [
    {
      id: 0,
      bgImage: '/assets/img/1-updated-images/Hero-Section/Hero-section-slider-1.jpg',
      thumb: '/assets/img/herobanner/bg-1.jpg',
      title: 'Direct Admission For Nursing',
      highlight1: 'and',
      highlight2: 'Paramedical'
    },
    {
      id: 1,
      bgImage: '/assets/img/1-updated-images/Hero-Section/Hero-section-slider-2.jpg',
      thumb: '/assets/img/herobanner/bg-2.jpg',
      title: 'Direct Nursing Admission For',
      highlight1: 'B.Sc. Nursing',
      highlight2: 'GNM',
      highlight3: 'Courses Eligibility'
    },
    {
      id: 2,
      bgImage: '/assets/img/1-updated-images/Hero-Section/Hero-section-slider-3.jpg',
      thumb: '/assets/img/herobanner/bg-3.jpg',
      title: 'Direct Admission For Nursing',
      highlight1: 'and',
      highlight2: 'Paramedical'
    }
  ];

  useEffect(() => {
    // Check if running on client side
    if (typeof window === 'undefined') return;

    // Load required scripts
    const loadScripts = async () => {
      try {
        // Load jQuery
        await loadScript('/assets/js/vendor/jquery-3.6.0.min.js');
        
        // Load Swiper and other plugins
        await Promise.all([
          loadScript('/assets/js/plugins.js'),
          loadScript('/assets/js/main.js')
        ]);

        // Initialize slider
        initSlider();
      } catch (error) {
        console.error('Error loading scripts:', error);
      }
    };

    loadScripts();

    // Cleanup function
    return () => {
      if (sliderRef.current?.swiper) {
        sliderRef.current.swiper.destroy();
      }
    };
  }, []);

  const loadScript = (src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (document.querySelector(`script[src="${src}"]`)) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.onload = () => resolve();
      script.onerror = (error) => reject(new Error(`Failed to load script: ${src}`));
      document.body.appendChild(script);
    });
  };

  const initSlider = () => {
    if (!window.Swiper || !window.jQuery) {
      console.warn('Swiper or jQuery not available');
      return;
    }

    // Initialize AOS
    if (window.AOS) {
      window.AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
      });
    }

    // Initialize Swiper
    try {
      const slider = new window.Swiper(sliderRef.current, {
        effect: 'fade',
        loop: true,
        speed: 1000,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        on: {
          slideChange: (swiper: any) => {
            setActiveSlide(swiper.realIndex);
          },
        },
      });

      // Store swiper instance for cleanup
      if (sliderRef.current) {
        (sliderRef.current as any).swiper = slider;
      }
    } catch (error) {
      console.error('Error initializing Swiper:', error);
    }
  };

  return (
    <div className="herobannerarea herobannerarea__2 herobannerarea__university">
      {/* Main Slider */}
      <div 
        className="university__slider" 
        ref={sliderRef}
        style={{ position: 'relative' }}
      >
        <div className="herobannerarea__slider__wrap swiper-wrapper">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="swiper-slide herobannerarea__single__slider"
              style={{ 
                backgroundImage: `url(${slide.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '80vh',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12 col-12" data-aos="fade-up">
                    <div className="herobannerarea__content__wraper text-center">
                      <div className="herobannerarea__title">
                        <div className="herobannerarea__small__title">
                          <span>Welcome to Enlight Group of Institutions</span>
                        </div>
                        <div className="herobannerarea__title__heading__2 herobannerarea__title__heading__3">
                          <h2>
                            {slide.title}{' '}
                            {slide.highlight1 && <span>{slide.highlight1}</span>}{' '}
                            {slide.highlight2 && <span>{slide.highlight2}</span>}
                            {slide.highlight3 && <span>{slide.highlight3}</span>}
                          </h2>
                        </div>
                      </div>
                      <div className="hreobannerarea__button__2">
                        <a 
                          className="default__button" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          href="https://enlight-enquiry-form.vercel.app"
                        >
                          Enquiry Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation and Pagination */}
        <div className="slider__controls__wrap slider__controls__pagination slider__controls__arrows">
            <div className="swiper-button-next arrow-btn"></div>
            <div className="swiper-button-prev arrow-btn"></div>
            <div className="swiper-pagination"></div>
        </div>
      </div>

      {/* Static Thumbnails - Positioned below the slider */}
      <div className="thumbnails-container">
        <div className="university__slider__thumb">
          <div className="thumbnails-wrapper">
            {slides.map((slide, index) => (
              <div 
                key={`thumb-${slide.id}`} 
                className={`thumbnail-item ${activeSlide === index ? 'active' : ''}`}
                onClick={() => {
                  if (sliderRef.current?.swiper) {
                    sliderRef.current.swiper.slideToLoop(index);
                  }
                }}
              >
                <Image
                  src={slide.thumb}
                  alt={`Thumbnail ${slide.id + 1}`}
                  width={100}
                  height={60}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* Global styles for the hero banner */
        .herobannerarea {
          position: relative;
          width: 100%;
          overflow: hidden;
        }
        
        .university__slider {
          position: relative;
          width: 100%;
        }
        
        .herobannerarea__slider__wrap {
          position: relative;
          width: 100%;
          z-index: 1;
        }
        
        .herobannerarea__single__slider {
          position: relative;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        
        /* Thumbnails container */
        .thumbnails-container {
          position: relative;
          width: 100%;
          max-width: 1200px;
          margin: -40px auto 30px;
          padding: 0 15px;
          z-index: 10;
        }
        
        .thumbnails-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 15px;
          padding: 10px 0;
        }
        
        .thumbnail-item {
          position: relative;
          width: 100px;
          height: 60px;
          border-radius: 4px;
          overflow: hidden;
          cursor: pointer;
          opacity: 0.6;
          transition: all 0.3s ease;
          border: 2px solid transparent;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        .thumbnail-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        
        .thumbnail-item.active {
          opacity: 1;
          border-color: #ff6b6b;
          transform: translateY(-5px);
        }
        
        .thumbnail-item:hover {
          opacity: 1;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }
        
        .thumbnail-item::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.3);
          transition: opacity 0.3s ease;
        }
        
        .thumbnail-item.active::after,
        .thumbnail-item:hover::after {
          opacity: 0;
        }
        
        /* Responsive styles */
        @media (max-width: 992px) {
          .herobannerarea__single__slider {
            min-height: 60vh;
          }
          
          .thumbnails-container {
            margin-top: -30px;
          }
          
          .thumbnail-item {
            width: 80px;
            height: 50px;
          }
        }
        
        @media (max-width: 768px) {
          .herobannerarea__single__slider {
            min-height: 50vh;
          }
          
          .thumbnails-container {
            margin-top: -20px;
            padding: 0 10px;
          }
          
          .thumbnails-wrapper {
            gap: 8px;
          }
          
          .thumbnail-item {
            width: 60px;
            height: 40px;
          }
          
          
        }
        
        @media (max-width: 576px) {
          .herobannerarea__single__slider {
            min-height: 40vh;
          }
          
          .thumbnails-container {
            margin-top: -15px;
          }
          
          .thumbnail-item {
            width: 50px;
            height: 30px;
          }
          
          
        }
      `}</style>
    </div>
  );
};

export default HeroBanner;