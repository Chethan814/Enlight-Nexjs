'use client';

import { useState, useEffect, useRef, useCallback, memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Types
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

interface DropdownMenuProps {
  title: string;
  children: React.ReactNode;
}

// Constants
const COMMON_NAV_STYLES = 'text-black font-bold hover:text-primary font-medium transition';
const DROPDOWN_STYLES = 'absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg z-50';
const MOBILE_NAV_ITEM = 'block px-4 py-2 text-gray-700 hover:bg-gray-100';

// Reusable Components
const NavLink = memo(({ href, children, className = '', onClick }: NavLinkProps) => (
  <Link href={href} className={`${COMMON_NAV_STYLES} ${className}`} onClick={onClick}>
    {children}
  </Link>
));

const MobileNavLink = memo(({ href, children, onClick }: NavLinkProps) => (
  <Link href={href} className={MOBILE_NAV_ITEM} onClick={onClick}>
    {children}
  </Link>
));

const DropdownMenu = memo(({ title, children }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = useCallback(() => setIsOpen(prev => !prev), []);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [handleClickOutside]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button className={`${COMMON_NAV_STYLES} flex items-center`} onClick={toggleDropdown} aria-expanded={isOpen}>
        {title} <i className="icofont-rounded-down ml-1"></i>
      </button>
      {isOpen && (
        <div className={DROPDOWN_STYLES}>
          <div className="p-2">{children}</div>
        </div>
      )}
    </div>
  );
});

const MobileDropdownMenu = memo(({ title, children }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = useCallback(() => setIsOpen(prev => !prev), []);

  return (
    <div className="mb-2">
      <button
        className="w-full flex justify-between items-center px-4 py-2 text-left text-black font-bold"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
      >
        {title} <i className={`icofont-rounded-${isOpen ? 'up' : 'down'}`}></i>
      </button>
      {isOpen && <div className="bg-gray-50 pl-4">{children}</div>}
    </div>
  );
});

