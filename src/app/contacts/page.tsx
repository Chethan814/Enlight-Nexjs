'use client'

import { useEffect } from 'react'
import Image from 'next/image'

export default function Contacts() {
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
                <h2>Contact Us</h2>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Title Area End */}

      {/* Contact Area Start */}
      <div className="contactarea">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6" data-aos="fade-right">
              <div className="contactarea__content">
                <div className="contactarea__title">
                  <h2>Get In <span>Touch</span></h2>
                  <p>We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.</p>
                </div>
                <div className="contactarea__info">
                  <div className="contactarea__info__single">
                    <div className="contactarea__info__single__icon">
                      <i className="icofont-location-pin"></i>
                    </div>
                    <div className="contactarea__info__single__content">
                      <h3>Address</h3>
                      <p>Enlight Group of Institutions<br />
                      Bangalore, Karnataka, India</p>
                    </div>
                  </div>
                  <div className="contactarea__info__single">
                    <div className="contactarea__info__single__icon">
                      <i className="icofont-phone"></i>
                    </div>
                    <div className="contactarea__info__single__content">
                      <h3>Phone</h3>
                      <p>+91-8029556773</p>
                    </div>
                  </div>
                  <div className="contactarea__info__single">
                    <div className="contactarea__info__single__icon">
                      <i className="icofont-email"></i>
                    </div>
                    <div className="contactarea__info__single__content">
                      <h3>Email</h3>
                      <p>enlightschool@gmail.com</p>
                    </div>
                  </div>
                  <div className="contactarea__info__single">
                    <div className="contactarea__info__single__icon">
                      <i className="icofont-clock-time"></i>
                    </div>
                    <div className="contactarea__info__single__content">
                      <h3>Working Hours</h3>
                      <p>Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6" data-aos="fade-left">
              <div className="contactarea__form">
                <div className="contactarea__form__title">
                  <h3>Send Us a Message</h3>
                </div>
                <form>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                      <div className="contactarea__form__single">
                        <input type="text" placeholder="Your Name" required />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                      <div className="contactarea__form__single">
                        <input type="email" placeholder="Your Email" required />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                      <div className="contactarea__form__single">
                        <input type="tel" placeholder="Your Phone" />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                      <div className="contactarea__form__single">
                        <select>
                          <option value="">Select Course</option>
                          <option value="bsc-nursing">BSc Nursing</option>
                          <option value="gnm">GNM</option>
                          <option value="msc-nursing">MSc Nursing</option>
                          <option value="paramedical">Paramedical Courses</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="contactarea__form__single">
                        <textarea placeholder="Your Message" rows={5} required></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="contactarea__form__button">
                        <button type="submit" className="default__button">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Area End */}

      {/* Map Area Start */}
      <div className="maparea">
        <div className="container">
          <div className="row">
            <div className="col-xl-12" data-aos="fade-up">
              <div className="maparea__content">
                <div className="maparea__content__title">
                  <h3>Find Us on Map</h3>
                </div>
                <div className="maparea__content__map">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1234567890123!2d77.12345678901234!3d12.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDA3JzM0LjQiTiA3N8KwMDcnMzQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123"
                    width="100%" 
                    height="450" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Map Area End */}
    </>
  )
}
