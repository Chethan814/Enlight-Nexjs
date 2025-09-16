'use client';

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-area bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="footer-widget">
              <div className="footer-logo mb-4">
                <Link href="/">
                  <Image 
                    src="/assets/img/logo/enlight-group-logo-white.png" 
                    alt="Enlight Group of Institutions"
                    width={200}
                    height={60}
                    className="img-fluid"
                  />
                </Link>
              </div>
              <p className="mb-4">
                Enlight Group of Institutions is committed to providing quality education in the field of Nursing and Paramedical Sciences.
              </p>
              <div className="footer-social">
                <h6 className="text-white mb-3">Follow Us:</h6>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a href="https://www.facebook.com/enlightgroup2020" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://twitter.com/enlightgroup" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.instagram.com/enlightgroup" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.linkedin.com/company/enlight-group" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
            <div className="footer-widget">
              <h5 className="text-white mb-4">Quick Links</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><Link href="/about" className="text-white-50">About Us</Link></li>
                <li className="mb-2"><Link href="/courses" className="text-white-50">Courses</Link></li>
                <li className="mb-2"><Link href="/admission" className="text-white-50">Admission</Link></li>
                <li className="mb-2"><Link href="/institutions" className="text-white-50">Institutions</Link></li>
                <li className="mb-2"><Link href="/facilities" className="text-white-50">Facilities</Link></li>
                <li className="mb-2"><Link href="/gallery" className="text-white-50">Gallery</Link></li>
                <li className="mb-2"><Link href="/contact" className="text-white-50">Contact Us</Link></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <div className="footer-widget">
              <h5 className="text-white mb-4">Contact Info</h5>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <div className="d-flex">
                    <i className="fas fa-map-marker-alt mt-1 me-2"></i>
                    <span>123 Education Street, Bangalore, Karnataka, India - 560001</span>
                  </div>
                </li>
                <li className="mb-3">
                  <div className="d-flex">
                    <i className="fas fa-phone-alt mt-1 me-2"></i>
                    <div>
                      <a href="tel:+918029556773" className="text-white-50">+91 8029556773</a><br />
                      <a href="tel:+919900000000" className="text-white-50">+91 9900000000</a>
                    </div>
                  </div>
                </li>
                <li className="mb-3">
                  <div className="d-flex">
                    <i className="far fa-envelope mt-1 me-2"></i>
                    <a href="mailto:info@enlight.edu.in" className="text-white-50">info@enlight.edu.in</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <div className="footer-widget">
              <h5 className="text-white mb-4">Newsletter</h5>
              <p className="text-white-50 mb-3">Subscribe to our newsletter for the latest updates and news.</p>
              <form>
                <div className="input-group mb-3">
                  <input type="email" className="form-control" placeholder="Your Email" aria-label="Your Email" />
                  <button className="btn btn-primary" type="submit">
                    <i className="far fa-paper-plane"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="row mt-4 pt-3 border-top border-secondary">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0">&copy; {currentYear} Enlight Group of Institutions. All Rights Reserved.</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="mb-0">
              <a href="/privacy-policy" className="text-white-50 me-3">Privacy Policy</a>
              <a href="/terms-conditions" className="text-white-50">Terms & Conditions</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