// Main Header
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = useCallback(() => setIsMobileMenuOpen(prev => !prev), []);
  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white shadow-md' : 'bg-white'
  }`;

  return (
    <>
      <div className="container w-full h-16"></div>
      <header className={headerClasses}>
        <div className="relative">
          <div className="flex justify-between items-center py-3 px-4">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/assets/img/logo/enlight-group-logo.png"
                alt="Enlight Group Logo"
                width={280}
                height={90}
                className="h-12 w-auto md:h-14 lg:h-16 xl:h-20"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex lg:justify-between items-center space-x-16 w-[60vw]">
              <NavLink href="/">Home</NavLink>

              <DropdownMenu title="About Us">
                <NavLink href="/AboutElgi" className="block p-2 hover:bg-gray-50">About ELGI</NavLink>
                <NavLink href="/DirectorMessage" className="block p-2 hover:bg-gray-50">Director's Message</NavLink>
                <NavLink href="/ChairmanMessage" className="block p-2 hover:bg-gray-50">Chairman's Message</NavLink>
                <NavLink href="/PrincipalDesk" className="block p-2 hover:bg-gray-50">Principal Desk</NavLink>
              </DropdownMenu>

              <DropdownMenu title="Courses">
                <NavLink href="/nursing" className="block p-2 hover:bg-gray-50">Nursing</NavLink>
                <NavLink href="/paramedicals" className="block p-2 hover:bg-gray-50">Paramedical</NavLink>
              </DropdownMenu>

              <DropdownMenu title="Admission">
                <a href="https://enlight-enquiry-form.vercel.app" target="_blank" rel="noopener noreferrer" className="block p-2 hover:bg-gray-50 text-black">Enquiry Now</a>
                <a href="https://enlight-admission-form.vercel.app" target="_blank" rel="noopener noreferrer" className="block p-2 hover:bg-gray-50 text-black">Online Admission</a>
                <NavLink href="/download-pdf" className="block p-2 hover:bg-gray-50">Prospectus Download</NavLink>
                <a href="https://enlight.edu.in/public/assets/PDF/Enlight%20Final%202025.pdf" target="_blank" rel="noopener noreferrer" className="block p-2 hover:bg-gray-50 text-black">Application Form</a>
              </DropdownMenu>

              <DropdownMenu title="Institutions">
                <NavLink href="/sowrabha-institute-of-nursing-sciences" className="block p-2 hover:bg-gray-50">Sowrabha Institute of Nursing Sciences</NavLink>
                <NavLink href="/enlight-institute-of-paramedical-sciences" className="block p-2 hover:bg-gray-50">Enlight Institute of Para Medical Sciences</NavLink>
                <NavLink href="/enlight-school-of-nursing" className="block p-2 hover:bg-gray-50">Enlight School of Nursing</NavLink>
                <NavLink href="/sri-shantidhama-school-of-nursing" className="block p-2 hover:bg-gray-50">Sri Shantidhama School of Nursing</NavLink>
              </DropdownMenu>

              <DropdownMenu title="Campus">
                <NavLink href="/Hostel" className="block p-2 hover:bg-gray-50">Hostel</NavLink>
                <NavLink href="/Gallery" className="block p-2 hover:bg-gray-50">Gallery</NavLink>
              </DropdownMenu>

              <NavLink href="/contact">Contact</NavLink>
            </nav>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button onClick={toggleMobileMenu} className="text-gray-700 hover:text-primary focus:outline-none" aria-label="Toggle menu" aria-expanded={isMobileMenuOpen}>
                <i className="icofont-navigation-menu text-2xl"></i>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute left-0 right-0 top-full z-40 bg-white py-4 border-t border-gray-200 shadow-md">
              <button className="w-full flex justify-between items-center px-4 py-2 text-left text-black font-bold" onClick={() => { closeMobileMenu(); window.location.href = '/'; }}>Home</button>

              <MobileDropdownMenu title="About Us">
                <MobileNavLink href="/AboutElgi" onClick={closeMobileMenu}>About ELGI</MobileNavLink>
                <MobileNavLink href="/DirectorMessage" onClick={closeMobileMenu}>Director's Message</MobileNavLink>
                <MobileNavLink href="/ChairmanMessage" onClick={closeMobileMenu}>Chairman's Message</MobileNavLink>
                <MobileNavLink href="/PrincipalDesk" onClick={closeMobileMenu}>Principal Desk</MobileNavLink>
              </MobileDropdownMenu>

              <MobileDropdownMenu title="Courses">
                <MobileNavLink href="/nursing" onClick={closeMobileMenu}>Nursing</MobileNavLink>
                <MobileNavLink href="/paramedicals" onClick={closeMobileMenu}>Paramedical</MobileNavLink>
              </MobileDropdownMenu>

              <MobileDropdownMenu title="Admission">
                <a href="https://enlight-enquiry-form.vercel.app" target="_blank" rel="noopener noreferrer" className="block p-2 px-4 hover:bg-gray-100 text-gray-700" onClick={closeMobileMenu}>Enquiry Now</a>
                <a href="https://enlight-admission-form.vercel.app" target="_blank" rel="noopener noreferrer" className="block p-2 px-4 hover:bg-gray-100 text-gray-700" onClick={closeMobileMenu}>Online Admission</a>
                <MobileNavLink href="/download-pdf" onClick={closeMobileMenu}>Prospectus Download</MobileNavLink>
                <a href="https://enlight.edu.in/public/assets/PDF/Enlight%20Final%202025.pdf" target="_blank" rel="noopener noreferrer" className="block p-2 px-4 hover:bg-gray-100 text-gray-700" onClick={closeMobileMenu}>Application Form</a>
              </MobileDropdownMenu>

              <MobileDropdownMenu title="Institutions">
                <MobileNavLink href="/sowrabha-institute-of-nursing-sciences" onClick={closeMobileMenu}>Sowrabha Institute of Nursing Sciences</MobileNavLink>
                <MobileNavLink href="/enlight-institute-of-paramedical-sciences" onClick={closeMobileMenu}>Enlight Institute of Para Medical Sciences</MobileNavLink>
                <MobileNavLink href="/enlight-school-of-nursing" onClick={closeMobileMenu}>Enlight School of Nursing</MobileNavLink>
                <MobileNavLink href="/sri-shantidhama-school-of-nursing" onClick={closeMobileMenu}>Sri Shantidhama School of Nursing</MobileNavLink>
              </MobileDropdownMenu>

              <MobileDropdownMenu title="Campus">
                <MobileNavLink href="/Hostel" onClick={closeMobileMenu}>Hostel</MobileNavLink>
                <MobileNavLink href="/Gallery" onClick={closeMobileMenu}>Gallery</MobileNavLink>
              </MobileDropdownMenu>

              <button className="w-full flex justify-between items-center px-4 py-2 text-left text-black font-bold" onClick={() => { closeMobileMenu(); window.location.href = '/contact'; }}>Contact</button>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default memo(Header);
