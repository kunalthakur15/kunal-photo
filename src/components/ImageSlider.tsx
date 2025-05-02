
import React, { useState, useEffect } from "react";
import { sliderImages } from "../data/galleryData";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance the slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {sliderImages.map((image, index) => (
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
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}
      
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={goToPrevSlide}
          className="nav-arrow z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={goToNextSlide}
          className="nav-arrow z-10"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Capturing Moments</h1>
        <p className="text-xl opacity-90">Explore breathtaking photography from around the world</p>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "w-8 bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
