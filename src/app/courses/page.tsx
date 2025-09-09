'use client'

import { useEffect } from 'react'
import Image from 'next/image'

export default function Courses() {
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
                <h2>Our Courses</h2>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li>Courses</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Title Area End */}

      {/* Courses Area Start */}
      <div className="coursesarea">
        <div className="container">
          <div className="row">
            <div className="col-xl-12" data-aos="fade-up">
              <div className="section__title section__title__2 text-center">
                <h2>Healthcare <span>Education Programs</span></h2>
                <p>Comprehensive nursing and paramedical courses designed for your career success</p>
              </div>
            </div>
          </div>
          <div className="row">
            {/* BSc Nursing */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" data-aos="fade-up">
              <div className="coursesarea__single">
                <div className="coursesarea__single__img">
                  <img loading="lazy" src="/assets/img/courses/bsc-nursing.jpg" alt="BSc Nursing" />
                  <div className="coursesarea__single__img__overlay">
                    <span className="coursesarea__single__img__overlay__badge">UG</span>
                  </div>
                </div>
                <div className="coursesarea__single__content">
                  <div className="coursesarea__single__content__title">
                    <h3>BSc Nursing</h3>
                  </div>
                  <div className="coursesarea__single__content__duration">
                    <span><i className="icofont-clock-time"></i> 4 Years</span>
                  </div>
                  <div className="coursesarea__single__content__paragraph">
                    <p>
                      Bachelor of Science in Nursing is a comprehensive program that prepares 
                      students for a rewarding career in healthcare. The course covers theoretical 
                      knowledge and practical training in nursing care.
                    </p>
                  </div>
                  <div className="coursesarea__single__content__features">
                    <ul>
                      <li><i className="icofont-check-circled"></i> Recognized by INC & KNC</li>
                      <li><i className="icofont-check-circled"></i> Affiliated to RGUHS</li>
                      <li><i className="icofont-check-circled"></i> Practical training included</li>
                      <li><i className="icofont-check-circled"></i> Placement assistance</li>
                    </ul>
                  </div>
                  <div className="coursesarea__single__content__button">
                    <a href="/contacts" className="default__button">
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* GNM */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" data-aos="fade-up">
              <div className="coursesarea__single">
                <div className="coursesarea__single__img">
                  <img loading="lazy" src="/assets/img/courses/gnm.jpg" alt="GNM" />
                  <div className="coursesarea__single__img__overlay">
                    <span className="coursesarea__single__img__overlay__badge">Diploma</span>
                  </div>
                </div>
                <div className="coursesarea__single__content">
                  <div className="coursesarea__single__content__title">
                    <h3>GNM (General Nursing & Midwifery)</h3>
                  </div>
                  <div className="coursesarea__single__content__duration">
                    <span><i className="icofont-clock-time"></i> 3 Years</span>
                  </div>
                  <div className="coursesarea__single__content__paragraph">
                    <p>
                      General Nursing and Midwifery is a diploma program that provides 
                      comprehensive training in nursing care, patient management, and 
                      midwifery practices.
                    </p>
                  </div>
                  <div className="coursesarea__single__content__features">
                    <ul>
                      <li><i className="icofont-check-circled"></i> Recognized by INC & KNC</li>
                      <li><i className="icofont-check-circled"></i> Practical training focus</li>
                      <li><i className="icofont-check-circled"></i> Midwifery specialization</li>
                      <li><i className="icofont-check-circled"></i> Career opportunities</li>
                    </ul>
                  </div>
                  <div className="coursesarea__single__content__button">
                    <a href="/contacts" className="default__button">
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* MSc Nursing */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" data-aos="fade-up">
              <div className="coursesarea__single">
                <div className="coursesarea__single__img">
                  <img loading="lazy" src="/assets/img/courses/msc-nursing.jpg" alt="MSc Nursing" />
                  <div className="coursesarea__single__img__overlay">
                    <span className="coursesarea__single__img__overlay__badge">PG</span>
                  </div>
                </div>
                <div className="coursesarea__single__content">
                  <div className="coursesarea__single__content__title">
                    <h3>MSc Nursing</h3>
                  </div>
                  <div className="coursesarea__single__content__duration">
                    <span><i className="icofont-clock-time"></i> 2 Years</span>
                  </div>
                  <div className="coursesarea__single__content__paragraph">
                    <p>
                      Master of Science in Nursing offers advanced specialization in various 
                      nursing fields, preparing graduates for leadership roles in healthcare.
                    </p>
                  </div>
                  <div className="coursesarea__single__content__features">
                    <ul>
                      <li><i className="icofont-check-circled"></i> Specialization options</li>
                      <li><i className="icofont-check-circled"></i> Research opportunities</li>
                      <li><i className="icofont-check-circled"></i> Leadership training</li>
                      <li><i className="icofont-check-circled"></i> Advanced practice</li>
                    </ul>
                  </div>
                  <div className="coursesarea__single__content__button">
                    <a href="/contacts" className="default__button">
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Paramedical Courses */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" data-aos="fade-up">
              <div className="coursesarea__single">
                <div className="coursesarea__single__img">
                  <img loading="lazy" src="/assets/img/courses/paramedical.jpg" alt="Paramedical" />
                  <div className="coursesarea__single__img__overlay">
                    <span className="coursesarea__single__img__overlay__badge">Diploma</span>
                  </div>
                </div>
                <div className="coursesarea__single__content">
                  <div className="coursesarea__single__content__title">
                    <h3>Paramedical Courses</h3>
                  </div>
                  <div className="coursesarea__single__content__duration">
                    <span><i className="icofont-clock-time"></i> 1-2 Years</span>
                  </div>
                  <div className="coursesarea__single__content__paragraph">
                    <p>
                      Various paramedical programs including Medical Laboratory Technology, 
                      Radiography, Operation Theatre Technology, and more.
                    </p>
                  </div>
                  <div className="coursesarea__single__content__features">
                    <ul>
                      <li><i className="icofont-check-circled"></i> Multiple specializations</li>
                      <li><i className="icofont-check-circled"></i> Practical training</li>
                      <li><i className="icofont-check-circled"></i> Industry recognition</li>
                      <li><i className="icofont-check-circled"></i> Job opportunities</li>
                    </ul>
                  </div>
                  <div className="coursesarea__single__content__button">
                    <a href="/contacts" className="default__button">
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* ANM */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" data-aos="fade-up">
              <div className="coursesarea__single">
                <div className="coursesarea__single__img">
                  <img loading="lazy" src="/assets/img/courses/anm.jpg" alt="ANM" />
                  <div className="coursesarea__single__img__overlay">
                    <span className="coursesarea__single__img__overlay__badge">Certificate</span>
                  </div>
                </div>
                <div className="coursesarea__single__content">
                  <div className="coursesarea__single__content__title">
                    <h3>ANM (Auxiliary Nurse Midwife)</h3>
                  </div>
                  <div className="coursesarea__single__content__duration">
                    <span><i className="icofont-clock-time"></i> 2 Years</span>
                  </div>
                  <div className="coursesarea__single__content__paragraph">
                    <p>
                      Auxiliary Nurse Midwife program trains students in basic nursing care, 
                      community health, and maternal-child healthcare services.
                    </p>
                  </div>
                  <div className="coursesarea__single__content__features">
                    <ul>
                      <li><i className="icofont-check-circled"></i> Community health focus</li>
                      <li><i className="icofont-check-circled"></i> Maternal care training</li>
                      <li><i className="icofont-check-circled"></i> Rural healthcare</li>
                      <li><i className="icofont-check-circled"></i> Government recognition</li>
                    </ul>
                  </div>
                  <div className="coursesarea__single__content__button">
                    <a href="/contacts" className="default__button">
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Short Term Courses */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" data-aos="fade-up">
              <div className="coursesarea__single">
                <div className="coursesarea__single__img">
                  <img loading="lazy" src="/assets/img/courses/short-term.jpg" alt="Short Term Courses" />
                  <div className="coursesarea__single__img__overlay">
                    <span className="coursesarea__single__img__overlay__badge">Certificate</span>
                  </div>
                </div>
                <div className="coursesarea__single__content">
                  <div className="coursesarea__single__content__title">
                    <h3>Short Term Courses</h3>
                  </div>
                  <div className="coursesarea__single__content__duration">
                    <span><i className="icofont-clock-time"></i> 3-6 Months</span>
                  </div>
                  <div className="coursesarea__single__content__paragraph">
                    <p>
                      Specialized short-term programs in healthcare skills, first aid, 
                      emergency care, and specialized nursing procedures.
                    </p>
                  </div>
                  <div className="coursesarea__single__content__features">
                    <ul>
                      <li><i className="icofont-check-circled"></i> Skill enhancement</li>
                      <li><i className="icofont-check-circled"></i> Flexible duration</li>
                      <li><i className="icofont-check-circled"></i> Industry relevant</li>
                      <li><i className="icofont-check-circled"></i> Quick certification</li>
                    </ul>
                  </div>
                  <div className="coursesarea__single__content__button">
                    <a href="/contacts" className="default__button">
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Courses Area End */}

      {/* Course Features Area Start */}
      <div className="coursefeaturesarea">
        <div className="container">
          <div className="row">
            <div className="col-xl-12" data-aos="fade-up">
              <div className="section__title section__title__2 text-center">
                <h2>Why Choose <span>Our Courses</span></h2>
                <p>Features that make our healthcare education programs stand out</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6" data-aos="fade-up">
              <div className="coursefeaturesarea__single">
                <div className="coursefeaturesarea__single__icon">
                  <i className="icofont-graduation-cap"></i>
                </div>
                <div className="coursefeaturesarea__single__content">
                  <h3>Quality Education</h3>
                  <p>Comprehensive curriculum designed by healthcare experts</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6" data-aos="fade-up">
              <div className="coursefeaturesarea__single">
                <div className="coursefeaturesarea__single__icon">
                  <i className="icofont-users-alt-4"></i>
                </div>
                <div className="coursefeaturesarea__single__content">
                  <h3>Expert Faculty</h3>
                  <p>Experienced healthcare professionals as instructors</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6" data-aos="fade-up">
              <div className="coursefeaturesarea__single">
                <div className="coursefeaturesarea__single__icon">
                  <i className="icofont-flask"></i>
                </div>
                <div className="coursefeaturesarea__single__content">
                  <h3>Practical Training</h3>
                  <p>Hands-on experience in modern healthcare facilities</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6" data-aos="fade-up">
              <div className="coursefeaturesarea__single">
                <div className="coursefeaturesarea__single__icon">
                  <i className="icofont-briefcase"></i>
                </div>
                <div className="coursefeaturesarea__single__content">
                  <h3>Placement Support</h3>
                  <p>Career guidance and placement assistance services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Course Features Area End */}
    </>
  )
}
