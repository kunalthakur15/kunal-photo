import React from "react";
import { GalleryImage } from "../data/galleryData";
import GalleryItem from "./GalleryItem";
import { useIsMobile } from "../hooks/use-mobile";
import "../styles/gallery.css";

interface MasonryGalleryProps {
  images: GalleryImage[];
  onImageClick: (index: number) => void;
}

const MasonryGallery: React.FC<MasonryGalleryProps> = ({ images, onImageClick }) => {
  const isMobile = useIsMobile();
  
  // For mobile view, use a single column layout
  if (isMobile) {
    return (
      <div className="grid grid-cols-1 gap-3">
        {images.map((image, index) => (
          <div key={image.id} className="scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <GalleryItem 
              image={image} 
              onClick={() => onImageClick(index)}
            />
          </div>
        ))}
      </div>
    );
  }

  // For desktop, use the column-based masonry layout
  return (
    <div className="masonry-columns">
      {images.map((image, index) => (
        <div 
          key={image.id} 
          className="masonry-item scale-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <GalleryItem 
            image={image} 
            onClick={() => onImageClick(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default MasonryGallery;
