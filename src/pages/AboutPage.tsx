import React from "react";
import NavigationBar from "../components/NavigationBar";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavigationBar />
      
      {/* Hero Section */}
      <div className="relative h-[40vh] sm:h-[50vh] bg-gray-900">
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white font-playfair">
            About Me
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold mb-6 font-playfair">My Journey</h2>
          <p className="text-gray-700 mb-6 font-montserrat">
            Photography has been my passion for over a decade. Through my lens, I capture the beauty of moments,
            the essence of places, and the stories that unfold in everyday life. My journey began with a simple
            camera and has evolved into a lifelong pursuit of visual storytelling.
          </p>

          <h2 className="text-3xl font-bold mb-6 font-playfair">My Approach</h2>
          <p className="text-gray-700 mb-6 font-montserrat">
            I believe in capturing authentic moments that tell a story. Whether it's the golden light of sunset,
            the candid expressions of people, or the intricate details of nature, I strive to create images that
            evoke emotion and create lasting memories.
          </p>

          <h2 className="text-3xl font-bold mb-6 font-playfair">My Style</h2>
          <p className="text-gray-700 mb-6 font-montserrat">
            My photographic style is characterized by a blend of natural light, thoughtful composition, and
            attention to detail. I aim to create images that are both visually striking and emotionally resonant,
            capturing the essence of each subject in its most authentic form.
          </p>

          <h2 className="text-3xl font-bold mb-6 font-playfair">Equipment</h2>
          <p className="text-gray-700 mb-6 font-montserrat">
            While I believe that the best camera is the one you have with you, I primarily shoot with professional
            equipment that allows me to capture the highest quality images in any situation. My gear includes:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 font-montserrat">
            <li>Professional DSLR and mirrorless cameras</li>
            <li>High-quality prime and zoom lenses</li>
            <li>Professional lighting equipment</li>
            <li>Advanced post-processing tools</li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 sm:py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600 font-montserrat text-sm">
            © 2025 Photography Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage; 