'use client'

import { useEffect } from 'react'
import Image from 'next/image'

export default function Gallery() {
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
                <h2>Photo Gallery</h2>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li>Gallery</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Title Area End */}

      {/* Gallery Area Start */}
      <div className="galleryarea">
        <div className="container">
          <div className="row">
            <div className="col-xl-12" data-aos="fade-up">
              <div className="section__title section__title__2 text-center">
                <h2>Campus <span>Gallery</span></h2>
                <p>Explore our beautiful campus and facilities through these photographs</p>
              </div>
            </div>
          </div>
          
          {/* Gallery Categories */}
          <div className="row">
            <div className="col-xl-12" data-aos="fade-up">
              <div className="galleryarea__filter">
                <button className="filter-btn active" data-filter="all">All</button>
                <button className="filter-btn" data-filter="campus">Campus</button>
                <button className="filter-btn" data-filter="events">Events</button>
                <button className="filter-btn" data-filter="facilities">Facilities</button>
                <button className="filter-btn" data-filter="students">Students</button>
              </div>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="row gallery-grid">
            {/* Campus Images */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 gallery-item campus" data-aos="fade-up">
              <div className="galleryarea__single">
                <div className="galleryarea__single__img">
                  <img loading="lazy" src="/assets/img/gallery/campus-1.jpg" alt="Campus View" />
                  <div className="galleryarea__single__img__overlay">
                    <a href="/assets/img/gallery/campus-1.jpg" className="gallery-popup">
                      <i className="icofont-search-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 gallery-item campus" data-aos="fade-up">
              <div className="galleryarea__single">
                <div className="galleryarea__single__img">
                  <img loading="lazy" src="/assets/img/gallery/campus-2.jpg" alt="Campus Building" />
                  <div className="galleryarea__single__img__overlay">
                    <a href="/assets/img/gallery/campus-2.jpg" className="gallery-popup">
                      <i className="icofont-search-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 gallery-item campus" data-aos="fade-up">
              <div className="galleryarea__single">
                <div className="galleryarea__single__img">
                  <img loading="lazy" src="/assets/img/gallery/campus-3.jpg" alt="Campus Garden" />
                  <div className="galleryarea__single__img__overlay">
                    <a href="/assets/img/gallery/campus-3.jpg" className="gallery-popup">
                      <i className="icofont-search-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Events Images */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 gallery-item events" data-aos="fade-up">
              <div className="galleryarea__single">
                <div className="galleryarea__single__img">
                  <img loading="lazy" src="/assets/img/gallery/event-1.jpg" alt="Graduation Ceremony" />
                  <div className="galleryarea__single__img__overlay">
                    <a href="/assets/img/gallery/event-1.jpg" className="gallery-popup">
                      <i className="icofont-search-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 gallery-item events" data-aos="fade-up">
              <div className="galleryarea__single">
                <div className="galleryarea__single__img">
                  <img loading="lazy" src="/assets/img/gallery/event-2.jpg" alt="Cultural Program" />
                  <div className="galleryarea__single__img__overlay">
                    <a href="/assets/img/gallery/event-2.jpg" className="gallery-popup">
                      <i className="icofont-search-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 gallery-item events" data-aos="fade-up">
              <div className="galleryarea__single">
                <div className="galleryarea__single__img">
                  <img loading="lazy" src="/assets/img/gallery/event-3.jpg" alt="Sports Meet" />
                  <div className="galleryarea__single__img__overlay">
                    <a href="/assets/img/gallery/event-3.jpg" className="gallery-popup">
                      <i className="icofont-search-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Facilities Images */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 gallery-item facilities" data-aos="fade-up">
              <div className="galleryarea__single">
                <div className="galleryarea__single__img">
                  <img loading="lazy" src="/assets/img/gallery/lab-1.jpg" alt="Laboratory" />
                  <div className="galleryarea__single__img__overlay">
                    <a href="/assets/img/gallery/lab-1.jpg" className="gallery-popup">
                      <i className="icofont-search-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 gallery-item facilities" data-aos="fade-up">
              <div className="galleryarea__single">
                <div className="galleryarea__single__img">
                  <img loading="lazy" src="/assets/img/gallery/library-1.jpg" alt="Library" />
                  <div className="galleryarea__single__img__overlay">
                    <a href="/assets/img/gallery/library-1.jpg" className="gallery-popup">
                      <i className="icofont-search-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 gallery-item facilities" data-aos="fade-up">
              <div className="galleryarea__single">
                <div className="galleryarea__single__img">
                  <img loading="lazy" src="/assets/img/gallery/classroom-1.jpg" alt="Classroom" />
                  <div className="galleryarea__single__img__overlay">
                    <a href="/assets/img/gallery/classroom-1.jpg" className="gallery-popup">
                      <i className="icofont-search-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Students Images */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 gallery-item students" data-aos="fade-up">
              <div className="galleryarea__single">
                <div className="galleryarea__single__img">
                  <img loading="lazy" src="/assets/img/gallery/student-1.jpg" alt="Students in Class" />
                  <div className="galleryarea__single__img__overlay">
                    <a href="/assets/img/gallery/student-1.jpg" className="gallery-popup">
                      <i className="icofont-search-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 gallery-item students" data-aos="fade-up">
              <div className="galleryarea__single">
                <div className="galleryarea__single__img">
                  <img loading="lazy" src="/assets/img/gallery/student-2.jpg" alt="Practical Training" />
                  <div className="galleryarea__single__img__overlay">
                    <a href="/assets/img/gallery/student-2.jpg" className="gallery-popup">
                      <i className="icofont-search-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 gallery-item students" data-aos="fade-up">
              <div className="galleryarea__single">
                <div className="galleryarea__single__img">
                  <img loading="lazy" src="/assets/img/gallery/student-3.jpg" alt="Group Study" />
                  <div className="galleryarea__single__img__overlay">
                    <a href="/assets/img/gallery/student-3.jpg" className="gallery-popup">
                      <i className="icofont-search-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Gallery Area End */}
    </>
  )
}
