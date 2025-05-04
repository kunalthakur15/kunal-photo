
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
      <section id="galleries" className="fade-in scroll-mt-16 sm:scroll-mt-20" style={{ animationDelay: "0.3s" }}>
        <CategoryGrid />
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600 font-montserrat text-sm">© 2025 Photography Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
