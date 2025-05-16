import React from "react";
import { Link } from "react-router-dom";
import { getGalleryImages } from "../utils/galleryUtils";
import { useIsMobile } from "../hooks/use-mobile";

const CategoryGrid: React.FC = () => {
  const isMobile = useIsMobile();
  const galleries = getGalleryImages();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {galleries.map((gallery, index) => (
          <Link
            key={gallery.id}
            to={`/gallery/${gallery.id}`}
            className="group relative aspect-[4/3] overflow-hidden rounded-lg"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Background Image */}
            {gallery.images.length > 0 && (
              <img
                src={gallery.images[0].src}
                alt={gallery.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            )}
            
            {/* Top Bar - Always Visible */}
            <div className="absolute top-0 left-0 right-0 bg-black/60 px-4 py-2 transition-opacity duration-300 group-hover:opacity-0">
              <h3 className="text-xl font-medium text-white font-allura text-center">
                {gallery.name}
              </h3>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
              <div className="text-center px-4">
                <h3 className="text-2xl sm:text-3xl font-medium text-white font-allura mb-2">
                  {gallery.name}
                </h3>
                <p className="text-white/90 text-sm sm:text-base mb-4 font-montserrat">
                  {gallery.images.length} photos
                </p>
                <span className="inline-block px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-md transition-colors duration-200 font-montserrat text-sm">
                  View Gallery
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
