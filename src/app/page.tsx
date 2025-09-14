'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import HeroBanner from './components/home-page/HeroBanner'
import NewsNotices from './components/home-page/NewsNotices'
import Institutes from './components/home-page/Institutes'
import CoursesSlider from './components/home-page/CoursesSlider'
import Facilities from './components/home-page/Facilities'
import CounterArea from './components/home-page/CounterArea'
import CoursesArea from './components/home-page/CoursesArea'
import TestimonialArea from './components/home-page/TestimonialArea'
import BrandArea from './components/home-page/BrandArea'

export default function Home() {
  const [isClient, setIsClient] = useState(false)
  const [mounted, setMounted] = useState(false)
  const swiperRef = useRef(null)
  const swiperThumbsRef = useRef(null)

  useEffect(() => {
    setMounted(true)
    setIsClient(true)

    // Initialize AOS animations
    if (typeof window !== 'undefined') {
      import('aos').then((AOS) => {
        AOS.default.init({
          duration: 1000,
          once: true,
          offset: 100
        })
      })

      // Initialize Swiper after component mounts
      const initSwiper = async () => {
        try {
          const Swiper = (await import('swiper')).default
          const { Navigation, Pagination, Thumbs, Autoplay } = await import('swiper/modules')

          // Initialize thumbs slider first
          let thumbsSwiper = null
          if (swiperThumbsRef.current) {
            thumbsSwiper = new Swiper(swiperThumbsRef.current, {
              modules: [Navigation, Thumbs],
              spaceBetween: 10,
              slidesPerView: 3,
              freeMode: true,
              watchSlidesProgress: true,
              breakpoints: {
                320: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 3,
                },
              },
            })
          }

          // Initialize main slider with thumbs
          if (swiperRef.current) {
            new Swiper(swiperRef.current, {
              modules: [Navigation, Pagination, Autoplay, Thumbs],
              slidesPerView: 1,
              spaceBetween: 0,
              loop: true,
              autoplay: {
                delay: 5000,
                disableOnInteraction: false,
              },
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
              pagination: {
                el: '.swiper-pagination',
                clickable: true,
              },
              thumbs: {
                swiper: thumbsSwiper,
              },
            })
          }
        } catch (error) {
          console.log('Swiper not available, using fallback slider')
        }
      }

      initSwiper()
    }
  }, [])

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return null
  }

  return (
    <>
      {/* herobannerarea__section__start */}
      <div className="herobannerarea__section min-h-fit h-auto py-8 ">
        <HeroBanner />
      </div>
      {/* herobannerarea__section__end */}

      {/* animate content start (not split yet) */}
      <div className="animate__content sp_bottom_40 sp_top_40">
        <div className="container-fluid full__width__padding">
          <div className="animate__content__wrap">
            <div className="animate__content__single">
              <span>ADMISSION OPEN FOR SESSION 2025 - 2026 - Enlight Educational Trust is committed to
                excellence in education that meets the expectations of the students aspiring for enriching
                academic and professional careers.</span>
            </div>
            <div className="animate__content__single animate__content__single--2">
              <span> <a target="_blank" href="https://enlight-admission-form.vercel.app">Apply Online</a></span>
            </div>
            <div className="animate__content__single">
              <span>ADMISSION OPEN FOR SESSION 2024 - 2025 - Enlight Educational Trust is committed to
                excellence in education that meets the expectations of the students aspiring for enriching
                academic and professional careers.</span>
            </div>
            <div className="animate__content__single animate__content__single--2">
              <span> <a target="_blank" rel="noopener noreferrer" href="https://enlight-admission-form.vercel.app" aria-label="Apply online for admission">Apply Online</a></span>
            </div>
          </div>
        </div>
      </div>
      {/* Animate Content End */}

      {/* About Area Section Start (not split yet) */}
      <div className="aboutarea__2 sp_top_100">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12" {...(isClient ? { 'data-aos': 'fade-up' } : {})}>
              <div className="about__right__wraper__2">
                <div className="educationarea__img" data-tilt>
                  <Image loading="lazy" className="aboutarea__2__img__1" src="/assets/img/about/institute-1.jpg" alt="Enlight Institute building" width={300} height={200} />
                  <Image loading="lazy" className="aboutarea__2__img__2" src="/assets/img/about/institute-2.jpg" alt="Campus view" width={250} height={180} />
                  <Image loading="lazy" className="aboutarea__2__img__3" src="/assets/img/about/about_4.png" alt="Students studying" width={280} height={190} />
                  <Image loading="lazy" className="aboutarea__2__img__4" src="/assets/img/about/about_11.png" alt="Campus facilities" width={320} height={210} />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12" {...(isClient ? { 'data-aos': 'fade-up' } : {})}>
              <div className="aboutarea__content__wraper">
                <div className="aboutarea__button">
                  <div className="default__small__button">About Us</div>
                </div>
                <div className="aboutarea__headding heading__underline">
                  <h2>Reliable & Trusted Institutions</h2>
                </div>
                <div className="aboutarea__para aboutarea__para__2">
                  <p>The Enlight Group Of Institutions Is Located In A Sprawling Green Campus Which Is
                    Spread Over 2 Acres Of Land With Great Ambience And Is Easily Accessible By Road,
                    Rail, Metro And Air. The Institution Is Built With The State Of The Art
                    Infrastructure Creating A Favorable Environment To Explore Higher Learning,
                    Enriching Personal Growth And Evolving As Better Versions Of Oneself. Thus The
                    Tagline Of Enlight Group Of Institutions – Explore, Enrich And Evolve...</p>
                </div>
                <div>
                  <a title="Know more about us" className="default__button" href="/AboutElgi" aria-label="Learn more about Enlight Group of Institutions">Know More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About Area Section End */}

      {/* Split components below */}
      <NewsNotices isClient={isClient} />
      <Institutes isClient={isClient} />
      <CoursesSlider isClient={isClient} />
      <Facilities isClient={isClient} />
      <CounterArea isClient={isClient} />
      <CoursesArea />
      <TestimonialArea />
      <BrandArea />
      
    </>
  )
}
