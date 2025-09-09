import React from 'react'
import Image from 'next/image'

export default function HeroBanner() {
  return (
    <div className="herobannerarea__content">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="herobannerarea__text">
              <h1>
                Welcome to <span className="text-primary">Enlight Group of Institutions</span>
              </h1>
              <p>
                Explore, Enrich and Evolve with our trusted nursing and paramedical programs. Admission open for 2025-2026!
              </p>
              <a
                href="https://enlight-admission-form.vercel.app"
                className="default__button"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Apply online for admission"
              >
                Apply Online
              </a>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="herobannerarea__img">
              <Image
                src="/assets/img/banner/hero-banner.jpg"
                alt="Enlight Group campus"
                width={500}
                height={350}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}