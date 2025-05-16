import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "../hooks/use-mobile";
import { GalleryImage } from "../data/galleryData";

const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useIsMobile();

  // Load images from Main Slider folder
  useEffect(() => {
    const loadImages = () => {
      try {
        // Create array of 9 slider images
        const sliderImages: GalleryImage[] = Array.from({ length: 9 }, (_, i) => ({
          id: i + 1,
          src: `./Main Slider/slider-${i + 1}.jpg`,
          alt: `Slider Image ${i + 1}`,
          width: 1200,
          height: 800
        }));
        
        setImages(sliderImages);
      } catch (error) {
        console.error("Error loading images:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadImages();
  }, []);

  // Auto-advance the slider
  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (isLoading) {
    return (
      <div className="relative w-full h-[50vh] sm:h-[80vh] overflow-hidden bg-gray-100 flex items-center justify-center">
        <div className="text-gray-500">Loading images...</div>
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className="relative w-full h-[50vh] sm:h-[80vh] overflow-hidden bg-gray-100 flex items-center justify-center">
        <div className="text-gray-500">No images available</div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[50vh] sm:h-[80vh] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={image.id}
          className={`slider-image ${
            index === currentIndex ? "slider-image-active" : "slider-image-inactive"
          }`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
            onError={(e) => {
              console.error(`Failed to load image ${image.id}:`, e);
              const img = e.target as HTMLImageElement;
              img.src = 'https://via.placeholder.com/1200x800?text=Image+Not+Found';
            }}
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}
      
      <div className="absolute inset-0 flex items-center justify-between p-2 sm:p-4">
        <button
          onClick={goToPrevSlide}
          className="nav-arrow z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft size={isMobile ? 18 : 24} />
        </button>
        <button
          onClick={goToNextSlide}
          className="nav-arrow z-10"
          aria-label="Next slide"
        >
          <ChevronRight size={isMobile ? 18 : 24} />
        </button>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/70 to-transparent text-white z-10">
        <h1 className="font-allura text-3xl sm:text-5xl md:text-6xl font-bold mb-1 sm:mb-2">Capturing Moments</h1>
        <p className="text-base sm:text-xl opacity-90">Explore the world through my pictures from around the world</p>
      </div>

      <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 flex justify-center gap-1 sm:gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex ? "w-6 sm:w-8 bg-white" : "w-2 bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
