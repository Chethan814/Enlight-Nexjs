'use client';

import Link from 'next/link';
import { useState } from 'react';

interface BreadcrumbLinkProps {
  href: string;
  children: React.ReactNode;
}

const BreadcrumbLink = ({ href, children }: BreadcrumbLinkProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      href={href} 
      className="text-white text-decoration-none d-flex align-items-center"
      style={{ 
        fontSize: '1rem',
        fontWeight: 500,
        transition: 'all 0.3s ease',
        opacity: isHovered ? 0.8 : 1
      }}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      {children}
    </Link>
  );
};

export default BreadcrumbLink;
