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
                src="./about-me.jpg"
                alt="Photographer profile" 
                className="w-full h-auto"
              />
            </div>
            <div className="w-full md:w-1/2 scale-in" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-2xl sm:text-3xl font-playfair font-bold mb-3 sm:mb-4 mt-4 md:mt-0">The Passion Behind the Lens</h2>
              <p className="text-gray-700 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                Hello, I'm Kunal, a hobbyist photographer with a passionate eye for capturing moments and landscapes that tell a story. I've traveled across countries and attempted to capture the best in my journeys.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                I do not have any technical training in photography but have learnt by trying and listening to more pro photographers. Personally I like more of Landscape and Portrait photography.
              </p>
            </div>
          </div>
          
          <div className="fade-in" style={{ animationDelay: "0.4s" }}>
            <h2 className="text-2xl sm:text-3xl font-playfair font-bold mb-4 sm:mb-6">My Journey</h2>
            <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              My journey as a photographer began very early with my Dad's camera at the age of 12 or 13. And I have been glued and interested ever since. From point and shoot to analog SLRs, to DSLRs to mirrorless, I have tried my hands on everything. My passion for travel also enables me to expereince and capture shots from around the world.
            </p>
            <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Each photograph in my collection represents a moment in time, a captured emotion, or a story waiting to be told. I believe that photography has the power to connect people across different backgrounds and experiences.
            </p>
            <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              This is not my full time profession though.
            </p>
          </div>

          <div className="scale-in" style={{ animationDelay: "0.6s" }}>
            <h2 className="text-2xl sm:text-3xl font-playfair font-bold mb-4 sm:mb-6">My Approach</h2>
            <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              I believe in capturing authentic moments rather than creating staged scenes. My approach is patient and observant. I click scenes which I just feel like clicking without complicating with elaborate logical or technical decision making.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Every location has its own story, and I strive to tell that story through my lens with honesty and my persepective. The galleries you'll find on this site represent years of exploration, patience, and a deep appreciation for the world's beauty.
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
