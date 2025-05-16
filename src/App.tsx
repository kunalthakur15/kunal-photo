import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import GalleryPage from './components/GalleryPage';
import AboutMe from './pages/AboutMe';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/gallery/:categoryId" element={<GalleryPage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
