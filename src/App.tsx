import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Equipment from './pages/Equipment';
import Contact from './pages/Contact';
import News from './pages/News';
import CustomCursor from './components/CustomCursor';
import BackToTop from './components/BackToTop';
import LoadingIndicator from './components/LoadingIndicator';

function AppContent() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {isLoading && <LoadingIndicator />}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/equipment" element={<Equipment />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <BackToTop />
    </>
  );
}

function App() {
  return (
    <>
      <CustomCursor />
      <Router>
        <AppContent />
      </Router>
    </>
  );
}

export default App;
