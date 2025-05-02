
import React, { useEffect } from "react";
import { GalleryImage } from "../data/galleryData";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

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
    <div className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center" style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}>
      <div className="absolute top-4 right-4 z-[10000]">
        <button
          onClick={onClose}
          className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white"
          aria-label="Close"
        >
          <X size={24} />
        </button>
      </div>

      <div className="flex items-center justify-center w-full h-full p-4 relative">
        <button
          onClick={onPrev}
          className="absolute left-4 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white z-[10000]"
          aria-label="Previous image"
        >
          <ArrowLeft size={24} />
        </button>

        <div className="flex items-center justify-center max-w-[90vw] max-h-[90vh]">
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className="object-contain max-h-[85vh] max-w-[85vw]"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/50 text-white text-center">
            <p>{currentImage.alt}</p>
            <p className="text-sm text-white/70">{currentIndex + 1} of {images.length}</p>
          </div>
        </div>

        <button
          onClick={onNext}
          className="absolute right-4 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white z-[10000]"
          aria-label="Next image"
        >
          <ArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default LightboxModal;
