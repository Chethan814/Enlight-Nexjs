'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Nursing() {
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
                <h3>Nursing Courses</h3>
                <ul>
                  <li><Link href="/">Home</Link></li>
                  <li><span>Nursing</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Title Area End */}

      {/* Nursing Courses Area Start */}
      <div className="nursing__area section__padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section__title" data-aos="fade-up">
                <h2>Our Nursing Programs</h2>
                <p>Recognized by INC & KNC, PCI, Affiliated to RGUHS</p>
              </div>
            </div>
          </div>

          <div className="row">
            {/* BSc Nursing */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" data-aos="fade-up">
              <div className="nursing__single">
                <div className="nursing__single__image">
                  <Image
                    src="/assets/img/courses/nursing-bsc.jpg"
                    alt="BSc Nursing"
                    width={400}
                    height={300}
                    className="img-fluid"
                  />
                  <div className="nursing__single__image__overlay">
                    <Link href="/nursing/bsc-nursing" className="default__button">
                      Learn More
                    </Link>
                  </div>
                </div>
                <div className="nursing__single__content">
                  <h3>BSc Nursing</h3>
                  <p>4-year undergraduate program in nursing science</p>
                  <ul>
                    <li>Duration: 4 Years</li>
                    <li>Eligibility: 10+2 with Science</li>
                    <li>Recognition: INC & KNC</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* GNM Nursing */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="100">
              <div className="nursing__single">
                <div className="nursing__single__image">
                  <Image
                    src="/assets/img/courses/nursing-gnm.jpg"
                    alt="GNM Nursing"
                    width={400}
                    height={300}
                    className="img-fluid"
                  />
                  <div className="nursing__single__image__overlay">
                    <Link href="/nursing/gnm-nursing" className="default__button">
                      Learn More
                    </Link>
                  </div>
                </div>
                <div className="nursing__single__content">
                  <h3>GNM Nursing</h3>
                  <p>3-year diploma in general nursing and midwifery</p>
                  <ul>
                    <li>Duration: 3 Years</li>
                    <li>Eligibility: 10+2 with Science</li>
                    <li>Recognition: INC & KNC</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* MSc Nursing */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="200">
              <div className="nursing__single">
                <div className="nursing__single__image">
                  <Image
                    src="/assets/img/courses/nursing-msc.jpg"
                    alt="MSc Nursing"
                    width={400}
                    height={300}
                    className="img-fluid"
                  />
                  <div className="nursing__single__image__overlay">
                    <Link href="/nursing/msc-nursing" className="default__button">
                      Learn More
                    </Link>
                  </div>
                </div>
                <div className="nursing__single__content">
                  <h3>MSc Nursing</h3>
                  <p>2-year postgraduate program in nursing</p>
                  <ul>
                    <li>Duration: 2 Years</li>
                    <li>Eligibility: BSc Nursing</li>
                    <li>Recognition: INC & KNC</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Our Nursing Program */}
          <div className="row mt-5">
            <div className="col-xl-12">
              <div className="nursing__features" data-aos="fade-up">
                <h3>Why Choose Our Nursing Programs?</h3>
                <div className="row">
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                    <div className="feature__single">
                      <i className="icofont-medical-sign"></i>
                      <h4>Expert Faculty</h4>
                      <p>Experienced nursing professionals and educators</p>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                    <div className="feature__single">
                      <i className="icofont-hospital"></i>
                      <h4>Clinical Training</h4>
                      <p>Hands-on experience in reputed hospitals</p>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                    <div className="feature__single">
                      <i className="icofont-certificate"></i>
                      <h4>Recognized Programs</h4>
                      <p>All courses approved by regulatory bodies</p>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                    <div className="feature__single">
                      <i className="icofont-users"></i>
                      <h4>Placement Support</h4>
                      <p>Career guidance and placement assistance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Nursing Courses Area End */}
    </>
  )
}
