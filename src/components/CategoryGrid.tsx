
import React from "react";
import { Link } from "react-router-dom";
import { galleryCategories } from "../data/galleryData";

const CategoryGrid: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Gallery Collections</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our curated collections of stunning photography from diverse landscapes 
          and breathtaking destinations around the world.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {galleryCategories.map((category) => (
          <Link 
            to={`/gallery/${category.id}`} 
            key={category.id}
            className="gallery-item group"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src={category.coverImage}
                alt={category.title}
                className="w-full h-full object-cover"
              />
              <div className="gallery-item-overlay">
                <div className="text-white text-center p-6">
                  <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                  <p className="text-white/80">{category.description}</p>
                  <div className="mt-4 inline-block px-4 py-2 border border-white/50 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-colors duration-300">
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
