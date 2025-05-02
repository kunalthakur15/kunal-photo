
import React from "react";
import ImageSlider from "../components/ImageSlider";
import CategoryGrid from "../components/CategoryGrid";
import NavigationBar from "../components/NavigationBar";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-montserrat">
      {/* Navigation */}
      <NavigationBar />
      
      {/* Hero Section with Image Slider */}
      <section className="fade-in">
        <ImageSlider />
      </section>

      {/* Gallery Categories Section */}
      <section id="galleries" className="fade-in scroll-mt-20" style={{ animationDelay: "0.3s" }}>
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-playfair font-bold text-center mb-12">Explore Galleries</h2>
          <CategoryGrid />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600 font-montserrat">© 2025 Photography Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
