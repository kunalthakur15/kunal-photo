import React from "react";
import { Link } from "react-router-dom";
import { getGalleryImages } from "../utils/galleryUtils";

const CategoryGrid: React.FC = () => {
  const galleries = getGalleryImages();
  return (
    <section className="max-w-7xl mx-auto px-4 py-8 sm:py-16">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="font-allura text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Gallery Collections</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-2">
          Explore the world through my pictures from around the world
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {galleries.map((gallery) => (
          <Link 
            to={`/gallery/${gallery.id}`} 
            key={gallery.id}
            className="gallery-item group"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src={
                  gallery.images.length > 0 && gallery.images[0].src
                    ? `/${gallery.images[0].src}`
                    : "https://via.placeholder.com/600x400?text=No+Image"
                }
                alt={gallery.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 right-0 bg-black/40 py-2 px-4 text-white text-xl font-allura font-bold text-center z-10 pointer-events-none transition-opacity duration-300 group-hover:opacity-0">
                {gallery.name}
              </div>
              <div className="gallery-item-overlay">
                <div className="text-white text-center p-4 sm:p-6">
                  <h3 className="font-allura text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">{gallery.name}</h3>
                  <div className="mt-3 sm:mt-4 inline-block px-3 sm:px-4 py-1.5 sm:py-2 border border-white/50 rounded-full text-xs sm:text-sm font-medium hover:bg-white hover:text-black transition-colors duration-300">
                    View Gallery
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
