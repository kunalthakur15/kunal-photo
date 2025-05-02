
import React from "react";
import { GalleryImage } from "../data/galleryData";
import GalleryItem from "./GalleryItem";

interface MasonryGalleryProps {
  images: GalleryImage[];
  onImageClick: (index: number) => void;
}

const MasonryGallery: React.FC<MasonryGalleryProps> = ({ images, onImageClick }) => {
  // Split images into two columns for a basic masonry layout
  const leftColumnImages = images.filter((_, index) => index % 2 === 0);
  const rightColumnImages = images.filter((_, index) => index % 2 === 1);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      <div className="space-y-4 md:space-y-6">
        {leftColumnImages.map((image, index) => (
          <div key={image.id} className="scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <GalleryItem 
              image={image} 
              onClick={() => onImageClick(images.findIndex(img => img.id === image.id))}
            />
          </div>
        ))}
      </div>
      <div className="space-y-4 md:space-y-6">
        {rightColumnImages.map((image, index) => (
          <div key={image.id} className="scale-in" style={{ animationDelay: `${(index + leftColumnImages.length) * 0.1}s` }}>
            <GalleryItem 
              image={image}
              onClick={() => onImageClick(images.findIndex(img => img.id === image.id))}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MasonryGallery;
