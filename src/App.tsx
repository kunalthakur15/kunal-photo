import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Index from "./pages/Index";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import GalleryPage from "./components/GalleryPage";
import GalleryDetail from './components/GalleryDetail';
import { getRandomAnimation } from "./utils/transitions";

const queryClient = new QueryClient();

// Component to handle page transitions
const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionClass, setTransitionClass] = useState("");

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionClass("opacity-0");
      
      // After a small delay, update to the new page with a random transition
      const timeout = setTimeout(() => {
        setDisplayLocation(location);
        setTransitionClass(getRandomAnimation());
      }, 300);
      
      return () => clearTimeout(timeout);
    }
  }, [location, displayLocation]);

  return (
    <div className={`transition-all duration-300 ${transitionClass}`}>
      {children}
    </div>
  );
};

const AppRoutes = () => {
  const location = useLocation();
  
  return (
    <PageTransition>
      <Routes location={location}>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery/:id" element={<GalleryDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PageTransition>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
