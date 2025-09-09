'use client'

import { useEffect } from 'react'
import Image from 'next/image'

export default function Hostel() {
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
                <h2>Student Hostel</h2>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li>Hostel</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Title Area End */}

      {/* Hostel Area Start */}
      <div className="hostelarea">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6" data-aos="fade-right">
              <div className="hostelarea__content">
                <div className="hostelarea__content__title">
                  <h2>Comfortable <span>Student Accommodation</span></h2>
                  <p>
                    We provide safe, comfortable, and affordable hostel accommodation for 
                    outstation students. Our hostel facilities are designed to create a 
                    home-like environment where students can focus on their studies.
                  </p>
                </div>
                <div className="hostelarea__content__features">
                  <div className="hostelarea__content__features__single">
                    <div className="hostelarea__content__features__single__icon">
                      <i className="icofont-home"></i>
                    </div>
                    <div className="hostelarea__content__features__single__content">
                      <h3>Separate Wings</h3>
                      <p>Dedicated accommodation for boys and girls with strict security</p>
                    </div>
                  </div>
                  <div className="hostelarea__content__features__single">
                    <div className="hostelarea__content__features__single__icon">
                      <i className="icofont-shield"></i>
                    </div>
                    <div className="hostelarea__content__features__single__content">
                      <h3>24/7 Security</h3>
                      <p>Round-the-clock security with CCTV surveillance and access control</p>
                    </div>
                  </div>
                  <div className="hostelarea__content__features__single">
                    <div className="hostelarea__content__features__single__icon">
                      <i className="icofont-food-basket"></i>
                    </div>
                    <div className="hostelarea__content__features__single__content">
                      <h3>Nutritious Meals</h3>
                      <p>Three wholesome meals daily prepared in hygienic conditions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6" data-aos="fade-left">
              <div className="hostelarea__img">
                <img loading="lazy" src="/assets/img/Hostel/hostel-main.jpg" alt="Student Hostel" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hostel Area End */}

      {/* Room Types Area Start */}
      <div className="roomtypesarea">
        <div className="container">
          <div className="row">
            <div className="col-xl-12" data-aos="fade-up">
              <div className="section__title section__title__2 text-center">
                <h2>Room <span>Options</span></h2>
                <p>Choose from our various accommodation options</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" data-aos="fade-up">
              <div className="roomtypesarea__single">
                <div className="roomtypesarea__single__img">
                  <img loading="lazy" src="/assets/img/Hostel/single-room.jpg" alt="Single Room" />
                </div>
                <div className="roomtypesarea__single__content">
                  <div className="roomtypesarea__single__content__title">
                    <h3>Single Room</h3>
                  </div>
                  <div className="roomtypesarea__single__content__features">
                    <ul>
                      <li><i className="icofont-check-circled"></i> Single bed with study table</li>
                      <li><i className="icofont-check-circled"></i> Attached bathroom</li>
                      <li><i className="icofont-check-circled"></i> Wardrobe and storage</li>
                      <li><i className="icofont-check-circled"></i> Wi-Fi connectivity</li>
                    </ul>
                  </div>
                  <div className="roomtypesarea__single__content__price">
                    <span>₹8,000/month</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" data-aos="fade-up">
              <div className="roomtypesarea__single">
                <div className="roomtypesarea__single__img">
                  <img loading="lazy" src="/assets/img/Hostel/sharing-room.jpg" alt="Sharing Room" />
                </div>
                <div className="roomtypesarea__single__content">
                  <div className="roomtypesarea__single__content__title">
                    <h3>Sharing Room (2 Beds)</h3>
                  </div>
                  <div className="roomtypesarea__single__content__features">
                    <ul>
                      <li><i className="icofont-check-circled"></i> Two beds with study tables</li>
                      <li><i className="icofont-check-circled"></i> Shared bathroom</li>
                      <li><i className="icofont-check-circled"></i> Individual wardrobes</li>
                      <li><i className="icofont-check-circled"></i> Wi-Fi connectivity</li>
                    </ul>
                  </div>
                  <div className="roomtypesarea__single__content__price">
                    <span>₹6,000/month</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" data-aos="fade-up">
              <div className="roomtypesarea__single">
                <div className="roomtypesarea__single__img">
                  <img loading="lazy" src="/assets/img/Hostel/dormitory.jpg" alt="Dormitory" />
                </div>
                <div className="roomtypesarea__single__content">
                  <div className="roomtypesarea__single__content__title">
                    <h3>Dormitory (4 Beds)</h3>
                  </div>
                  <div className="roomtypesarea__single__content__features">
                    <ul>
                      <li><i className="icofont-check-circled"></i> Four beds with study areas</li>
                      <li><i className="icofont-check-circled"></i> Shared bathroom facilities</li>
                      <li><i className="icofont-check-circled"></i> Storage lockers</li>
                      <li><i className="icofont-check-circled"></i> Wi-Fi connectivity</li>
                    </ul>
                  </div>
                  <div className="roomtypesarea__single__content__price">
                    <span>₹4,500/month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Room Types Area End */}

      {/* Hostel Facilities Area Start */}
      <div className="hostelfacilitiesarea">
        <div className="container">
          <div className="row">
            <div className="col-xl-12" data-aos="fade-up">
              <div className="section__title section__title__2 text-center">
                <h2>Hostel <span>Facilities</span></h2>
                <p>Everything you need for a comfortable stay</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6" data-aos="fade-up">
              <div className="hostelfacilitiesarea__single">
                <div className="hostelfacilitiesarea__single__icon">
                  <i className="icofont-wifi"></i>
                </div>
                <div className="hostelfacilitiesarea__single__content">
                  <h3>Wi-Fi Internet</h3>
                  <p>High-speed internet connectivity throughout the hostel</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6" data-aos="fade-up">
              <div className="hostelfacilitiesarea__single">
                <div className="hostelfacilitiesarea__single__icon">
                  <i className="icofont-laundry"></i>
                </div>
                <div className="hostelfacilitiesarea__single__content">
                  <h3>Laundry Service</h3>
                  <p>Regular laundry service for student convenience</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6" data-aos="fade-up">
              <div className="hostelfacilitiesarea__single">
                <div className="hostelfacilitiesarea__single__icon">
                  <i className="icofont-first-aid"></i>
                </div>
                <div className="hostelfacilitiesarea__single__content">
                  <h3>Medical Support</h3>
                  <p>24/7 medical assistance and first aid support</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6" data-aos="fade-up">
              <div className="hostelfacilitiesarea__single">
                <div className="hostelfacilitiesarea__single__icon">
                  <i className="icofont-bus-alt-1"></i>
                </div>
                <div className="hostelfacilitiesarea__single__content">
                  <h3>Transportation</h3>
                  <p>Shuttle service to and from the campus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hostel Facilities Area End */}

      {/* Hostel Rules Area Start */}
      <div className="hostelrulesarea">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6" data-aos="fade-right">
              <div className="hostelrulesarea__img">
                <img loading="lazy" src="/assets/img/Hostel/hostel-rules.jpg" alt="Hostel Rules" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6" data-aos="fade-left">
              <div className="hostelrulesarea__content">
                <div className="hostelrulesarea__content__title">
                  <h2>Hostel <span>Rules & Guidelines</span></h2>
                  <p>To ensure a safe and conducive environment for all students</p>
                </div>
                <div className="hostelrulesarea__content__rules">
                  <ul>
                    <li><i className="icofont-check-circled"></i> Strict entry and exit timings</li>
                    <li><i className="icofont-check-circled"></i> No unauthorized visitors allowed</li>
                    <li><i className="icofont-check-circled"></i> Maintain cleanliness and hygiene</li>
                    <li><i className="icofont-check-circled"></i> Follow noise control guidelines</li>
                    <li><i className="icofont-check-circled"></i> Respect fellow students&apos; privacy</li>
                    <li><i className="icofont-check-circled"></i> Report any issues to hostel staff</li>
                  </ul>
                </div>
                <div className="hostelrulesarea__content__button">
                  <a href="/contacts" className="default__button">
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hostel Rules Area End */}
    </>
  )
}
