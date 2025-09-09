'use client'

import { useEffect } from 'react'
import Image from 'next/image'

export default function AboutElgi() {
  useEffect(() => {
    // Initialize AOS animations
    if (typeof window !== 'undefined') {
      import('aos').then((AOS) => {
        AOS.default.init({
          duration: 1000,
          once: true
        })
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
                <h2>About ELGI</h2>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li>About ELGI</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Title Area End */}

      {/* About Area Start */}
      <div className="aboutarea aboutarea__2">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6" data-aos="fade-right">
              <div className="aboutarea__img">
                <img loading="lazy" src="/assets/img/about/about-main.jpg" alt="About ELGI" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6" data-aos="fade-left">
              <div className="aboutarea__content">
                <div className="aboutarea__title">
                  <h2>About <span>ELGI</span></h2>
                </div>
                <div className="aboutarea__paragraph">
                  <p>
                    ENLIGHT GROUP OF INSTITUTIONS (ELGI) is a premier educational institution 
                    dedicated to providing quality healthcare education in Bangalore, Karnataka.
                  </p>
                  <p>
                    Established with a vision to create competent healthcare professionals, 
                    ELGI offers comprehensive nursing and paramedical programs recognized by 
                    leading healthcare authorities including INC, KNC, and PCI.
                  </p>
                  <p>
                    Our institution is affiliated with RGUHS, Bangalore, and provides 
                    state-of-the-art infrastructure, experienced faculty, and practical 
                    training opportunities to ensure our students excel in their careers.
                  </p>
                </div>
                <div className="aboutarea__button">
                  <a href="/contacts" className="default__button">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About Area End */}

      {/* Mission Vision Area Start */}
      <div className="missionvisionarea">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6" data-aos="fade-up">
              <div className="missionvisionarea__single">
                <div className="missionvisionarea__single__icon">
                  <i className="icofont-target"></i>
                </div>
                <div className="missionvisionarea__single__content">
                  <h3>Our Mission</h3>
                  <p>
                    To provide excellence in healthcare education through innovative teaching 
                    methods, practical training, and ethical values, preparing students to 
                    become compassionate and competent healthcare professionals.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6" data-aos="fade-up">
              <div className="missionvisionarea__single">
                <div className="missionvisionarea__single__icon">
                  <i className="icofont-eye"></i>
                </div>
                <div className="missionvisionarea__single__content">
                  <h3>Our Vision</h3>
                  <p>
                    To be a leading institution in healthcare education, recognized for 
                    academic excellence, research innovation, and producing healthcare 
                    professionals who make a positive impact on society.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mission Vision Area End */}

      {/* Values Area Start */}
      <div className="valuesarea">
        <div className="container">
          <div className="row">
            <div className="col-xl-12" data-aos="fade-up">
              <div className="section__title section__title__2 text-center">
                <h2>Our <span>Core Values</span></h2>
                <p>The principles that guide our educational approach</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6" data-aos="fade-up">
              <div className="valuesarea__single">
                <div className="valuesarea__single__icon">
                  <i className="icofont-heart-beat"></i>
                </div>
                <div className="valuesarea__single__content">
                  <h3>Excellence</h3>
                  <p>Striving for the highest standards in education and healthcare</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6" data-aos="fade-up">
              <div className="valuesarea__single">
                <div className="valuesarea__single__icon">
                  <i className="icofont-users-alt-4"></i>
                </div>
                <div className="valuesarea__single__content">
                  <h3>Integrity</h3>
                  <p>Maintaining ethical standards and professional conduct</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6" data-aos="fade-up">
              <div className="valuesarea__single">
                <div className="valuesarea__single__icon">
                  <i className="icofont-lightbulb"></i>
                </div>
                <div className="valuesarea__single__content">
                  <h3>Innovation</h3>
                  <p>Embracing new technologies and teaching methodologies</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6" data-aos="fade-up">
              <div className="valuesarea__single">
                <div className="valuesarea__single__icon">
                  <i className="icofont-handshake-deal"></i>
                </div>
                <div className="valuesarea__single__content">
                  <h3>Compassion</h3>
                  <p>Fostering empathy and care for patients and communities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Values Area End */}
    </>
  )
}

