'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Scholarship() {
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
                <h3>Scholarships</h3>
                <ul>
                  <li><Link href="/">Home</Link></li>
                  <li><span>Scholarships</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Title Area End */}

      {/* Scholarship Area Start */}
      <div className="scholarship__area section__padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section__title" data-aos="fade-up">
                <h2>Scholarship Opportunities</h2>
                <p>Financial support to make quality education accessible to deserving students</p>
              </div>
            </div>
          </div>

          {/* Scholarship Overview */}
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" data-aos="fade-up">
              <div className="scholarship__overview">
                <h3>About Our Scholarships</h3>
                <p>Enlight Group of Institutions is committed to providing financial assistance to meritorious and deserving students. We offer various scholarship programs to help students pursue their dreams in healthcare education.</p>
                <div className="scholarship__benefits">
                  <h4>Benefits of Our Scholarships</h4>
                  <ul>
                    <li><i className="icofont-check-circled"></i> Reduced tuition fees</li>
                    <li><i className="icofont-check-circled"></i> Merit-based recognition</li>
                    <li><i className="icofont-check-circled"></i> Financial support for education</li>
                    <li><i className="icofont-check-circled"></i> Encouragement for academic excellence</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="100">
              <div className="scholarship__overview__image">
                <Image
                  src="/assets/img/scholarship/scholarship-main.jpg"
                  alt="Scholarship"
                  width={600}
                  height={400}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>

          {/* Scholarship Types */}
          <div className="row mt-5">
            <div className="col-xl-12">
              <div className="scholarship__types" data-aos="fade-up">
                <h3>Types of Scholarships Available</h3>
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <div className="scholarship__type__single">
                      <div className="scholarship__type__single__icon">
                        <i className="icofont-medal"></i>
                      </div>
                      <h4>Merit Scholarship</h4>
                      <p>Based on academic performance in previous qualifying examinations</p>
                      <div className="scholarship__details">
                        <h5>Eligibility:</h5>
                        <ul>
                          <li>Class 12th with 85% or above</li>
                          <li>Excellent academic record</li>
                          <li>Good conduct certificate</li>
                        </ul>
                        <h5>Benefits:</h5>
                        <p>Up to 25% fee waiver</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <div className="scholarship__type__single">
                      <div className="scholarship__type__single__icon">
                        <i className="icofont-users"></i>
                      </div>
                      <h4>Sibling Scholarship</h4>
                      <p>Special discount for siblings studying at Enlight Group</p>
                      <div className="scholarship__details">
                        <h5>Eligibility:</h5>
                        <ul>
                          <li>Having sibling already enrolled</li>
                          <li>Maintaining good academic standing</li>
                          <li>Regular attendance</li>
                        </ul>
                        <h5>Benefits:</h5>
                        <p>15% fee reduction</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <div className="scholarship__type__single">
                      <div className="scholarship__type__single__icon">
                        <i className="icofont-heart"></i>
                      </div>
                      <h4>Sports Scholarship</h4>
                      <p>Recognition for outstanding achievements in sports</p>
                      <div className="scholarship__details">
                        <h5>Eligibility:</h5>
                        <ul>
                          <li>State/National level sports achievements</li>
                          <li>Active participation in college sports</li>
                          <li>Good academic performance</li>
                        </ul>
                        <h5>Benefits:</h5>
                        <p>Up to 20% fee waiver</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Scholarships */}
          <div className="row mt-4">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="additional__scholarship">
                <div className="additional__scholarship__icon">
                  <i className="icofont-girl"></i>
                </div>
                <h4>Girl Child Scholarship</h4>
                <p>Special encouragement for female students pursuing healthcare education</p>
                <ul>
                  <li>10% additional fee waiver for girls</li>
                  <li>Focus on women empowerment</li>
                  <li>Support for career development</li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="additional__scholarship">
                <div className="additional__scholarship__icon">
                  <i className="icofont-handshake-deal"></i>
                </div>
                <h4>Need-Based Scholarship</h4>
                <p>Financial assistance for economically disadvantaged students</p>
                <ul>
                  <li>Income-based assessment</li>
                  <li>Documentation required</li>
                  <li>Up to 30% fee support</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Application Process */}
          <div className="row mt-5">
            <div className="col-xl-12">
              <div className="application__process" data-aos="fade-up">
                <h3>How to Apply for Scholarships</h3>
                <div className="row">
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                    <div className="process__step">
                      <div className="process__step__number">1</div>
                      <h4>Check Eligibility</h4>
                      <p>Review the scholarship criteria and ensure you meet all requirements</p>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                    <div className="process__step">
                      <div className="process__step__number">2</div>
                      <h4>Gather Documents</h4>
                      <p>Collect all required documents including certificates and income proof</p>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                    <div className="process__step">
                      <div className="process__step__number">3</div>
                      <h4>Submit Application</h4>
                      <p>Complete the scholarship application form with all details</p>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                    <div className="process__step">
                      <div className="process__step__number">4</div>
                      <h4>Review & Approval</h4>
                      <p>Applications are reviewed and approved by the scholarship committee</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Required Documents */}
          <div className="row mt-5">
            <div className="col-xl-12">
              <div className="required__documents" data-aos="fade-up">
                <h3>Required Documents</h3>
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="documents__section">
                      <h4>Academic Documents</h4>
                      <ul>
                        <li>Mark sheets of qualifying examination</li>
                        <li>Transfer certificate</li>
                        <li>Character certificate</li>
                        <li>Migration certificate (if applicable)</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="documents__section">
                      <h4>Additional Documents</h4>
                      <ul>
                        <li>Income certificate</li>
                        <li>Caste certificate (if applicable)</li>
                        <li>Sports certificates (for sports scholarship)</li>
                        <li>Passport size photographs</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="row mt-5">
            <div className="col-xl-12">
              <div className="scholarship__contact" data-aos="fade-up">
                <h3>Get More Information</h3>
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="contact__info">
                      <h4>Scholarship Office</h4>
                      <p>For detailed information about scholarships and application procedures, contact our scholarship office.</p>
                      <div className="contact__details">
                        <p><i className="icofont-phone"></i> +91-8029556773</p>
                        <p><i className="icofont-email"></i> scholarship@enlight.edu.in</p>
                        <p><i className="icofont-location-pin"></i> Enlight Group Campus, Bangalore</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="scholarship__cta">
                      <h4>Ready to Apply?</h4>
                      <p>Don't miss the opportunity to receive financial support for your education.</p>
                      <div className="scholarship__cta__buttons">
                        <Link href="/contacts" className="default__button">
                          Contact Scholarship Office
                        </Link>
                        <a
                          href="https://enlight.eduwego.in/online-admission/enlight-group-of-institutions"
                          target="_blank"
                          className="default__button default__button__2"
                        >
                          Apply Online
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Scholarship Area End */}
    </>
  )
}
