
import React from "react";
import NavigationBar from "../components/NavigationBar";

const AboutMe: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-montserrat">
      <NavigationBar />
      
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-16 sm:px-6 lg:px-8">
        <div className="fade-in">
          <h1 className="text-3xl sm:text-5xl font-playfair font-bold mb-6 sm:mb-8 text-center">About Me</h1>
          
          <div className="mb-8 sm:mb-12 flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1581377426798-9755ef262265?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" 
                alt="Photographer profile" 
                className="w-full h-auto"
              />
            </div>
            <div className="w-full md:w-1/2 scale-in" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-2xl sm:text-3xl font-playfair font-bold mb-3 sm:mb-4 mt-4 md:mt-0">The Passion Behind the Lens</h2>
              <p className="text-gray-700 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                Hello, I'm Alex, a photographer with a passionate eye for capturing moments that tell a story. With over a decade of experience, I've traveled across continents to find the perfect shot.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                My work is inspired by the interplay of light, texture, and emotion. Whether it's a dramatic landscape or an intimate portrait, I strive to create images that resonate with viewers on a deeper level.
              </p>
            </div>
          </div>
          
          <div className="fade-in" style={{ animationDelay: "0.4s" }}>
            <h2 className="text-2xl sm:text-3xl font-playfair font-bold mb-4 sm:mb-6">My Journey</h2>
            <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              My journey as a photographer began when I received my first camera at the age of 16. What started as a casual hobby quickly evolved into a lifelong pursuit of visual storytelling. I've since had the privilege of documenting landscapes and cultures across six continents.
            </p>
            <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Each photograph in my collection represents a moment in time, a captured emotion, or a story waiting to be told. I believe that photography has the power to connect people across different backgrounds and experiences.
            </p>
            <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              When I'm not behind the lens, you'll find me hiking in remote locations, exploring new cultures, or teaching photography workshops to aspiring photographers who share my passion.
            </p>
          </div>

          <div className="scale-in" style={{ animationDelay: "0.6s" }}>
            <h2 className="text-2xl sm:text-3xl font-playfair font-bold mb-4 sm:mb-6">My Approach</h2>
            <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              I believe in capturing authentic moments rather than creating staged scenes. My approach is patient and observant, waiting for the perfect light, the perfect moment, and the perfect composition to come together naturally.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Every location has its own story, and I strive to tell that story through my lens with honesty and artistic vision. The galleries you'll find on this site represent years of exploration, patience, and a deep appreciation for the world's beauty.
            </p>
          </div>
        </div>
      </div>
      
      <footer className="py-8 sm:py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600 text-sm">© 2025 Photography Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutMe;
