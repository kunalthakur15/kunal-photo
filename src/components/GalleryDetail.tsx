import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getGalleryImages } from '../utils/galleryUtils';
import { ChevronLeft } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';
import MasonryGallery from './MasonryGallery';
import LightboxModal from './LightboxModal';
import { GalleryImage } from '../data/galleryData';

const GalleryDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const galleries = getGalleryImages();
  const gallery = galleries.find(g => g.id === Number(id));
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useIsMobile();

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [id]);

  // Ensure the page is at the top when loading a gallery
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!gallery) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Gallery Not Found</h2>
          <Link to="/" className="text-blue-600 hover:underline">
            Return to collections
          </Link>
        </div>
      </div>
    );
  }

  const handleImageClick = (index: number) => {
    console.log('Image clicked:', index);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    console.log('Lightbox state:', true);
    // Force scroll to top to ensure lightbox is visible
    window.scrollTo(0, 0);
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) =>
      prev === gallery.images.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? gallery.images.length - 1 : prev - 1
    );
  };

  // Convert gallery images to the format expected by MasonryGallery
  const masonryImages: GalleryImage[] = gallery.images.map((image, index) => {
    const isPortrait = index % 3 === 0; // Every third image is portrait
    const imageUrl = image.src ? `/${image.src}` : '';
    return {
      id: index + 1,
      src: imageUrl,
      lightboxSrc: imageUrl,
      alt: image.alt,
      width: 1200,
      height: isPortrait ? 1600 : 800
    };
  });

  console.log('Lightbox open:', lightboxOpen);
  console.log('Current image index:', currentImageIndex);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Link 
          to="/" 
          className="inline-flex items-center text-gray-700 hover:text-black transition-colors mb-8"
        >
          <ChevronLeft size={isMobile ? 16 : 20} />
          <span>Back to collections</span>
        </Link>
        <h1 className="text-4xl font-bold mb-8 text-center font-serif">{gallery.name}</h1>
      </div>

      {/* Gallery */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        {isLoading ? (
          <div className="py-12 sm:py-20 text-center">
            <div className="inline-block w-6 sm:w-8 h-6 sm:h-8 border-4 border-gray-300 border-t-gray-800 rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-600 font-montserrat text-sm sm:text-base">Loading gallery...</p>
          </div>
        ) : (
          <MasonryGallery 
            images={masonryImages} 
            onImageClick={handleImageClick} 
          />
        )}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <LightboxModal
          images={masonryImages}
          currentIndex={currentImageIndex}
          onClose={() => setLightboxOpen(false)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </div>
  );
};

export default GalleryDetail; 