
import React from "react";
import { GalleryImage } from "../data/galleryData";

interface GalleryItemProps {
  image: GalleryImage;
  onClick: () => void;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ image, onClick }) => {
  return (
    <div 
      className="gallery-item cursor-pointer"
      onClick={onClick}
    >
      <div 
        className="relative overflow-hidden rounded-lg"
        style={{ 
          paddingBottom: `${(image.height / image.width) * 100}%` 
        }}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="gallery-item-overlay">
          <div className="p-4 text-white">
            <span className="text-sm opacity-75">Click to enlarge</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
