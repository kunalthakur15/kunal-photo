
import React, { useEffect } from "react";
import { GalleryImage } from "../data/galleryData";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { useIsMobile } from "../hooks/use-mobile";

interface LightboxModalProps {
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const LightboxModal: React.FC<LightboxModalProps> = ({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}) => {
  const currentImage = images[currentIndex];
  const isMobile = useIsMobile();

  // Handle keyboard navigation and body scroll locking
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    // Prevent scrolling while lightbox is open
    document.body.style.overflow = "hidden";
    
    // Force scroll to top when lightbox opens
    window.scrollTo(0, 0);
    
    // Add event listeners
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      // Clean up
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto"; // Re-enable scrolling
    };
  }, [onClose, onNext, onPrev]);

  if (!currentImage) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center" 
      style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <div className={`absolute ${isMobile ? 'top-2 right-2' : 'top-4 right-4'} z-[10000]`}>
        <button
          onClick={onClose}
          className={`${isMobile ? 'p-1.5' : 'p-2'} bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white`}
          aria-label="Close"
        >
          <X size={isMobile ? 20 : 24} />
        </button>
      </div>

      <div className="flex items-center justify-center w-full h-full p-4 relative">
        {/* Navigation buttons - adjusted for mobile */}
        <button
          onClick={onPrev}
          className={`absolute ${isMobile ? 'left-2' : 'left-4'} ${isMobile ? 'p-2' : 'p-3'} bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white z-[10000]`}
          aria-label="Previous image"
        >
          <ArrowLeft size={isMobile ? 18 : 24} />
        </button>

        {/* Image container - adjusted for mobile */}
        <div className="flex items-center justify-center max-w-[95vw] max-h-[95vh]">
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className="object-contain max-h-[80vh] max-w-[90vw] md:max-h-[85vh] md:max-w-[85vw]"
          />
          
          {/* Caption area - responsive adjustments */}
          <div className={`absolute bottom-0 left-0 right-0 ${isMobile ? 'p-2' : 'p-4'} bg-black/50 text-white text-center`}>
            <p className={isMobile ? "text-sm truncate" : ""}>{currentImage.alt}</p>
            <p className={`${isMobile ? 'text-xs' : 'text-sm'} text-white/70`}>
              {currentIndex + 1} of {images.length}
            </p>
          </div>
        </div>

        {/* Next button - adjusted for mobile */}
        <button
          onClick={onNext}
          className={`absolute ${isMobile ? 'right-2' : 'right-4'} ${isMobile ? 'p-2' : 'p-3'} bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white z-[10000]`}
          aria-label="Next image"
        >
          <ArrowRight size={isMobile ? 18 : 24} />
        </button>
      </div>
      
      {/* Mobile swipe gesture area */}
      {isMobile && (
        <>
          <div 
            className="absolute left-0 top-0 bottom-0 w-1/4 z-[9998]" 
            onClick={onPrev}
            aria-hidden="true"
          />
          <div 
            className="absolute right-0 top-0 bottom-0 w-1/4 z-[9998]" 
            onClick={onNext}
            aria-hidden="true"
          />
        </>
      )}
    </div>
  );
};

export default LightboxModal;
