import React, { useState } from 'react';
import { getGalleryImages, Gallery as GalleryType } from '../utils/galleryUtils';

const Gallery: React.FC = () => {
  const galleries = getGalleryImages();
  const [selectedGallery, setSelectedGallery] = useState<GalleryType | null>(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-12 text-center font-serif">Photo Galleries</h1>
      
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleries.map((gallery) => (
          <div
            key={gallery.id}
            onClick={() => setSelectedGallery(gallery)}
            className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group"
          >
            {/* Background Image */}
            {gallery.images.length > 0 && (
              <img
                src={`https://drive.google.com/uc?export=view&id=${gallery.images[0].fileId}`}
                alt={gallery.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            )}
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-50">
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-2xl font-bold text-white font-serif">{gallery.name}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Gallery Modal */}
      {selectedGallery && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-6xl">
            <button
              onClick={() => setSelectedGallery(null)}
              className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300"
            >
              Close
            </button>
            <h2 className="text-3xl font-bold text-white mb-8 text-center font-serif">{selectedGallery.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {selectedGallery.images.map((image) => (
                <div key={image.id} className="relative aspect-square overflow-hidden rounded-lg">
                  <img
                    src={`https://drive.google.com/uc?export=view&id=${image.fileId}`}
                    alt={image.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery; 