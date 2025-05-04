
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { galleryCategories } from "../data/galleryData";
import MasonryGallery from "./MasonryGallery";
import LightboxModal from "./LightboxModal";
import { ChevronLeft } from "lucide-react";
import NavigationBar from "./NavigationBar";
import { useIsMobile } from "../hooks/use-mobile";

const GalleryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useIsMobile();

  // Find the gallery by id
  const gallery = galleryCategories.find((cat) => cat.id === categoryId);

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [categoryId]);

  // Ensure the page is at the top when loading a gallery
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryId]);

  if (!gallery) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Gallery Not Found</h2>
          <Link to="/" className="text-blue-600 hover:underline">
            Return to homepage
          </Link>
        </div>
      </div>
    );
  }

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
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

  // Create a portal for the lightbox
  const renderLightbox = () => {
    if (!lightboxOpen) return null;

    return (
      <LightboxModal
        images={gallery.images}
        currentIndex={currentImageIndex}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <NavigationBar />
      
      {/* Header Banner */}
      <div 
        className="relative h-[30vh] sm:h-[40vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${gallery.coverImage})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 font-playfair text-center">{gallery.title}</h1>
          <p className="text-base sm:text-xl opacity-90 max-w-2xl text-center font-montserrat">
            {gallery.description}
          </p>
        </div>
      </div>

      {/* Back to home button */}
      <div className="max-w-7xl mx-auto px-4 py-3 sm:py-6">
        <Link 
          to="/" 
          className="inline-flex items-center text-gray-700 hover:text-black transition-colors font-montserrat text-sm sm:text-base"
        >
          <ChevronLeft size={isMobile ? 16 : 20} />
          <span>Back to collections</span>
        </Link>
      </div>

      {/* Gallery */}
      <div className="max-w-7xl mx-auto px-4 py-4 sm:py-8 mb-8 sm:mb-16">
        {isLoading ? (
          <div className="py-12 sm:py-20 text-center">
            <div className="inline-block w-6 sm:w-8 h-6 sm:h-8 border-4 border-gray-300 border-t-gray-800 rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-600 font-montserrat text-sm sm:text-base">Loading gallery...</p>
          </div>
        ) : (
          <MasonryGallery 
            images={gallery.images} 
            onImageClick={handleImageClick} 
          />
        )}
      </div>

      {/* Lightbox - rendered at the end to ensure proper stacking */}
      {renderLightbox()}

      {/* Footer */}
      <footer className="py-8 sm:py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600 font-montserrat text-sm">© 2025 Photography Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default GalleryPage;
