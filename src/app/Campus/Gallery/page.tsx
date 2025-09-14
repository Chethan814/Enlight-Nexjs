// app/gallery/page.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { FaEye } from 'react-icons/fa';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

// Define the type for gallery items
interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
}

// Gallery images data
const galleryImages: GalleryItem[] = [
  { id: 1, src: '/assets/img/gallery/gallery-1.jpg', alt: 'Gallery Image 1', width: 370, height: 300 },
  { id: 2, src: '/assets/img/gallery/gallery-2.jpg', alt: 'Gallery Image 2', width: 370, height: 300 },
  { id: 3, src: '/assets/img/gallery/gallery-3.jpg', alt: 'Gallery Image 3', width: 370, height: 300 },
  { id: 4, src: '/assets/img/gallery/gallery-4.jpg', alt: 'Gallery Image 4', width: 370, height: 300 },
  { id: 5, src: '/assets/img/gallery/gallery-5.jpg', alt: 'Gallery Image 5', width: 370, height: 300 },
  { id: 6, src: '/assets/img/gallery/gallery-6.jpg', alt: 'Gallery Image 6', width: 370, height: 300 },
  { id: 7, src: '/assets/img/gallery/gallery-7.jpg', alt: 'Gallery Image 7', width: 370, height: 300 },
  { id: 8, src: '/assets/img/gallery/gallery-8.jpg', alt: 'Gallery Image 8', width: 370, height: 300 },
];

export default function GalleryPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      {/* Breadcrumb Section */}
      <div 
        className="breadcrumbarea" 
        style={{ 
          backgroundImage: 'url(/assets/img/infobanner/infobanner-3.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          padding: '100px 0'
        }}
      >
        <div 
          className="dark-overlay" 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.6)'
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="breadcrumb__content__wraper" data-aos="fade-up">
                <div className="breadcrumb__title">
                  <h2 className="heading text-white">Gallery</h2>
                </div>
                <div className="breadcrumb__inner">
                  <ul className="d-flex" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li className="me-2">
                      <Link href="/" className="text-white text-decoration-none">
                        Home
                      </Link>
                    </li>
                    <li className="text-white">/ Gallery</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="gallery">
        <div className="container-fluid full__width__padding sp_top_100 sp_bottom_100">
          <div className="blogsidebar__content__wraper__2">
            <div className="photo__gallery__img">
              {galleryImages.map((image, index) => (
                <div key={image.id} className="single__gallery__img">
                  <div className="gallery__image__wrapper">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      className="img-fluid"
                      style={{ 
                        width: '100%', 
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease'
                      }}
                    />
                    <div 
                      className="gallery__icon"
                      onClick={() => openLightbox(index)}
                    >
                      <FaEye className="gallery__icon__eye" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={galleryImages.map(item => ({
            src: item.src,
            width: item.width,
            height: item.height,
            alt: item.alt
          }))}
          index={photoIndex}
        />
      )}

      <style jsx global>{`
        /* Gallery Styles */
        .gallery {
          background-color: #f8f9fa;
        }
        
        .photo__gallery__img {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
          padding: 0 15px;
        }
        
        .single__gallery__img {
          position: relative;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }
        
        .single__gallery__img:hover {
          transform: translateY(-5px);
        }
        
        .gallery__image__wrapper {
          position: relative;
          width: 100%;
          height: 300px;
          overflow: hidden;
        }
        
        .gallery__icon {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          cursor: pointer;
        }
        
        .single__gallery__img:hover .gallery__icon {
          opacity: 1;
        }
        
        .gallery__icon__eye {
          color: #fff;
          font-size: 30px;
          transition: transform 0.3s ease;
        }
        
        .gallery__icon:hover .gallery__icon__eye {
          transform: scale(1.2);
        }
        
        /* Responsive Adjustments */
        @media (max-width: 1199px) {
          .photo__gallery__img {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          }
        }
        
        @media (max-width: 991px) {
          .photo__gallery__img {
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          }
          
          .gallery__image__wrapper {
            height: 250px;
          }
        }
        
        @media (max-width: 767px) {
          .photo__gallery__img {
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
            gap: 15px;
          }
          
          .gallery__image__wrapper {
            height: 200px;
          }
        }
        
        @media (max-width: 575px) {
          .photo__gallery__img {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </>
  );
}