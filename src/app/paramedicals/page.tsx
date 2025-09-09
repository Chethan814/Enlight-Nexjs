'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Paramedicals() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const AOS = require('aos')
      AOS.init({
        duration: 1000,
        once: true
      })
    }
  }, [])

  return (
    <>
      {/* Page Title Area Start */}
      <div className="pagetitle__area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="pagetitle__content">
                <h3>Paramedical Courses</h3>
                <ul>
                  <li><Link href="/">Home</Link></li>
                  <li><span>Paramedicals</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Title Area End */}

      {/* Paramedical Courses Area Start */}
      <div className="paramedical__area section__padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section__title" data-aos="fade-up">
                <h2>Our Paramedical Programs</h2>
                <p>Quality education in medical technology and allied health sciences</p>
              </div>
            </div>
          </div>

          <div className="row">
            {/* DMLT */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" data-aos="fade-up">
              <div className="paramedical__single">
                <div className="paramedical__single__image">
                  <Image
                    src="/assets/img/courses/dmlt.jpg"
                    alt="DMLT"
                    width={400}
                    height={300}
                    className="img-fluid"
                  />
                  <div className="paramedical__single__image__overlay">
                    <Link href="/paramedicals/dmlt" className="default__button">
                      Learn More
                    </Link>
                  </div>
                </div>
                <div className="paramedical__single__content">
                  <h3>DMLT - Medical Laboratory Technology</h3>
                  <p>Diploma in Medical Laboratory Technology</p>
                  <ul>
                    <li>Duration: 2 Years</li>
                    <li>Eligibility: 10+2 with Science</li>
                    <li>Recognition: PCI</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* DMXT */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="100">
              <div className="paramedical__single">
                <div className="paramedical__single__image">
                  <Image
                    src="/assets/img/courses/dmxt.jpg"
                    alt="DMXT"
                    width={400}
                    height={300}
                    className="img-fluid"
                  />
                  <div className="paramedical__single__image__overlay">
                    <Link href="/paramedicals/dmxt" className="default__button">
                      Learn More
                    </Link>
                  </div>
                </div>
                <div className="paramedical__single__content">
                  <h3>DMXT - Medical Imaging Technology</h3>
                  <p>Diploma in Medical Imaging X-Ray Technology</p>
                  <ul>
                    <li>Duration: 2 Years</li>
                    <li>Eligibility: 10+2 with Science</li>
                    <li>Recognition: PCI</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* DAT */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="200">
              <div className="paramedical__single">
                <div className="paramedical__single__image">
                  <Image
                    src="/assets/img/courses/dat.jpg"
                    alt="DAT"
                    width={400}
                    height={300}
                    className="img-fluid"
                  />
                  <div className="paramedical__single__image__overlay">
                    <Link href="/paramedicals/dat" className="default__button">
                      Learn More
                    </Link>
                  </div>
                </div>
                <div className="paramedical__single__content">
                  <h3>DAT - Medical Anesthesia Technology</h3>
                  <p>Diploma in Medical Anesthesia Technology</p>
                  <ul>
                    <li>Duration: 2 Years</li>
                    <li>Eligibility: 10+2 with Science</li>
                    <li>Recognition: PCI</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Paramedical Courses */}
          <div className="row mt-4">
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12" data-aos="fade-up">
              <div className="paramedical__card">
                <div className="paramedical__card__icon">
                  <i className="icofont-heart-beat"></i>
                </div>
                <h4>Cardiac Care Technology</h4>
                <p>Specialized training in cardiac care and monitoring</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="100">
              <div className="paramedical__card">
                <div className="paramedical__card__icon">
                  <i className="icofont-brain"></i>
                </div>
                <h4>Neuro Technology</h4>
                <p>Advanced neurological diagnostic techniques</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="200">
              <div className="paramedical__card">
                <div className="paramedical__card__icon">
                  <i className="icofont-lungs"></i>
                </div>
                <h4>Respiratory Technology</h4>
                <p>Respiratory care and pulmonary function testing</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="300">
              <div className="paramedical__card">
                <div className="paramedical__card__icon">
                  <i className="icofont-eye"></i>
                </div>
                <h4>Ophthalmic Technology</h4>
                <p>Eye care and ophthalmic diagnostic procedures</p>
              </div>
            </div>
          </div>

          {/* Career Opportunities */}
          <div className="row mt-5">
            <div className="col-xl-12">
              <div className="career__opportunities" data-aos="fade-up">
                <h3>Career Opportunities</h3>
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <div className="career__single">
                      <h4>Hospitals & Clinics</h4>
                      <p>Work in diagnostic laboratories and medical imaging departments</p>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <div className="career__single">
                      <h4>Research Institutes</h4>
                      <p>Contribute to medical research and development</p>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <div className="career__single">
                      <h4>Private Practice</h4>
                      <p>Establish your own diagnostic or imaging center</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Paramedical Courses Area End */}
    </>
  )
}
