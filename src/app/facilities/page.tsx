'use client'

import { useEffect } from 'react'
import Image from 'next/image'

export default function Facilities() {
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
                <h2>Our Facilities</h2>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li>Facilities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Title Area End */}

      {/* Facilities Area Start */}
      <div className="facilitiesarea">
        <div className="container">
          <div className="row">
            <div className="col-xl-12" data-aos="fade-up">
              <div className="section__title section__title__2 text-center">
                <h2>World-Class <span>Facilities</span></h2>
                <p>State-of-the-art infrastructure to support quality healthcare education</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" data-aos="fade-up">
              <div className="facilitiesarea__single">
                <div className="facilitiesarea__single__img">
                  <img loading="lazy" src="/assets/img/facilities/laboratory.jpg" alt="Modern Laboratories" />
                </div>
                <div className="facilitiesarea__single__content">
                  <div className="facilitiesarea__single__content__icon">
                    <i className="icofont-flask"></i>
                  </div>
                  <div className="facilitiesarea__single__content__title">
                    <h3>Modern Laboratories</h3>
                  </div>
                  <div className="facilitiesarea__single__content__paragraph">
                    <p>Well-equipped laboratories with latest medical equipment for practical training</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" data-aos="fade-up">
              <div className="facilitiesarea__single">
                <div className="facilitiesarea__single__img">
                  <img loading="lazy" src="/assets/img/facilities/library.jpg" alt="Digital Library" />
                </div>
                <div className="facilitiesarea__single__content">
                  <div className="facilitiesarea__single__content__icon">
                    <i className="icofont-library"></i>
                  </div>
                  <div className="facilitiesarea__single__content__title">
                    <h3>Digital Library</h3>
                  </div>
                  <div className="facilitiesarea__single__content__paragraph">
                    <p>Extensive collection of medical books, journals, and online resources</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" data-aos="fade-up">
              <div className="facilitiesarea__single">
                <div className="facilitiesarea__single__img">
                  <img loading="lazy" src="/assets/img/facilities/classroom.jpg" alt="Smart Classrooms" />
                </div>
                <div className="facilitiesarea__single__content">
                  <div className="facilitiesarea__single__content__icon">
                    <i className="icofont-monitor"></i>
                  </div>
                  <div className="facilitiesarea__single__content__title">
                    <h3>Smart Classrooms</h3>
                  </div>
                  <div className="facilitiesarea__single__content__paragraph">
                    <p>Technology-enabled classrooms with audio-visual aids and interactive learning</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" data-aos="fade-up">
              <div className="facilitiesarea__single">
                <div className="facilitiesarea__single__img">
                  <img loading="lazy" src="/assets/img/facilities/hostel.jpg" alt="Student Hostel" />
                </div>
                <div className="facilitiesarea__single__content">
                  <div className="facilitiesarea__single__content__icon">
                    <i className="icofont-home"></i>
                  </div>
                  <div className="facilitiesarea__single__content__title">
                    <h3>Student Hostel</h3>
                  </div>
                  <div className="facilitiesarea__single__content__paragraph">
                    <p>Comfortable accommodation with modern amenities for outstation students</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" data-aos="fade-up">
              <div className="facilitiesarea__single">
                <div className="facilitiesarea__single__img">
                  <img loading="lazy" src="/assets/img/facilities/sports.jpg" alt="Sports Facilities" />
                </div>
                <div className="facilitiesarea__single__content">
                  <div className="facilitiesarea__single__content__icon">
                    <i className="icofont-soccer"></i>
                  </div>
                  <div className="facilitiesarea__single__content__title">
                    <h3>Sports Facilities</h3>
                  </div>
                  <div className="facilitiesarea__single__content__paragraph">
                    <p>Indoor and outdoor sports facilities for physical fitness and recreation</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" data-aos="fade-up">
              <div className="facilitiesarea__single">
                <div className="facilitiesarea__single__img">
                  <img loading="lazy" src="/assets/img/facilities/cafeteria.jpg" alt="Cafeteria" />
                </div>
                <div className="facilitiesarea__single__content">
                  <div className="facilitiesarea__single__content__icon">
                    <i className="icofont-coffee-cup"></i>
                  </div>
                  <div className="facilitiesarea__single__content__title">
                    <h3>Cafeteria</h3>
                  </div>
                  <div className="facilitiesarea__single__content__paragraph">
                    <p>Hygienic food court serving nutritious meals and refreshments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Facilities Area End */}

      {/* Infrastructure Area Start */}
      <div className="infrastructurearea">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6" data-aos="fade-right">
              <div className="infrastructurearea__content">
                <div className="infrastructurearea__content__title">
                  <h2>Infrastructure <span>Highlights</span></h2>
                </div>
                <div className="infrastructurearea__content__list">
                  <ul>
                    <li><i className="icofont-check-circled"></i> 24/7 Security and CCTV Surveillance</li>
                    <li><i className="icofont-check-circled"></i> Wi-Fi Enabled Campus</li>
                    <li><i className="icofont-check-circled"></i> Power Backup and Generator</li>
                    <li><i className="icofont-check-circled"></i> Medical Emergency Support</li>
                    <li><i className="icofont-check-circled"></i> Transportation Services</li>
                    <li><i className="icofont-check-circled"></i> Banking and ATM Facilities</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6" data-aos="fade-left">
              <div className="infrastructurearea__img">
                <img loading="lazy" src="/assets/img/facilities/campus.jpg" alt="Campus Infrastructure" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Infrastructure Area End */}
    </>
  )
}
